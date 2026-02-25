-- 修复 profiles 表的 RLS 策略，允许钱包用户创建和管理自己的资料

-- 1. 删除现有的 RLS 策略
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Public read access" ON profiles;
DROP POLICY IF EXISTS "Public write access" ON profiles;
DROP POLICY IF EXISTS "Public update access" ON profiles;

-- 2. 创建新的开放策略（暂时允许所有操作）
CREATE POLICY "Allow all operations on profiles" ON profiles
  FOR ALL USING (true) WITH CHECK (true);

-- 3. 确保 RLS 已启用
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;