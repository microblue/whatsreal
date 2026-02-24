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

    const { user_id, market_id, side, action, amount } = await req.json()

    if (!user_id || !market_id || !side || !action || !amount) {
      return new Response(JSON.stringify({ error: '缺少参数' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Get market
    const { data: market, error: mErr } = await supabase
      .from('markets').select('*').eq('id', market_id).single()
    if (mErr || !market) {
      return new Response(JSON.stringify({ error: '市场不存在' }), {
        status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (market.status !== 'active') {
      return new Response(JSON.stringify({ error: '市场已关闭' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Get user balance
    const { data: profile, error: pErr } = await supabase
      .from('profiles').select('balance').eq('id', user_id).single()
    if (pErr || !profile) {
      return new Response(JSON.stringify({ error: '用户不存在' }), {
        status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const b = market.liquidity_param || 100
    const yesShares = market.yes_shares || 0
    const noShares = market.no_shares || 0

    // LMSR cost function
    function lmsrCost(ys: number, ns: number): number {
      return b * Math.log(Math.exp(ys / b) + Math.exp(ns / b))
    }

    // Current prices (partial derivatives)
    function yesPrice(ys: number, ns: number): number {
      return Math.exp(ys / b) / (Math.exp(ys / b) + Math.exp(ns / b))
    }
    function noPrice(ys: number, ns: number): number {
      return Math.exp(ns / b) / (Math.exp(ys / b) + Math.exp(ns / b))
    }

    let shares: number
    let cost: number
    let newYesShares: number
    let newNoShares: number
    let avgPrice: number

    if (action === 'buy') {
      // Binary search for shares given amount (cost)
      const targetCost = amount
      if (targetCost > profile.balance) {
        return new Response(JSON.stringify({ error: '余额不足' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      // Find shares that cost exactly `amount`
      let lo = 0, hi = targetCost * 10 // upper bound
      for (let i = 0; i < 100; i++) {
        const mid = (lo + hi) / 2
        const newYs = side === 'yes' ? yesShares + mid : yesShares
        const newNs = side === 'no' ? noShares + mid : noShares
        const c = lmsrCost(newYs, newNs) - lmsrCost(yesShares, noShares)
        if (c < targetCost) lo = mid
        else hi = mid
      }
      shares = (lo + hi) / 2
      newYesShares = side === 'yes' ? yesShares + shares : yesShares
      newNoShares = side === 'no' ? noShares + shares : noShares
      cost = lmsrCost(newYesShares, newNoShares) - lmsrCost(yesShares, noShares)
      avgPrice = cost / shares

    } else if (action === 'sell') {
      // Check position
      const { data: pos } = await supabase
        .from('positions').select('*')
        .eq('user_id', user_id).eq('market_id', market_id).eq('side', side).single()
      
      if (!pos || pos.shares <= 0) {
        return new Response(JSON.stringify({ error: '没有持仓' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      // amount here is credit amount user wants back; find shares to sell
      // Or simpler: sell `amount` worth of shares
      // Let's interpret amount as number of shares to sell for sell action
      shares = Math.min(amount, pos.shares)
      newYesShares = side === 'yes' ? yesShares - shares : yesShares
      newNoShares = side === 'no' ? noShares - shares : noShares
      // Cost is negative (user gets credits back)
      cost = lmsrCost(yesShares, noShares) - lmsrCost(newYesShares, newNoShares)
      avgPrice = cost / shares

    } else {
      return new Response(JSON.stringify({ error: '无效操作' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Execute trade
    const newBalance = action === 'buy' ? profile.balance - cost : profile.balance + cost

    // Update user balance
    await supabase.from('profiles').update({ balance: newBalance }).eq('id', user_id)

    // Update market shares
    const newYesPrice = yesPrice(newYesShares, newNoShares) * 100
    const newVolume = (market.volume || 0) + cost
    await supabase.from('markets').update({
      yes_shares: newYesShares,
      no_shares: newNoShares,
      yes_price: Math.round(newYesPrice * 100) / 100,
      volume: newVolume,
    }).eq('id', market_id)

    // Record trade
    await supabase.from('trades').insert({
      user_id, market_id, side, action,
      shares: Math.round(shares * 100) / 100,
      price: Math.round(avgPrice * 100) / 100,
      amount: Math.round(cost * 100) / 100,
    })

    // Update position
    const { data: existingPos } = await supabase
      .from('positions').select('*')
      .eq('user_id', user_id).eq('market_id', market_id).eq('side', side).single()

    if (existingPos) {
      const newShares = action === 'buy' 
        ? existingPos.shares + shares 
        : existingPos.shares - shares
      const newAvg = action === 'buy'
        ? (existingPos.avg_price * existingPos.shares + avgPrice * shares) / (existingPos.shares + shares)
        : existingPos.avg_price
      await supabase.from('positions').update({
        shares: Math.round(newShares * 100) / 100,
        avg_price: Math.round(newAvg * 100) / 100,
      }).eq('id', existingPos.id)
    } else if (action === 'buy') {
      await supabase.from('positions').insert({
        user_id, market_id, side,
        shares: Math.round(shares * 100) / 100,
        avg_price: Math.round(avgPrice * 100) / 100,
      })
    }

    return new Response(JSON.stringify({
      success: true,
      shares: Math.round(shares * 100) / 100,
      cost: Math.round(cost * 100) / 100,
      avg_price: Math.round(avgPrice * 100) / 100,
      new_balance: Math.round(newBalance * 100) / 100,
      yes_price: Math.round(newYesPrice * 100) / 100,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
