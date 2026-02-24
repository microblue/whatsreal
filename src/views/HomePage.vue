<template>
  <div>
    <!-- Hero -->
    <section class="py-16 text-center">
      <h1 class="text-5xl font-bold mb-4">
        <span class="gradient-text">预测未来</span>，赢在当下
      </h1>
      <p class="text-lg text-base-content/60 max-w-2xl mx-auto mb-8">
        WhatsReal 是一个预测市场平台。对你关心的事件下注，让市场告诉你真相。
      </p>
      <div class="flex justify-center gap-4">
        <router-link to="/create" class="btn gradient-bg text-white border-0 btn-lg">
          创建市场
        </router-link>
        <a href="#markets" class="btn btn-outline btn-lg border-primary text-primary hover:gradient-bg hover:text-white hover:border-0">
          浏览市场
        </a>
      </div>
    </section>

    <!-- Stats -->
    <section class="max-w-4xl mx-auto px-4 mb-12">
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-base-200 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold gradient-text">¥{{ formatVolume(totalVolume) }}</div>
          <div class="text-sm text-base-content/50 mt-1">总交易量</div>
        </div>
        <div class="bg-base-200 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold gradient-text">{{ marketsStore.markets.length }}</div>
          <div class="text-sm text-base-content/50 mt-1">活跃市场</div>
        </div>
        <div class="bg-base-200 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold gradient-text">LMSR</div>
          <div class="text-sm text-base-content/50 mt-1">AMM 定价</div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section id="markets" class="max-w-7xl mx-auto px-4 mb-8">
      <div class="flex gap-2 overflow-x-auto pb-2">
        <button
          v-for="cat in marketsStore.categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="btn btn-sm whitespace-nowrap"
          :class="selectedCategory === cat ? 'gradient-bg text-white border-0' : 'btn-ghost'"
        >
          {{ cat }}
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
        暂无市场数据
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <router-link
          v-for="market in filteredMarkets"
          :key="market.id"
          :to="`/market/${market.id}`"
          class="bg-base-200 rounded-xl p-5 card-hover block"
        >
          <div class="flex items-start justify-between mb-3">
            <span class="badge badge-sm bg-base-300 border-0 text-base-content/70">{{ market.category }}</span>
            <span class="text-xs text-base-content/40">截止 {{ market.end_date }}</span>
          </div>
          <h3 class="font-semibold text-lg mb-3 leading-snug">{{ market.title }}</h3>
          
          <!-- Probability bar -->
          <div class="mb-3">
            <div class="flex justify-between text-sm mb-1">
              <span class="text-success font-medium">是 {{ Math.round(market.yes_price) }}%</span>
              <span class="text-error font-medium">否 {{ Math.round(100 - market.yes_price) }}%</span>
            </div>
            <div class="prob-bar">
              <div class="prob-bar-fill" :style="{ width: market.yes_price + '%' }"></div>
            </div>
          </div>

          <div class="flex justify-between text-xs text-base-content/40">
            <span>交易量 ¥{{ formatVolume(market.volume || 0) }}</span>
            <span v-if="market.status === 'resolved'" class="badge badge-xs badge-warning">已结算</span>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMarketsStore } from '@/stores/markets'

const marketsStore = useMarketsStore()
const selectedCategory = ref('全部')

onMounted(() => {
  marketsStore.fetchMarkets()
  marketsStore.subscribeToMarkets()
})

const filteredMarkets = computed(() => {
  return marketsStore.getMarketsByCategory(selectedCategory.value)
})

const totalVolume = computed(() => {
  return marketsStore.markets.reduce((sum, m) => sum + (m.volume || 0), 0)
})

function formatVolume(v: number): string {
  if (v >= 10000) return (v / 10000).toFixed(1) + '万'
  return v.toLocaleString()
}
</script>
