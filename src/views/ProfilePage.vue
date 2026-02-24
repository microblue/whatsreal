<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 gradient-text">个人中心</h1>

    <div v-if="!authStore.isAuthenticated" class="text-center py-20">
      <p class="text-base-content/50 mb-4">请先连接钱包</p>
      <router-link to="/auth/connect" class="btn gradient-bg text-white border-0">连接钱包</router-link>
    </div>

    <template v-else>
      <!-- Wallet Info -->
      <div class="bg-base-200 rounded-xl p-6 mb-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-base-content/50">钱包地址</div>
            <div class="font-mono text-sm mt-1">{{ authStore.address }}</div>
          </div>
          <div class="text-right">
            <div class="text-sm text-base-content/50">账户余额</div>
            <div class="text-3xl font-bold">¥{{ profile?.balance?.toLocaleString() || '---' }}</div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-1 bg-base-200 rounded-lg p-1 mb-6">
        <button class="flex-1 btn btn-sm" :class="tab === 'positions' ? 'gradient-bg text-white border-0' : 'btn-ghost'" @click="tab = 'positions'">当前持仓</button>
        <button class="flex-1 btn btn-sm" :class="tab === 'history' ? 'gradient-bg text-white border-0' : 'btn-ghost'" @click="tab = 'history'">交易历史</button>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-10">
        <span class="loading loading-spinner loading-md text-primary"></span>
      </div>

      <!-- Positions -->
      <div v-else-if="tab === 'positions'" class="space-y-3">
        <div v-if="positions.length === 0" class="text-center py-10 text-base-content/40">暂无持仓</div>
        <div v-for="pos in positions" :key="pos.id" class="bg-base-200 rounded-xl p-5">
          <div class="flex items-center justify-between">
            <div class="flex-1 min-w-0">
              <router-link :to="`/market/${pos.market_id}`" class="font-medium mb-1 block hover:text-primary truncate">
                {{ pos.market?.title || pos.market_id }}
              </router-link>
              <div class="flex gap-3 text-sm text-base-content/50">
                <span :class="pos.side === 'yes' ? 'text-success' : 'text-error'" class="font-medium">
                  {{ pos.side === 'yes' ? '是' : '否' }} × {{ pos.shares }}份
                </span>
                <span>均价：¥{{ pos.avg_price?.toFixed(2) }}</span>
                <span v-if="pos.market">
                  当前：{{ pos.side === 'yes' ? Math.round(pos.market.yes_price) : Math.round(100 - pos.market.yes_price) }}¢
                </span>
              </div>
            </div>
            <div class="text-right ml-4">
              <div class="font-semibold">¥{{ (pos.shares * pos.avg_price).toFixed(2) }}</div>
              <div v-if="pos.market" class="text-xs" :class="pnl(pos) >= 0 ? 'text-success' : 'text-error'">
                {{ pnl(pos) >= 0 ? '+' : '' }}{{ pnlPercent(pos) }}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- History -->
      <div v-else-if="tab === 'history'" class="space-y-3">
        <div v-if="userTrades.length === 0" class="text-center py-10 text-base-content/40">暂无交易记录</div>
        <div v-for="trade in userTrades" :key="trade.id" class="bg-base-200 rounded-xl p-5">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium mb-1">
                <span :class="trade.action === 'buy' ? 'text-success' : 'text-error'">{{ trade.action === 'buy' ? '买入' : '卖出' }}</span>
                <span :class="trade.side === 'yes' ? 'text-success' : 'text-error'" class="ml-1">{{ trade.side === 'yes' ? '是' : '否' }}</span>
                <span class="text-base-content/50 text-sm ml-2">× {{ trade.shares }}份</span>
              </div>
              <span class="text-xs text-base-content/40">{{ new Date(trade.created_at).toLocaleString('zh-CN') }}</span>
            </div>
            <div class="text-right">
              <div class="font-semibold" :class="trade.action === 'buy' ? 'text-error' : 'text-success'">
                {{ trade.action === 'buy' ? '-' : '+' }}¥{{ trade.amount.toFixed(2) }}
              </div>
              <div class="text-xs text-base-content/40">均价 ¥{{ trade.price.toFixed(2) }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useMarketsStore, type Position, type Trade } from '@/stores/markets'

const authStore = useAuthStore()
const marketsStore = useMarketsStore()

const tab = ref('positions')
const loading = ref(false)
const profile = ref<any>(null)
const positions = ref<Position[]>([])
const userTrades = ref<Trade[]>([])

async function loadData() {
  if (!authStore.userId) return
  loading.value = true
  const uid = authStore.userId
  profile.value = await marketsStore.fetchProfile(uid)
  positions.value = await marketsStore.fetchPositions(uid)
  userTrades.value = await marketsStore.fetchUserTrades(uid)
  loading.value = false
}

function pnl(pos: Position): number {
  if (!pos.market) return 0
  const currentPrice = pos.side === 'yes' ? pos.market.yes_price / 100 : (100 - pos.market.yes_price) / 100
  return (currentPrice - pos.avg_price / 100) * pos.shares * 100
}

function pnlPercent(pos: Position): string {
  if (!pos.market || !pos.avg_price) return '0'
  const currentPrice = pos.side === 'yes' ? pos.market.yes_price : (100 - pos.market.yes_price)
  return (((currentPrice - pos.avg_price) / pos.avg_price) * 100).toFixed(1)
}

onMounted(loadData)
watch(() => authStore.userId, loadData)
</script>
