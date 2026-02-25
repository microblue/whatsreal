-- 清理分类：保留从beginning到AI科技的分类，删除其他分类

-- 删除不需要的分类的市场
-- 保留分类：加密市场、股票市场、商品市场、外汇市场、体育、AI科技
DELETE FROM markets 
WHERE category NOT IN ('加密市场', '股票市场', '商品市场', '外汇市场', '体育', 'AI科技');

-- 清理对应的交易记录（如果market被删除，相关交易也应该删除）
DELETE FROM trades 
WHERE market_id NOT IN (SELECT id FROM markets);

-- 清理对应的持仓记录（如果market被删除，相关持仓也应该删除）
DELETE FROM positions 
WHERE market_id NOT IN (SELECT id FROM markets);

-- 清理对应的订单记录（如果存在orders表）
DELETE FROM orders 
WHERE market_id NOT IN (SELECT id FROM markets);

-- 清理对应的评论记录
DELETE FROM comments 
WHERE market_id NOT IN (SELECT id FROM markets);