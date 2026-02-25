-- 为markets表添加多语言支持

-- 1. 为markets表添加英文字段
ALTER TABLE markets ADD COLUMN IF NOT EXISTS title_en text;
ALTER TABLE markets ADD COLUMN IF NOT EXISTS description_en text;
ALTER TABLE markets ADD COLUMN IF NOT EXISTS category_en text;

-- 2. 为现有市场添加英文翻译
UPDATE markets SET 
  title_en = CASE 
    WHEN title LIKE '%比特币%' AND title LIKE '%2026%' THEN 'Will Bitcoin exceed $200,000 by the end of 2026?'
    WHEN title LIKE '%英伟达%' AND title LIKE '%5万亿%' THEN 'Will NVIDIA market cap exceed $5 trillion by 2026?'
    WHEN title LIKE '%特斯拉%' AND title LIKE '%500美元%' THEN 'Will Tesla stock price exceed $500 by end of 2026?'
    WHEN title LIKE '%苹果%' AND title LIKE '%4万亿%' THEN 'Will Apple market cap return to $4 trillion in 2026?'
    WHEN title LIKE '%黄金%' AND title LIKE '%3000美元%' THEN 'Will gold price break $3,000 per ounce in 2026?'
    WHEN title LIKE '%原油%' AND title LIKE '%150美元%' THEN 'Will oil price exceed $150 per barrel in 2026?'
    WHEN title LIKE '%铜价%' AND title LIKE '%12000美元%' THEN 'Will copper futures reach $12,000/ton in 2026?'
    WHEN title LIKE '%美元兑人民币%' AND title LIKE '%8.0%' THEN 'Will USD/CNY exchange rate break 8.0 in 2026?'
    WHEN title LIKE '%欧元兑美元%' AND title LIKE '%1.20%' THEN 'Will EUR/USD exchange rate return to 1.20 in 2026?'
    WHEN title LIKE '%日元%' AND title LIKE '%100%' THEN 'Will USD/JPY fall below 100 in 2026?'
    WHEN title LIKE '%GPT-5%' AND title LIKE '%2026%' THEN 'Will GPT-5 be released in the first half of 2026?'
    WHEN title LIKE '%世界杯%' AND title LIKE '%中国%' THEN 'Will China qualify for the 2026 World Cup?'
    WHEN title LIKE '%AGI%' AND title LIKE '%2026%' THEN 'Will AGI be achieved in 2026?'
    WHEN title LIKE '%ETH%' AND title LIKE '%BTC%' THEN 'Will Ethereum surpass Bitcoin in market cap by 2026?'
    WHEN title LIKE '%BNB%' AND title LIKE '%1000美元%' THEN 'Will BNB token reach $1,000 in 2026?'
    ELSE title -- 如果没有匹配，使用原标题作为后备
  END,
  description_en = CASE
    WHEN description LIKE '%BTC/USD%' THEN 'Whether BTC/USD will reach $200,000 before December 31, 2026'
    WHEN description LIKE '%NVIDIA%' THEN 'Whether NVIDIA market cap will reach $5 trillion before end of 2026'
    WHEN description LIKE '%TSLA%' THEN 'Whether TSLA stock closing price will exceed $500 on December 31, 2026'
    WHEN description LIKE '%Apple%' THEN 'Whether Apple market cap will reach $4 trillion again in 2026'
    WHEN description LIKE '%黄金%' THEN 'Whether gold spot price will reach $3,000 per ounce in 2026'
    WHEN description LIKE '%WTI%' THEN 'Whether WTI crude oil futures will exceed $150/barrel in 2026'
    WHEN description LIKE '%铜期货%' THEN 'Whether copper futures will reach $12,000/ton in 2026'
    WHEN description LIKE '%USD/CNY%' THEN 'Whether USD/CNY exchange rate will break 8.0 in 2026'
    WHEN description LIKE '%EUR/USD%' THEN 'Whether EUR/USD will return to 1.20 in 2026'
    WHEN description LIKE '%USD/JPY%' THEN 'Whether USD/JPY will fall below 100 in 2026'
    WHEN description LIKE '%OpenAI%' THEN 'Whether OpenAI will officially release GPT-5 before June 30, 2026'
    WHEN description LIKE '%中国男足%' THEN 'Whether Chinese mens football team can qualify for 2026 World Cup finals'
    WHEN description LIKE '%AI实验室%' THEN 'Whether any mainstream AI lab will announce achieving AGI in 2026'
    WHEN description LIKE '%以太坊%' THEN 'Whether Ethereum market cap will surpass Bitcoin at any time in 2026'
    WHEN description LIKE '%BNB%' THEN 'Whether BNB token price will reach $1,000 in 2026'
    ELSE description -- 如果没有匹配，使用原描述作为后备
  END,
  category_en = CASE
    WHEN category = '加密市场' THEN 'Cryptocurrency'
    WHEN category = '股票市场' THEN 'Stock Market'
    WHEN category = '商品市场' THEN 'Commodities'
    WHEN category = '外汇市场' THEN 'Forex'
    WHEN category = '体育' THEN 'Sports'
    WHEN category = 'AI科技' THEN 'AI & Tech'
    WHEN category = '政治' THEN 'Politics'
    WHEN category = '娱乐' THEN 'Entertainment'
    WHEN category = '商业' THEN 'Business'
    WHEN category = '金融' THEN 'Finance'
    ELSE category
  END
WHERE title_en IS NULL;