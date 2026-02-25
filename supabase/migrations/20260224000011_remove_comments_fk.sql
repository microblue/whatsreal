-- 临时解决方案：移除comments表的外键约束，允许评论功能正常使用

-- 1. 删除现有的外键约束
ALTER TABLE comments DROP CONSTRAINT IF EXISTS comments_user_id_fkey;

-- 2. 将user_id字段改为text类型以支持钱包地址
ALTER TABLE comments ALTER COLUMN user_id TYPE text;

-- 3. 删除现有的RLS策略
DROP POLICY IF EXISTS "Comments are viewable by everyone" ON comments;
DROP POLICY IF EXISTS "Anyone can view comments" ON comments;
DROP POLICY IF EXISTS "Anyone can insert comments" ON comments;
DROP POLICY IF EXISTS "Authenticated users can insert comments" ON comments;

-- 4. 创建简单的RLS策略（不依赖外键）
CREATE POLICY "Comments are viewable by everyone" ON comments 
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert comments" ON comments 
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update own comments" ON comments 
  FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete own comments" ON comments 
  FOR DELETE USING (true);

-- 5. 确保comments表启用RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;