-- 修复评论表和RLS策略

-- 1. 删除所有相关的RLS策略
DROP POLICY IF EXISTS "Comments are viewable by everyone" ON comments;
DROP POLICY IF EXISTS "Users can insert comments" ON comments;
DROP POLICY IF EXISTS "Users can view comments" ON comments;
DROP POLICY IF EXISTS "Users can update comments" ON comments;
DROP POLICY IF EXISTS "Users can delete comments" ON comments;
ALTER TABLE comments DROP CONSTRAINT IF EXISTS comments_user_id_fkey;

-- 2. 由于profiles表的id现在是text类型（钱包地址），comments表的user_id应该保持text
-- 不需要修改类型，直接创建RLS策略

-- 3. 创建新的RLS策略（开放访问）
CREATE POLICY "Anyone can view comments" ON comments 
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert comments" ON comments 
  FOR INSERT WITH CHECK (true);

-- 4. 确保comments表启用RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;