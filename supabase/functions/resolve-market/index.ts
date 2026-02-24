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

    const { market_id, resolution, resolver_id } = await req.json()

    if (!market_id || !resolution || !resolver_id) {
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
    if (market.status === 'resolved') {
      return new Response(JSON.stringify({ error: '市场已结算' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Creator or admin can resolve (MVP: allow all authenticated users)
    // TODO: add proper admin role check
    // if (market.creator_id !== resolver_id) {
    //   return new Response(JSON.stringify({ error: '无权结算此市场' }), {
    //     status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    //   })
    // }

    // Mark market as resolved
    await supabase.from('markets').update({
      status: 'resolved',
      resolution,
      resolved_at: new Date().toISOString(),
      resolver_id,
      yes_price: resolution === 'yes' ? 100 : 0,
    }).eq('id', market_id)

    // Get all winning positions
    const winningSide = resolution // 'yes' or 'no'
    const { data: positions } = await supabase
      .from('positions').select('*')
      .eq('market_id', market_id).eq('side', winningSide).gt('shares', 0)

    let totalPayout = 0
    if (positions) {
      for (const pos of positions) {
        // Each winning share pays out 100 credits (equivalent to $1)
        const payout = pos.shares * 100
        totalPayout += payout
        
        // Update user balance
        const { data: profile } = await supabase
          .from('profiles').select('balance').eq('id', pos.user_id).single()
        if (profile) {
          await supabase.from('profiles').update({
            balance: profile.balance + payout
          }).eq('id', pos.user_id)
        }
      }
    }

    return new Response(JSON.stringify({
      success: true,
      resolution,
      winners: positions?.length || 0,
      total_payout: totalPayout,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
