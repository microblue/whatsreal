import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const url = new URL(req.url)
    let market_id = url.searchParams.get('market_id')
    if (!market_id && req.method === 'POST') {
      const body = await req.json()
      market_id = body.market_id
    }

    if (!market_id) {
      return new Response(JSON.stringify({ error: '缺少 market_id' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { data: market, error } = await supabase
      .from('markets').select('*').eq('id', market_id).single()
    if (error || !market) {
      return new Response(JSON.stringify({ error: '市场不存在' }), {
        status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const b = market.liquidity_param || 100
    const ys = market.yes_shares || 0
    const ns = market.no_shares || 0

    const expYs = Math.exp(ys / b)
    const expNs = Math.exp(ns / b)
    const yes_price = (expYs / (expYs + expNs)) * 100
    const no_price = (expNs / (expYs + expNs)) * 100

    return new Response(JSON.stringify({
      market_id,
      yes_price: Math.round(yes_price * 100) / 100,
      no_price: Math.round(no_price * 100) / 100,
      volume: market.volume || 0,
      liquidity: b,
      yes_shares: ys,
      no_shares: ns,
      status: market.status,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
