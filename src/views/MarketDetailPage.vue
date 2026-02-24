<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Loading -->
    <div v-if="loading" class="text-center py-20">
      <span class="loading loading-spinner loading-lg text-primary"></span>
    </div>

    <template v-else-if="market">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-2">
          <span class="badge gradient-bg text-white border-0">{{ market.category }}</span>
          <span class="text-sm text-base-content/40">截止 {{ market.end_date }}</span>
          <span v-if="market.status === 'resolved'" class="badge badge-warning">已结算: {{ market.resolution === 'yes' ? '是' : '否' }}</span>
        </div>
        <h1 class="text-3xl font-bold mb-3">{{ market.title }}</h1>
        <p class="text-base-content/60">{{ market.description }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Main content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Probability display -->
          <div class="bg-base-200 rounded-xl p-6">
            <h2 class="font-semibold mb-4">当前概率</h2>
            <div class="flex items-center gap-8 mb-4">
              <div class="text-center">
                <div class="text-4xl font-bold text-success">{{ Math.round(market.yes_price) }}%</div>
                <div class="text-sm text-base-content/50">是</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-error">{{ Math.round(100 - market.yes_price) }}%</div>
                <div class="text-sm text-base-content/50">否</div>
              </div>
            </div>
            <div class="prob-bar h-3">
              <div class="prob-bar-fill h-3" :style="{ width: market.yes_price + '%' }"></div>
            </div>
          </div>

          <!-- Price chart -->
          <div class="bg-base-200 rounded-xl p-6">
            <h2 class="font-semibold mb-4">价格走势</h2>
            <div class="h-48 relative" ref="chartContainer">
              <canvas ref="chartCanvas" class="w-full h-full"></canvas>
            </div>
          </div>

          <!-- Recent votes -->
          <div class="bg-base-200 rounded-xl p-6">
            <h2 class="font-semibold mb-4">最近投票</h2>
            <div v-if="trades.length === 0" class="text-center py-6 text-base-content/40">暂无投票记录</div>
            <div v-else class="space-y-2 max-h-64 overflow-y-auto">
              <div v-for="trade in trades" :key="trade.id" class="flex items-center justify-between bg-base-300 rounded-lg px-4 py-2 text-sm">
                <div class="flex items-center gap-2">
                  <span class="text-primary">投票</span>
                  <span :class="trade.side === 'yes' ? 'text-success' : 'text-error'" class="font-medium">
                    {{ trade.side === 'yes' ? '是' : '否' }}
                  </span>
                  <span class="text-base-content/50">× {{ trade.shares }}份</span>
                </div>
                <div class="text-right">
                  <span class="font-medium">¥{{ trade.amount.toFixed(2) }}</span>
                  <span class="text-base-content/40 text-xs ml-2">{{ formatTime(trade.created_at) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Comments -->
          <div class="bg-base-200 rounded-xl p-6">
            <h2 class="font-semibold mb-4">讨论区</h2>
            <div class="space-y-3">
              <div v-for="comment in comments" :key="comment.id" class="bg-base-300 rounded-lg p-4">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-6 h-6 rounded-full gradient-bg"></div>
                  <span class="text-sm font-medium">{{ comment.username || '匿名' }}</span>
                  <span class="text-xs text-base-content/40">{{ formatTime(comment.created_at) }}</span>
                </div>
                <p class="text-sm text-base-content/70">{{ comment.content }}</p>
              </div>
            </div>
            <div v-if="authStore.isAuthenticated" class="mt-4">
              <textarea v-model="newComment" class="textarea textarea-bordered w-full bg-base-300 border-base-300" placeholder="发表你的看法..." rows="2"></textarea>
              <button @click="postComment" class="btn btn-sm gradient-bg text-white border-0 mt-2" :disabled="!newComment.trim()">发表评论</button>
            </div>
            <div v-else class="mt-4 text-center text-sm text-base-content/40">
              <router-link to="/auth/connect" class="text-primary hover:underline">连接钱包</router-link> 后可以评论
            </div>
          </div>
        </div>

        <!-- Sidebar: Trade panel -->
        <div class="space-y-4">
          <div class="bg-base-200 rounded-xl p-6 sticky top-20">
            <h2 class="font-semibold mb-4">投票</h2>

            <!-- YES/NO -->
            <div class="flex gap-2 mb-4">
              <button
                @click="side = 'yes'"
                class="btn flex-1"
                :class="side === 'yes' ? 'btn-success' : 'btn-ghost'"
              >
                是 {{ Math.round(market.yes_price) }}¢
              </button>
              <button
                @click="side = 'no'"
                class="btn flex-1"
                :class="side === 'no' ? 'btn-error' : 'btn-ghost'"
              >
                否 {{ Math.round(100 - market.yes_price) }}¢
              </button>
            </div>

            <div class="mb-4">
              <label class="text-sm text-base-content/50 mb-1 block">投入积分</label>
              <input
                v-model.number="amount"
                type="number"
                class="input input-bordered w-full bg-base-300 border-base-300"
                placeholder="输入积分数量"
                min="1"
              />
            </div>

            <!-- Preview -->
            <div v-if="amount > 0" class="bg-base-300 rounded-lg p-3 mb-4 text-sm space-y-1">
              <div class="flex justify-between">
                <span class="text-base-content/50">预计获得份额</span>
                <span class="font-medium">~{{ estimatedShares.toFixed(2) }} 份</span>
              </div>
              <div class="flex justify-between">
                <span class="text-base-content/50">均价</span>
                <span class="font-medium">¥{{ estimatedAvgPrice.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-base-content/50">当前价格</span>
                <span class="font-medium">{{ side === 'yes' ? Math.round(market.yes_price) : Math.round(100 - market.yes_price) }}¢</span>
              </div>
            </div>

            <button
              @click="handleTrade"
              class="btn w-full border-0 gradient-bg text-white"
              :disabled="trading || !amount || amount <= 0 || !authStore.isAuthenticated || market.status !== 'active'"
            >
              {{ trading ? '处理中...' : (!authStore.isAuthenticated ? '请先连接钱包' : (market.status !== 'active' ? '投票已关闭' : '确认投票')) }}
            </button>

            <p v-if="tradeError" class="text-error text-sm mt-2 text-center">{{ tradeError }}</p>
            <p v-if="tradeSuccess" class="text-success text-sm mt-2 text-center">{{ tradeSuccess }}</p>

            <!-- Resolve button for creator -->
            <div v-if="authStore.userId && market.status === 'active'" class="mt-4 pt-4 border-t border-base-300">
              <h3 class="text-sm font-medium mb-2">结算市场</h3>
              <div class="flex gap-2">
                <button @click="handleResolve('yes')" class="btn btn-sm btn-success flex-1">结算为 是</button>
                <button @click="handleResolve('no')" class="btn btn-sm btn-error flex-1">结算为 否</button>
              </div>
            </div>
          </div>

          <!-- Market info -->
          <div class="bg-base-200 rounded-xl p-6">
            <h3 class="font-semibold mb-3 text-sm">市场信息</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-base-content/50">总交易量</span>
                <span>¥{{ (market.volume || 0).toLocaleString() }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-base-content/50">流动性参数</span>
                <span>{{ market.liquidity_param || 100 }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-base-content/50">截止日期</span>
                <span>{{ market.end_date }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-base-content/50">状态</span>
                <span class="badge badge-sm" :class="market.status === 'active' ? 'badge-success' : 'badge-warning'">
                  {{ market.status === 'active' ? '进行中' : '已结算' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div v-else class="text-center py-20 text-base-content/40">
      市场不存在
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useMarketsStore, type Market, type Trade } from '@/stores/markets'
import { useAuthStore } from '@/stores/auth'
import { supabase } from '@/lib/supabase'

const route = useRoute()
const marketsStore = useMarketsStore()
const authStore = useAuthStore()

const market = ref<Market | null>(null)
const trades = ref<Trade[]>([])
const comments = ref<any[]>([])
const loading = ref(true)
const trading = ref(false)
const tradeError = ref('')
const tradeSuccess = ref('')
const side = ref<'yes' | 'no'>('yes')
const tradeAction = ref<'buy' | 'sell'>('buy')
const amount = ref<number>(100)
const newComment = ref('')
const chartCanvas = ref<HTMLCanvasElement | null>(null)

// LMSR estimate
const estimatedShares = computed(() => {
  if (!market.value || !amount.value || amount.value <= 0) return 0
  const b = market.value.liquidity_param || 100
  const ys = market.value.yes_shares || 0
  const ns = market.value.no_shares || 0
  const targetCost = amount.value
  // Binary search
  let lo = 0, hi = targetCost * 10
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2
    const newYs = side.value === 'yes' ? ys + mid : ys
    const newNs = side.value === 'no' ? ns + mid : ns
    const cost = b * Math.log(Math.exp(newYs / b) + Math.exp(newNs / b)) - b * Math.log(Math.exp(ys / b) + Math.exp(ns / b))
    if (cost < targetCost) lo = mid
    else hi = mid
  }
  return (lo + hi) / 2
})

const estimatedAvgPrice = computed(() => {
  if (!estimatedShares.value || !amount.value) return 0
  return amount.value / estimatedShares.value
})

const estimatedReturn = computed(() => {
  if (!market.value || !amount.value || amount.value <= 0) return 0
  const b = market.value.liquidity_param || 100
  const ys = market.value.yes_shares || 0
  const ns = market.value.no_shares || 0
  const shares = amount.value
  const newYs = side.value === 'yes' ? ys - shares : ys
  const newNs = side.value === 'no' ? ns - shares : ns
  return b * Math.log(Math.exp(ys / b) + Math.exp(ns / b)) - b * Math.log(Math.exp(newYs / b) + Math.exp(newNs / b))
})

async function loadData() {
  loading.value = true
  const id = route.params.id as string
  market.value = await marketsStore.fetchMarketById(id)
  if (market.value) {
    trades.value = await marketsStore.fetchTrades(id)
    // Load comments
    const { data } = await supabase
      .from('comments')
      .select('*, profiles(username)')
      .eq('market_id', id)
      .order('created_at', { ascending: false })
      .limit(20)
    comments.value = (data || []).map((c: any) => ({
      ...c,
      username: c.profiles?.username,
    }))
  }
  loading.value = false
  await nextTick()
  drawChart()
}

function drawChart() {
  if (!chartCanvas.value || trades.value.length === 0) return
  const canvas = chartCanvas.value
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Set actual pixel size
  const rect = canvas.parentElement!.getBoundingClientRect()
  canvas.width = rect.width
  canvas.height = rect.height

  const w = canvas.width
  const h = canvas.height
  const pad = 20

  // Build price history from trades (cumulative effect on yes_price)
  // Simple: use trade prices as data points
  const points = trades.value
    .slice()
    .reverse()
    .map((t, i) => ({
      x: i,
      y: t.side === 'yes' ? t.price : (100 - t.price),
    }))

  if (points.length < 2) return

  const maxX = points.length - 1
  const minY = 0
  const maxY = 100

  ctx.clearRect(0, 0, w, h)

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.05)'
  ctx.lineWidth = 1
  for (let y = 0; y <= 100; y += 25) {
    const py = h - pad - ((y - minY) / (maxY - minY)) * (h - pad * 2)
    ctx.beginPath()
    ctx.moveTo(pad, py)
    ctx.lineTo(w - pad, py)
    ctx.stroke()
    ctx.fillStyle = 'rgba(255,255,255,0.3)'
    ctx.font = '10px sans-serif'
    ctx.fillText(y + '%', 2, py + 3)
  }

  // Line
  const gradient = ctx.createLinearGradient(0, 0, w, 0)
  gradient.addColorStop(0, '#8b5cf6')
  gradient.addColorStop(1, '#ec4899')
  ctx.strokeStyle = gradient
  ctx.lineWidth = 2
  ctx.beginPath()
  points.forEach((p, i) => {
    const px = pad + (p.x / maxX) * (w - pad * 2)
    const py = h - pad - ((p.y - minY) / (maxY - minY)) * (h - pad * 2)
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  })
  ctx.stroke()

  // Fill area
  const lastPoint = points[points.length - 1]
  const lx = pad + (lastPoint.x / maxX) * (w - pad * 2)
  const ly = h - pad - ((lastPoint.y - minY) / (maxY - minY)) * (h - pad * 2)
  ctx.lineTo(lx, h - pad)
  ctx.lineTo(pad, h - pad)
  ctx.closePath()
  const fillGrad = ctx.createLinearGradient(0, 0, 0, h)
  fillGrad.addColorStop(0, 'rgba(139, 92, 246, 0.2)')
  fillGrad.addColorStop(1, 'rgba(139, 92, 246, 0)')
  ctx.fillStyle = fillGrad
  ctx.fill()
}

async function handleTrade() {
  if (!authStore.userId || !market.value) return
  trading.value = true
  tradeError.value = ''
  tradeSuccess.value = ''
  try {
    const result = await marketsStore.executeTrade(
      authStore.userId!, market.value.id, side.value, tradeAction.value, amount.value
    )
    tradeSuccess.value = `投票成功！${result.shares}份，余额: ¥${result.new_balance}`
    // Refresh data
    await loadData()
  } catch (e: any) {
    tradeError.value = e.message
  } finally {
    trading.value = false
  }
}

async function handleResolve(resolution: string) {
  if (!authStore.userId || !market.value) return
  if (!confirm(`确定将市场结算为「${resolution === 'yes' ? '是' : '否'}」？此操作不可撤销。`)) return
  try {
    await marketsStore.resolveMarket(market.value.id, resolution, authStore.userId!)
    await loadData()
  } catch (e: any) {
    alert(e.message)
  }
}

async function postComment() {
  if (!authStore.userId || !market.value || !newComment.value.trim()) return
  await supabase.from('comments').insert({
    market_id: market.value.id,
    user_id: authStore.userId!,
    content: newComment.value.trim(),
  })
  newComment.value = ''
  // Refresh comments
  const { data } = await supabase
    .from('comments')
    .select('*, profiles(username)')
    .eq('market_id', market.value.id)
    .order('created_at', { ascending: false })
    .limit(20)
  comments.value = (data || []).map((c: any) => ({
    ...c,
    username: c.profiles?.username,
  }))
}

function formatTime(ts: string): string {
  const d = new Date(ts)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return Math.floor(diff / 60000) + '分钟前'
  if (diff < 86400000) return Math.floor(diff / 3600000) + '小时前'
  return d.toLocaleDateString('zh-CN')
}

// Subscribe to realtime trade updates
function subscribeToTrades() {
  const id = route.params.id as string
  supabase
    .channel(`trades-${id}`)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'trades', filter: `market_id=eq.${id}` }, (payload) => {
      trades.value.unshift(payload.new as Trade)
    })
    .subscribe()
}

onMounted(() => {
  loadData()
  subscribeToTrades()
})

watch(() => route.params.id, () => {
  loadData()
})
</script>
