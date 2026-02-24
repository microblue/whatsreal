-- Trading System: AMM (LMSR) + Order Book

-- Add AMM fields to markets
ALTER TABLE markets
  ADD COLUMN IF NOT EXISTS yes_shares float8 DEFAULT 0,
  ADD COLUMN IF NOT EXISTS no_shares float8 DEFAULT 0,
  ADD COLUMN IF NOT EXISTS liquidity_param float8 DEFAULT 100,
  ADD COLUMN IF NOT EXISTS resolved_at timestamptz,
  ADD COLUMN IF NOT EXISTS resolver_id uuid REFERENCES profiles(id);

-- Orders table (limit order book)
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) NOT NULL,
  market_id uuid REFERENCES markets(id) NOT NULL,
  side text NOT NULL CHECK (side IN ('yes', 'no')),
  type text NOT NULL CHECK (type IN ('limit', 'market')),
  price decimal(5,2),
  shares decimal(12,2) NOT NULL,
  filled_shares decimal(12,2) DEFAULT 0,
  status text DEFAULT 'open' CHECK (status IN ('open', 'filled', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- RLS for orders
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Orders are viewable by owner" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Orders are insertable by owner" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Orders are updatable by owner" ON orders FOR UPDATE USING (auth.uid() = user_id);

-- Allow service_role full access (for edge functions) - handled automatically by Supabase

-- Additional RLS: let users insert their own trades/positions (edge functions use service_role, but just in case)
CREATE POLICY "Users can insert own positions" ON positions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own positions" ON positions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own trades" ON trades FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow all authenticated users to read all trades (for activity feed)
CREATE POLICY "Trades are viewable by everyone" ON trades FOR SELECT USING (true);

-- Allow authenticated users to read all positions (for leaderboard etc)
CREATE POLICY "Positions are viewable by everyone" ON positions FOR SELECT USING (true);

-- Profiles: allow insert for new users (trigger/edge function)
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
-- Allow reading all profiles (for usernames)
CREATE POLICY "Profiles are viewable by everyone" ON profiles FOR SELECT USING (true);

-- Markets: allow authenticated users to create
CREATE POLICY "Authenticated users can create markets" ON markets FOR INSERT WITH CHECK (auth.uid() = creator_id);
-- Allow service role to update markets (for trades updating shares/price)
CREATE POLICY "Markets are updatable by creator" ON markets FOR UPDATE USING (auth.uid() = creator_id);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE markets;
ALTER PUBLICATION supabase_realtime ADD TABLE trades;

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, username, balance)
  VALUES (new.id, new.raw_user_meta_data->>'username', 10000.00)
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
