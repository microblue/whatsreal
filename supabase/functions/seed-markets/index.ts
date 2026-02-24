import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const sampleMarkets = [
  {
    title: '比特币2026年底能突破20万美元吗？',
    description: 'BTC/USD 是否会在2026年12月31日前达到 $200,000',
    category: '加密货币',
    yes_price: 50, yes_shares: 0, no_shares: 0, liquidity_param: 100,
    volume: 0, end_date: '2026-12-31', status: 'active',
  },
  {
    title: 'GPT-5 会在2026年上半年发布吗？',
    description: 'OpenAI 是否会在2026年6月30日前正式发布 GPT-5',
    category: 'AI科技',
    yes_price: 50, yes_shares: 0, no_shares: 0, liquidity_param: 100,
    volume: 0, end_date: '2026-06-30', status: 'active',
  },
  {
    title: '2026年世界杯中国队能否出线？',
    description: '中国男足能否在2026年世界杯预选赛中成功出线进入决赛圈',
    category: '体育',
    yes_price: 50, yes_shares: 0, no_shares: 0, liquidity_param: 100,
    volume: 0, end_date: '2026-06-01', status: 'active',
  },
  {
    title: '特斯拉FSD会在中国获批吗？',
    description: '特斯拉完全自动驾驶功能是否会在2026年底前获得中国监管批准',
    category: '商业',
    yes_price: 50, yes_shares: 0, no_shares: 0, liquidity_param: 100,
    volume: 0, end_date: '2026-12-31', status: 'active',
  },
  {
    title: '苹果会在2026年推出折叠屏iPhone吗？',
    description: '苹果是否会在2026年发布可折叠屏幕的iPhone产品',
    category: 'AI科技',
    yes_price: 50, yes_shares: 0, no_shares: 0, liquidity_param: 100,
    volume: 0, end_date: '2026-12-31', status: 'active',
  },
  {
    title: '上证指数2026年底能站上4000点吗？',
    description: '上证综指是否会在2026年12月31日收盘价超过4000点',
    category: '金融',
    yes_price: 50, yes_shares: 0, no_shares: 0, liquidity_param: 100,
    volume: 0, end_date: '2026-12-31', status: 'active',
  },
  {
    title: 'ETH会在2026年超越BTC市值吗？',
    description: '以太坊市值是否会在2026年任意时刻超过比特币',
    category: '加密货币',
    yes_price: 50, yes_shares: 0, no_shares: 0, liquidity_param: 100,
    volume: 0, end_date: '2026-12-31', status: 'active',
  },
  {
    title: 'AGI会在2026年实现吗？',
    description: '是否有主流AI实验室在2026年宣布实现通用人工智能(AGI)',
    category: 'AI科技',
    yes_price: 50, yes_shares: 0, no_shares: 0, liquidity_param: 100,
    volume: 0, end_date: '2026-12-31', status: 'active',
  },
  {
    title: '英伟达市值2026年能超过5万亿美元吗？',
    description: 'NVIDIA市值是否会在2026年底前达到5万亿美元',
    category: '金融',
    yes_price: 50, yes_shares: 0, no_shares: 0, liquidity_param: 100,
    volume: 0, end_date: '2026-12-31', status: 'active',
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
