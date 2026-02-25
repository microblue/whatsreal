<template>
  <div class="min-h-screen bg-base-100">
    <div v-if="!authStore.isAuthenticated" class="text-center py-20 max-w-7xl mx-auto px-4">
      <p class="text-base-content/50 mb-4">{{ $t('wallet.connect') }}</p>
      <router-link to="/auth/connect" class="btn gradient-bg text-white border-0">{{ $t('wallet.connect') }}</router-link>
    </div>

    <template v-else>
      <!-- 移动端顶部导航 -->
      <div class="lg:hidden bg-base-200 border-b border-base-300">
        <div class="max-w-7xl mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                {{ authStore.address?.slice(2, 4).toUpperCase() }}
              </div>
              <div>
                <div class="text-sm font-medium">¥{{ profile?.balance?.toLocaleString() || '---' }}</div>
                <div class="text-xs text-base-content/60 truncate max-w-[120px]">{{ authStore.address }}</div>
              </div>
            </div>
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a @click="activeTab = 'overview'" :class="activeTab === 'overview' ? 'active' : ''">{{ $t('profile.menu.overview') }}</a></li>
                <li><a @click="activeTab = 'positions'" :class="activeTab === 'positions' ? 'active' : ''">{{ $t('profile.tabs.positions') }}</a></li>
                <li><a @click="activeTab = 'history'" :class="activeTab === 'history' ? 'active' : ''">{{ $t('profile.tabs.history') }}</a></li>
                <li><a @click="activeTab = 'settings'" :class="activeTab === 'settings' ? 'active' : ''">{{ $t('profile.tabs.settings') }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4">
        <div class="flex min-h-screen">
        <!-- 左侧菜单 -->
        <div class="w-64 bg-base-200 border-r border-base-300 hidden lg:block">
          <!-- 用户信息头部 -->
          <div class="p-6 border-b border-base-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
                {{ authStore.address?.slice(2, 4).toUpperCase() }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm">{{ $t('wallet.address') }}</div>
                <div class="font-mono text-xs text-base-content/60 truncate">{{ authStore.address }}</div>
                <div v-if="authStore.isAdmin" class="flex items-center gap-1 mt-1">
                  <div class="badge badge-warning badge-xs">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                    </svg>
                    {{ $t('profile.role.admin') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center bg-base-100 rounded-lg p-3">
              <div class="text-lg font-bold gradient-text">¥{{ profile?.balance?.toLocaleString() || '---' }}</div>
              <div class="text-xs text-base-content/50">{{ $t('profile.overview.balance') }}</div>
            </div>
          </div>

          <!-- 导航菜单 -->
          <nav class="p-4">
            <ul class="space-y-2">
              <li>
                <button 
                  @click="activeTab = 'overview'"
                  class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
                  :class="activeTab === 'overview' ? 'bg-primary text-primary-content' : 'hover:bg-base-100'"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  {{ $t('profile.menu.overview') }}
                </button>
              </li>
              <li>
                <button 
                  @click="activeTab = 'positions'"
                  class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
                  :class="activeTab === 'positions' ? 'bg-primary text-primary-content' : 'hover:bg-base-100'"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ $t('profile.tabs.positions') }}
                  <span v-if="positions.length > 0" class="ml-auto badge badge-sm">{{ positions.length }}</span>
                </button>
              </li>
              <li>
                <button 
                  @click="activeTab = 'history'"
                  class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
                  :class="activeTab === 'history' ? 'bg-primary text-primary-content' : 'hover:bg-base-100'"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                  {{ $t('profile.tabs.history') }}
                  <span v-if="userTrades.length > 0" class="ml-auto badge badge-sm">{{ userTrades.length }}</span>
                </button>
              </li>
              <li>
                <button 
                  @click="activeTab = 'settings'"
                  class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
                  :class="activeTab === 'settings' ? 'bg-primary text-primary-content' : 'hover:bg-base-100'"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                  </svg>
                  {{ $t('profile.tabs.settings') }}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <!-- 右侧内容区域 -->
        <div class="flex-1 overflow-hidden">
          <div class="h-full overflow-y-auto">
            <!-- 标题栏 -->
            <div class="sticky top-0 bg-base-100 border-b border-base-300 px-8 py-6 z-10">
              <h1 class="text-2xl font-bold">
                <span v-if="activeTab === 'overview'">{{ $t('profile.menu.overview') }}</span>
                <span v-else-if="activeTab === 'positions'">{{ $t('profile.tabs.positions') }}</span>
                <span v-else-if="activeTab === 'history'">{{ $t('profile.tabs.history') }}</span>
                <span v-else-if="activeTab === 'settings'">{{ $t('profile.tabs.settings') }}</span>
              </h1>
            </div>

            <!-- 内容区域 -->
            <div class="p-8">

      <!-- Loading -->
      <div v-if="loading" class="text-center py-10">
        <span class="loading loading-spinner loading-md text-primary"></span>
      </div>

              <!-- 概览页面 -->
              <div v-if="activeTab === 'overview'" class="space-y-6">
                <!-- 管理员权限提醒 -->
                <div v-if="authStore.isAdmin" class="alert alert-warning">
                  <svg class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h3 class="font-bold">{{ $t('profile.role.adminAccess') }}</h3>
                    <div class="text-xs">{{ $t('profile.role.adminDescription') }}</div>
                  </div>
                </div>
                
                <!-- 统计卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="bg-base-200 rounded-xl p-6 text-center">
                    <div class="text-2xl font-bold text-primary">{{ positions.length }}</div>
                    <div class="text-sm text-base-content/60 mt-1">{{ $t('profile.overview.activePositions') }}</div>
                  </div>
                  <div class="bg-base-200 rounded-xl p-6 text-center">
                    <div class="text-2xl font-bold text-success">{{ userTrades.length }}</div>
                    <div class="text-sm text-base-content/60 mt-1">{{ $t('profile.overview.totalTrades') }}</div>
                  </div>
                  <div class="bg-base-200 rounded-xl p-6 text-center">
                    <div class="text-2xl font-bold gradient-text">¥{{ totalValue.toLocaleString() }}</div>
                    <div class="text-sm text-base-content/60 mt-1">{{ $t('profile.overview.totalValue') }}</div>
                  </div>
                </div>

                <!-- 最近活动 -->
                <div class="bg-base-200 rounded-xl p-6">
                  <h3 class="font-semibold mb-4">{{ $t('profile.overview.recentActivity') }}</h3>
                  <div v-if="userTrades.length === 0" class="text-center py-8 text-base-content/40">
                    {{ $t('profile.overview.noActivity') }}
                  </div>
                  <div v-else class="space-y-3">
                    <div v-for="trade in userTrades.slice(0, 5)" :key="trade.id" class="flex items-center justify-between bg-base-100 rounded-lg p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                             :class="trade.action === 'buy' ? 'bg-success' : 'bg-error'">
                          {{ trade.action === 'buy' ? '买' : '卖' }}
                        </div>
                        <div>
                          <div class="font-medium text-sm">
                            {{ trade.action === 'buy' ? $t('trade.buy') : $t('trade.sell') }} 
                            {{ trade.side === 'yes' ? $t('markets.details.yes') : $t('markets.details.no') }}
                          </div>
                          <div class="text-xs text-base-content/50">{{ formatTimeAgo(trade.created_at) }}</div>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="font-semibold" :class="trade.action === 'buy' ? 'text-error' : 'text-success'">
                          {{ trade.action === 'buy' ? '-' : '+' }}¥{{ trade.amount.toFixed(2) }}
                        </div>
                        <div class="text-xs text-base-content/40">× {{ trade.shares }}</div>
                      </div>
                    </div>
                    <div v-if="userTrades.length > 5" class="text-center pt-2">
                      <button @click="activeTab = 'history'" class="btn btn-sm btn-ghost">
                        {{ $t('profile.overview.viewAll') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 持仓页面 -->
              <div v-else-if="activeTab === 'positions'" class="space-y-4">
                <div v-if="positions.length === 0" class="text-center py-16">
                  <svg class="w-16 h-16 mx-auto text-base-content/20 mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                  </svg>
                  <p class="text-base-content/40 mb-4">{{ $t('profile.positions.empty') }}</p>
                  <router-link to="/" class="btn btn-primary btn-sm">
                    {{ $t('profile.positions.startTrading') }}
                  </router-link>
                </div>
                <div v-else class="space-y-4">
                  <div v-for="pos in positions" :key="pos.id" class="bg-base-200 rounded-xl p-6 hover:bg-base-300 transition-colors">
                    <div class="flex items-start justify-between">
                      <div class="flex-1 min-w-0 mr-4">
                        <router-link :to="`/market/${pos.market_id}`" class="font-semibold text-lg mb-2 block hover:text-primary line-clamp-2">
                          {{ pos.market ? getMarketTitle(pos.market) : pos.market_id }}
                        </router-link>
                        <div class="flex flex-wrap gap-3 text-sm text-base-content/60 mb-3">
                          <span :class="pos.side === 'yes' ? 'text-success' : 'text-error'" class="font-medium">
                            {{ pos.side === 'yes' ? $t('markets.details.yes') : $t('markets.details.no') }}
                          </span>
                          <span>{{ pos.shares }} {{ $t('trade.shares') }}</span>
                          <span>{{ $t('trade.price') }} ¥{{ pos.avg_price?.toFixed(2) }}</span>
                          <span v-if="pos.market">
                            {{ $t('trade.current') }} {{ pos.side === 'yes' ? Math.round(pos.market.yes_price) : Math.round(100 - pos.market.yes_price) }}%
                          </span>
                        </div>
                        <div class="flex items-center gap-4">
                          <span class="badge" :class="pos.market?.status === 'active' ? 'badge-success' : 'badge-warning'">
                            {{ pos.market?.status === 'active' ? $t('markets.status.active') : $t('markets.status.resolved') }}
                          </span>
                          <span class="text-xs text-base-content/40">{{ formatTimeAgo(pos.created_at) }}</span>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="text-xl font-bold mb-1">¥{{ (pos.shares * pos.avg_price).toFixed(2) }}</div>
                        <div v-if="pos.market" class="text-sm font-medium" :class="pnl(pos) >= 0 ? 'text-success' : 'text-error'">
                          {{ pnl(pos) >= 0 ? '+' : '' }}{{ pnlPercent(pos) }}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 交易历史页面 -->
              <div v-else-if="activeTab === 'history'" class="space-y-4">
                <div v-if="userTrades.length === 0" class="text-center py-16">
                  <svg class="w-16 h-16 mx-auto text-base-content/20 mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                  <p class="text-base-content/40 mb-4">{{ $t('profile.history.empty') }}</p>
                  <router-link to="/" class="btn btn-primary btn-sm">
                    {{ $t('profile.history.startTrading') }}
                  </router-link>
                </div>
                <div v-else class="space-y-3">
                  <div v-for="trade in userTrades" :key="trade.id" class="bg-base-200 rounded-xl p-5 hover:bg-base-300 transition-colors">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                             :class="trade.action === 'buy' ? 'bg-success' : 'bg-error'">
                          {{ trade.action === 'buy' ? '买' : '卖' }}
                        </div>
                        <div>
                          <div class="font-medium mb-1">
                            <span :class="trade.action === 'buy' ? 'text-success' : 'text-error'" class="font-semibold">
                              {{ trade.action === 'buy' ? $t('trade.buy') : $t('trade.sell') }}
                            </span>
                            <span :class="trade.side === 'yes' ? 'text-success' : 'text-error'" class="ml-2">
                              {{ trade.side === 'yes' ? $t('markets.details.yes') : $t('markets.details.no') }}
                            </span>
                            <span class="text-base-content/50 text-sm ml-2">× {{ trade.shares }}{{ $t('trade.shares') }}</span>
                          </div>
                          <span class="text-sm text-base-content/40">
                            {{ new Date(trade.created_at).toLocaleString(langStore.currentLocale === 'zh-CN' ? 'zh-CN' : 'en-US') }}
                          </span>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="text-lg font-semibold mb-1" :class="trade.action === 'buy' ? 'text-error' : 'text-success'">
                          {{ trade.action === 'buy' ? '-' : '+' }}¥{{ trade.amount.toFixed(2) }}
                        </div>
                        <div class="text-xs text-base-content/40">{{ $t('trade.price') }} ¥{{ trade.price.toFixed(2) }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 设置页面 -->
              <div v-else-if="activeTab === 'settings'" class="space-y-6">
                <!-- 语言设置 -->
                <div class="bg-base-200 rounded-xl p-6">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-semibold mb-2">{{ $t('profile.settings.language') }}</h3>
                      <p class="text-sm text-base-content/60">{{ $t('profile.settings.languageDesc') }}</p>
                    </div>
                    <div class="min-w-0">
                      <LangSelector />
                    </div>
                  </div>
                </div>

                <!-- 主题设置 -->
                <div class="bg-base-200 rounded-xl p-6">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-semibold mb-2">{{ $t('profile.settings.theme') }}</h3>
                      <p class="text-sm text-base-content/60">{{ $t('profile.settings.themeDesc') }}</p>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer gap-4">
                        <span class="label-text">🌙</span>
                        <input type="checkbox" class="toggle toggle-primary" />
                        <span class="label-text">🌞</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- 通知设置 -->
                <div class="bg-base-200 rounded-xl p-6">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-semibold mb-2">{{ $t('profile.settings.notifications') }}</h3>
                      <p class="text-sm text-base-content/60">{{ $t('profile.settings.notificationsDesc') }}</p>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input type="checkbox" class="toggle toggle-primary" checked />
                      </label>
                    </div>
                  </div>
                </div>

                <!-- 账户管理 -->
                <div class="bg-base-200 rounded-xl p-6">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-semibold mb-2">{{ $t('profile.settings.account') }}</h3>
                      <p class="text-sm text-base-content/60">{{ $t('profile.settings.accountDesc') }}</p>
                    </div>
                  </div>
                </div>

                <!-- 断开连接 -->
                <div class="pt-6">
                  <div class="flex justify-center">
                    <button class="btn btn-outline btn-error" @click="handleDisconnect">
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/>
                      </svg>
                      {{ $t('profile.settings.disconnect') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth'
import { useLangStore } from '@/stores/lang'
import { useMarketsStore, type Position, type Trade } from '@/stores/markets'
import { getMarketTitle } from '@/utils/market-i18n'
import LangSelector from '@/components/LangSelector.vue'

const { t } = useI18n()
const router = useRouter()
const authStore = useAuthStore()
const langStore = useLangStore()
const marketsStore = useMarketsStore()

const activeTab = ref('overview')
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

const totalPositionValue = computed(() => {
  return positions.value.reduce((sum, pos) => sum + (pos.shares * pos.avg_price), 0)
})

const totalValue = computed(() => {
  return (profile.value?.balance || 0) + totalPositionValue.value
})

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInHours = diffInMs / (1000 * 60 * 60)
  const diffInDays = diffInHours / 24

  if (diffInHours < 1) {
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
    return `${diffInMinutes}${t('common.time.minutesAgo')}`
  } else if (diffInHours < 24) {
    const hours = Math.floor(diffInHours)
    return `${hours}${t('common.time.hoursAgo')}`
  } else if (diffInDays < 7) {
    const days = Math.floor(diffInDays)
    return `${days}${t('common.time.daysAgo')}`
  } else {
    return date.toLocaleDateString(langStore.currentLocale === 'zh-CN' ? 'zh-CN' : 'en-US')
  }
}

function handleDisconnect() {
  if (confirm(t('profile.settings.confirmDisconnect'))) {
    authStore.signOut()
    router.push('/')
  }
}

onMounted(loadData)
watch(() => authStore.userId, loadData)
</script>
