-- WhatsReal Database Schema

-- 用户资料
create table profiles (
  id uuid references auth.users primary key,
  username text unique,
  avatar_url text,
  balance decimal(12,2) default 10000.00,
  created_at timestamptz default now()
);

-- 预测市场
create table markets (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text not null default '其他',
  image_url text,
  yes_price decimal(5,2) default 50.00, -- 0-100
  volume decimal(12,2) default 0,
  end_date date not null,
  status text default 'active' check (status in ('active', 'resolved', 'cancelled')),
  resolution text check (resolution in ('yes', 'no')),
  creator_id uuid references profiles(id),
  created_at timestamptz default now()
);

-- 用户持仓
create table positions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) not null,
  market_id uuid references markets(id) not null,
  side text not null check (side in ('yes', 'no')),
  shares decimal(12,2) default 0,
  avg_price decimal(5,2) default 0,
  created_at timestamptz default now(),
  unique(user_id, market_id, side)
);

-- 交易记录
create table trades (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) not null,
  market_id uuid references markets(id) not null,
  side text not null check (side in ('yes', 'no')),
  action text not null check (action in ('buy', 'sell')),
  shares decimal(12,2) not null,
  price decimal(5,2) not null,
  amount decimal(12,2) not null,
  created_at timestamptz default now()
);

-- 评论
create table comments (
  id uuid primary key default gen_random_uuid(),
  market_id uuid references markets(id) not null,
  user_id uuid references profiles(id) not null,
  content text not null,
  created_at timestamptz default now()
);

-- RLS policies
alter table profiles enable row level security;
alter table markets enable row level security;
alter table positions enable row level security;
alter table trades enable row level security;
alter table comments enable row level security;

-- Public read for markets and comments
create policy "Markets are viewable by everyone" on markets for select using (true);
create policy "Comments are viewable by everyone" on comments for select using (true);

-- Users can read their own data
create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can view own positions" on positions for select using (auth.uid() = user_id);
create policy "Users can view own trades" on trades for select using (auth.uid() = user_id);
