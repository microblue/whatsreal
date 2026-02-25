<template>
  <div>
    <!-- Hero -->
    <section class="py-16 text-center">
      <h1 class="text-4xl font-bold mb-4">
        <span class="gradient-text">{{ $t('home.title') }}</span>
      </h1>
      <p class="text-lg text-base-content/60 max-w-2xl mx-auto mb-8">
        {{ $t('home.subtitle') }}
      </p>
    </section>

    <!-- Search Results Header -->
    <section v-if="searchQuery" class="max-w-7xl mx-auto px-4 mb-4">
      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 class="font-bold">{{ $t('search.results') }}</h3>
          <div class="text-xs">{{ $t('search.query') }}: "{{ searchQuery }}" - {{ filteredMarkets.length }} {{ $t('search.found') }}</div>
        </div>
        <button @click="clearSearch" class="btn btn-sm btn-ghost">{{ $t('search.clear') }}</button>
      </div>
    </section>

    <!-- Categories -->
    <section id="markets" class="max-w-7xl mx-auto px-4 mb-8">
      <div class="flex gap-2 overflow-x-auto pb-2">
        <button
          v-for="cat in marketsStore.categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="btn whitespace-nowrap text-base"
          :class="selectedCategory === cat ? 'gradient-bg text-white border-0' : 'btn-ghost'"
        >
          {{ getCategoryName(cat) }}
        </button>
      </div>
    </section>

    <!-- Loading -->
    <div v-if="marketsStore.loading" class="text-center py-20">
      <span class="loading loading-spinner loading-lg text-primary"></span>
    </div>

    <!-- Market Cards -->
    <section v-else class="max-w-7xl mx-auto px-4 pb-16">
      <div v-if="filteredMarkets.length === 0" class="text-center py-20 text-base-content/40">
        {{ $t('home.noMarkets') }}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <router-link
          v-for="market in filteredMarkets"
          :key="market.id"
          :to="`/market/${market.id}`"
          class="bg-base-200 rounded-xl p-5 card-hover block"
        >
          <div class="flex items-start justify-between mb-3">
            <span class="badge badge-sm bg-base-300 border-0 text-base-content/70">{{ getCategoryName(market.category) }}</span>
            <span class="text-xs text-base-content/40">{{ $t('markets.details.endDate') }} {{ market.end_date }}</span>
          </div>
          <h3 class="font-semibold text-lg mb-3 leading-snug">{{ getMarketTitle(market) }}</h3>
          
          <!-- Probability bar -->
          <div class="mb-3">
            <div class="flex justify-between text-sm mb-1">
              <span class="text-success font-medium">{{ $t('markets.details.yes') }} {{ Math.round(market.yes_price) }}%</span>
              <span class="text-error font-medium">{{ $t('markets.details.no') }} {{ Math.round(100 - market.yes_price) }}%</span>
            </div>
            <div class="prob-bar">
              <div class="prob-bar-fill" :style="{ width: market.yes_price + '%' }"></div>
            </div>
          </div>

          <div class="flex justify-between text-xs text-base-content/40">
            <span>{{ $t('markets.details.volume') }} ¥{{ formatVolume(market.volume || 0) }}</span>
            <span v-if="market.status === 'resolved'" class="badge badge-xs badge-warning">{{ $t('markets.details.resolved') }}</span>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { useMarketsStore } from '@/stores/markets'
import { getMarketTitle, getMarketCategory } from '@/utils/market-i18n'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const marketsStore = useMarketsStore()
const selectedCategory = ref('全部')
const searchQuery = ref('')

onMounted(() => {
  marketsStore.fetchMarkets()
  marketsStore.subscribeToMarkets()
  
  // Check for search query from URL
  const urlSearch = route.query.search as string
  if (urlSearch) {
    searchQuery.value = urlSearch
  }
})

// Watch for URL search query changes
watch(() => route.query.search, (newSearch) => {
  searchQuery.value = newSearch as string || ''
})

const filteredMarkets = computed(() => {
  let markets = marketsStore.getMarketsByCategory(selectedCategory.value)
  
  // Apply search filter if search query exists
  if (searchQuery.value && searchQuery.value.length >= 2) {
    const query = searchQuery.value.toLowerCase()
    markets = markets.filter(market => {
      const title = getMarketTitle(market).toLowerCase()
      const category = getMarketCategory(market).toLowerCase()
      const description = market.description?.toLowerCase() || ''
      
      return title.includes(query) || 
             category.includes(query) || 
             description.includes(query)
    })
  }
  
  return markets
})

const totalVolume = computed(() => {
  return marketsStore.markets.reduce((sum, m) => sum + (m.volume || 0), 0)
})

function formatVolume(v: number): string {
  if (v >= 10000) return (v / 10000).toFixed(1) + '万'
  return v.toLocaleString()
}

// 分类名称映射
const categoryMapping: Record<string, string> = {
  '全部': 'markets.categories.all',
  '加密市场': 'markets.categories.crypto',
  '股票市场': 'markets.categories.stock', 
  '商品市场': 'markets.categories.commodity',
  '外汇市场': 'markets.categories.forex',
  '体育': 'markets.categories.sports',
  'AI科技': 'markets.categories.ai',
  '加密货币': 'markets.categories.cryptocurrency',
  '商业': 'markets.categories.business',
  '金融': 'markets.categories.finance',
  '政治': 'markets.categories.politics',
  '娱乐': 'markets.categories.entertainment',
}

function getCategoryName(category: string): string {
  const key = categoryMapping[category]
  return key ? t(key) : category
}

function clearSearch() {
  searchQuery.value = ''
  // Remove search query from URL
  router.replace({ path: '/', query: {} })
}
</script>
