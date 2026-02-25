import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'

export interface Market {
  id: string
  title: string
  description: string
  category: string
  // 多语言字段
  title_en?: string
  description_en?: string
  category_en?: string
  //
  image_url?: string
  yes_price: number
  yes_shares: number
  no_shares: number
  liquidity_param: number
  volume: number
  end_date: string
  status: 'active' | 'resolved' | 'cancelled'
  resolution?: 'yes' | 'no' | null
  resolved_at?: string
  resolver_id?: string
  creator_id: string
  created_at: string
}

export interface Trade {
  id: string
  user_id: string
  market_id: string
  side: 'yes' | 'no'
  action: 'buy' | 'sell'
  shares: number
  price: number
  amount: number
  created_at: string
}

export interface Position {
  id: string
  user_id: string
  market_id: string
  side: 'yes' | 'no'
  shares: number
  avg_price: number
  created_at: string
  market?: Market
}

export const useMarketsStore = defineStore('markets', () => {
  const markets = ref<Market[]>([])
  const loading = ref(false)

  const categories = ['全部', '加密市场', '股票市场', '商品市场', '外汇市场', '体育', 'AI科技']

  async function fetchMarkets() {
    loading.value = true
    console.log('🔄 fetchMarkets() 开始执行...')
    
    try {
      const { data, error } = await supabase
        .from('markets')
        .select('*')
        .order('volume', { ascending: false })
      
      console.log('📊 Supabase 响应:', { data, error })
      
      if (error) {
        console.error('❌ Supabase 错误:', error)
        throw error
      }
      
      if (data) {
        markets.value = data as Market[]
        console.log('✅ 市场数据加载成功:', data.length, '个市场')
      } else {
        console.warn('⚠️ 没有返回数据')
      }
    } catch (err) {
      console.error('💥 fetchMarkets 异常:', err)
    } finally {
      loading.value = false
    }
  }

  async function fetchMarketById(id: string): Promise<Market | null> {
    const { data, error } = await supabase
      .from('markets')
      .select('*')
      .eq('id', id)
      .single()
    if (error || !data) return null
    // Update local cache
    const idx = markets.value.findIndex(m => m.id === id)
    if (idx >= 0) markets.value[idx] = data as Market
    else markets.value.push(data as Market)
    return data as Market
  }

  async function fetchTrades(marketId: string): Promise<Trade[]> {
    const { data } = await supabase
      .from('trades')
      .select('*')
      .eq('market_id', marketId)
      .order('created_at', { ascending: false })
      .limit(50)
    return (data || []) as Trade[]
  }

  async function fetchPositions(userId: string): Promise<Position[]> {
    const { data } = await supabase
      .from('positions')
      .select('*, market:markets(*)')
      .eq('user_id', userId)
      .gt('shares', 0)
    return (data || []) as Position[]
  }

  async function fetchUserTrades(userId: string): Promise<Trade[]> {
    const { data } = await supabase
      .from('trades')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(50)
    return (data || []) as Trade[]
  }

  async function fetchProfile(userId: string) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    return data
  }

  function getMarketById(id: string) {
    return markets.value.find(m => m.id === id)
  }

  function getMarketsByCategory(category: string) {
    if (category === '全部') return markets.value
    return markets.value.filter(m => m.category === category)
  }

  // Realtime subscriptions
  function subscribeToMarkets() {
    supabase
      .channel('markets-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'markets' }, (payload) => {
        if (payload.eventType === 'UPDATE') {
          const idx = markets.value.findIndex(m => m.id === payload.new.id)
          if (idx >= 0) markets.value[idx] = payload.new as Market
        } else if (payload.eventType === 'INSERT') {
          markets.value.unshift(payload.new as Market)
        }
      })
      .subscribe()
  }

  // Trade via edge function
  async function executeTrade(userId: string, marketId: string, side: string, action: string, amount: number) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
    const res = await fetch(`${supabaseUrl}/functions/v1/trade`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${anonKey}`,
        'apikey': anonKey,
      },
      body: JSON.stringify({ user_id: userId, market_id: marketId, side, action, amount }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || '交易失败')
    return data
  }

  // Resolve market via edge function
  async function resolveMarket(marketId: string, resolution: string, resolverId: string) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
    const res = await fetch(`${supabaseUrl}/functions/v1/resolve-market`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${anonKey}`,
        'apikey': anonKey,
      },
      body: JSON.stringify({ market_id: marketId, resolution, resolver_id: resolverId }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || '结算失败')
    return data
  }

  return {
    markets, loading, categories,
    fetchMarkets, fetchMarketById, fetchTrades, fetchPositions, fetchUserTrades, fetchProfile,
    getMarketById, getMarketsByCategory,
    subscribeToMarkets, executeTrade, resolveMarket,
  }
})
