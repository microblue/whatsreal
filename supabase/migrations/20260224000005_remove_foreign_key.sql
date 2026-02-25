-- 删除 profiles 表对 auth.users 的外键约束

-- 1. 删除外键约束
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_id_fkey;

-- 2. 确保 id 列是文本类型（如果还不是的话）
-- ALTER TABLE profiles ALTER COLUMN id TYPE text;

-- 3. 重新创建主键约束（如果需要）
-- ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_pkey;
-- ALTER TABLE profiles ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);