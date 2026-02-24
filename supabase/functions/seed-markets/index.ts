import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const sampleMarkets = [
  // 加密市场
  {
    title: '比特币2026年底能突破20万美元吗？',
    description: 'BTC/USD 是否会在2026年12月31日前达到 $200,000',
    category: '加密市场',
    yes_price: 75, yes_shares: 1500, no_shares: 500, liquidity_param: 100,
    volume: 12580, end_date: '2026-12-31', status: 'active',
  },
  {
    title: 'ETH会在2026年超越BTC市值吗？',
    description: '以太坊市值是否会在2026年任意时刻超过比特币',
    category: '加密市场',
    yes_price: 35, yes_shares: 800, no_shares: 1400, liquidity_param: 100,
    volume: 8960, end_date: '2026-12-31', status: 'active',
  },
  {
    title: 'BNB价格2026年能达到1000美元吗？',
    description: 'BNB代币价格是否会在2026年内达到1000美元',
    category: '加密市场',
    yes_price: 60, yes_shares: 1200, no_shares: 800, liquidity_param: 100,
    volume: 7420, end_date: '2026-12-31', status: 'active',
  },
  
  // 股票市场
  {
    title: '英伟达市值2026年能超过5万亿美元吗？',
    description: 'NVIDIA市值是否会在2026年底前达到5万亿美元',
    category: '股票市场',
    yes_price: 85, yes_shares: 2100, no_shares: 400, liquidity_param: 100,
    volume: 23580, end_date: '2026-12-31', status: 'active',
  },
  {
    title: '特斯拉股价2026年底会超过500美元吗？',
    description: 'TSLA股价是否会在2026年12月31日收盘价超过500美元',
    category: '股票市场', 
    yes_price: 68, yes_shares: 1650, no_shares: 780, liquidity_param: 100,
    volume: 15670, end_date: '2026-12-31', status: 'active',
  },
  {
    title: '苹果市值2026年能重回4万亿美元吗？',
    description: 'Apple市值是否会在2026年内重新达到4万亿美元',
    category: '股票市场',
    yes_price: 72, yes_shares: 1800, no_shares: 700, liquidity_param: 100,
    volume: 18950, end_date: '2026-12-31', status: 'active',
  },

  // 商品市场
  {
    title: '黄金价格2026年会突破3000美元吗？',
    description: '黄金现货价格是否会在2026年内达到每盎司3000美元',
    category: '商品市场',
    yes_price: 45, yes_shares: 900, no_shares: 1100, liquidity_param: 100,
    volume: 11240, end_date: '2026-12-31', status: 'active',
  },
  {
    title: '原油价格2026年会超过150美元吗？',
    description: 'WTI原油期货价格是否会在2026年内超过150美元/桶',
    category: '商品市场',
    yes_price: 25, yes_shares: 500, no_shares: 1500, liquidity_param: 100,
    volume: 6780, end_date: '2026-12-31', status: 'active',
  },
  {
    title: '铜价2026年能涨到12000美元吗？',
    description: '铜期货价格是否会在2026年内达到12000美元/吨',
    category: '商品市场',
    yes_price: 55, yes_shares: 1100, no_shares: 900, liquidity_param: 100,
    volume: 9320, end_date: '2026-12-31', status: 'active',
  },

  // 外汇市场
  {
    title: '美元兑人民币2026年会突破8.0吗？',
    description: 'USD/CNY汇率是否会在2026年内突破8.0',
    category: '外汇市场',
    yes_price: 30, yes_shares: 600, no_shares: 1400, liquidity_param: 100,
    volume: 13450, end_date: '2026-12-31', status: 'active',
  },
  {
    title: '欧元兑美元2026年能重返1.20吗？',
    description: 'EUR/USD汇率是否会在2026年内重新达到1.20',
    category: '外汇市场',
    yes_price: 40, yes_shares: 800, no_shares: 1200, liquidity_param: 100,
    volume: 10890, end_date: '2026-12-31', status: 'active',
  },
  {
    title: '日元兑美元2026年会回到100以下吗？',
    description: 'USD/JPY汇率是否会在2026年内跌破100',
    category: '外汇市场',
    yes_price: 20, yes_shares: 400, no_shares: 1600, liquidity_param: 100,
    volume: 7650, end_date: '2026-12-31', status: 'active',
  },

  // 原有分类（保持兼容性）
  {
    title: 'GPT-5 会在2026年上半年发布吗？',
    description: 'OpenAI 是否会在2026年6月30日前正式发布 GPT-5',
    category: 'AI科技',
    yes_price: 80, yes_shares: 1950, no_shares: 450, liquidity_param: 100,
    volume: 21340, end_date: '2026-06-30', status: 'active',
  },
  {
    title: '2026年世界杯中国队能否出线？',
    description: '中国男足能否在2026年世界杯预选赛中成功出线进入决赛圈',
    category: '体育',
    yes_price: 15, yes_shares: 300, no_shares: 1700, liquidity_param: 100,
    volume: 5430, end_date: '2026-06-01', status: 'active',
  },
  {
    title: 'AGI会在2026年实现吗？',
    description: '是否有主流AI实验室在2026年宣布实现通用人工智能(AGI)',
    category: 'AI科技',
    yes_price: 35, yes_shares: 700, no_shares: 1300, liquidity_param: 100,
    volume: 16780, end_date: '2026-12-31', status: 'active',
  },
]

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    // Clear existing sample markets (optional)
    // Insert sample markets
    const { data, error } = await supabase.from('markets').insert(sampleMarkets).select()
    if (error) throw error

    return new Response(JSON.stringify({ success: true, count: data.length, markets: data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
