-- Drop all existing policies and recreate
do $$
declare
  pol record;
begin
  for pol in select policyname, tablename from pg_policies where schemaname = 'public' loop
    execute format('drop policy if exists %I on %I', pol.policyname, pol.tablename);
  end loop;
end $$;

-- Comments
create policy "Comments are viewable by everyone" on comments for select using (true);
create policy "Users can insert comments" on comments for insert to authenticated with check (auth.uid() = user_id);

-- Positions
create policy "Positions are viewable by everyone" on positions for select using (true);
create policy "Users can insert positions" on positions for insert to authenticated with check (auth.uid() = user_id);
create policy "Users can update own positions" on positions for update to authenticated using (auth.uid() = user_id);

-- Trades
create policy "Trades are viewable by everyone" on trades for select using (true);
create policy "Users can insert trades" on trades for insert to authenticated with check (auth.uid() = user_id);

-- Profiles
create policy "Profiles are viewable by everyone" on profiles for select using (true);
create policy "Users can insert own profile" on profiles for insert to authenticated with check (auth.uid() = id);
create policy "Users can update own profile" on profiles for update to authenticated using (auth.uid() = id);

-- Markets
create policy "Markets are viewable by everyone" on markets for select using (true);
create policy "Users can create markets" on markets for insert to authenticated with check (auth.uid() = creator_id);
create policy "Users can update markets" on markets for update to authenticated using (true);
