<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 backdrop-blur-lg bg-base-100/80 border-b border-base-300">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span class="text-white font-bold text-sm">W</span>
          </div>
          <span class="text-xl font-bold gradient-text hidden sm:inline">WhatsReal</span>
        </router-link>

        <!-- Search Box -->
        <div class="flex-1 max-w-md mx-8 hidden md:block">
          <div class="relative">
            <input
              v-model="searchQuery"
              @input="handleSearch"
              @keydown.enter="performSearch"
              type="text"
              :placeholder="$t('nav.searchPlaceholder')"
              class="input input-sm w-full bg-base-200 border-base-300 focus:border-primary pl-10"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <!-- Search Results Dropdown -->
            <div v-if="showSearchResults && searchResults.length > 0" class="absolute top-full left-0 right-0 mt-1 bg-base-100 border border-base-300 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
              <div
                v-for="market in searchResults"
                :key="market.id"
                @click="goToMarket(market.id)"
                class="p-3 hover:bg-base-200 cursor-pointer border-b border-base-300 last:border-b-0"
              >
                <div class="font-medium text-sm">{{ getMarketTitle(market) }}</div>
                <div class="text-xs text-base-content/60 mt-1">{{ getMarketCategory(market) }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <!-- Mobile Search Button -->
          <button @click="toggleMobileSearch" class="btn btn-ghost md:hidden">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
          
          <router-link v-if="authStore.isAdmin" to="/create" class="btn gradient-bg text-white border-0 hidden sm:flex">
            {{ $t('nav.create') }}
          </router-link>
          <LangSelector />
          <template v-if="authStore.isAuthenticated">
            <router-link to="/profile" class="btn btn-outline font-mono text-sm flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              {{ truncateAddress(authStore.address) }}
            </router-link>
          </template>
          <template v-else>
            <router-link to="/auth/connect" class="btn btn-outline">
              {{ $t('nav.connect') }}
            </router-link>
          </template>
        </div>
      </div>
    </nav>

    <!-- Mobile Search Overlay -->
    <div v-if="showMobileSearch" class="fixed inset-0 bg-black/50 z-50 md:hidden" @click="closeMobileSearch">
      <div class="bg-base-100 p-4" @click.stop>
        <div class="relative">
          <input
            ref="mobileSearchInput"
            v-model="searchQuery"
            @input="handleSearch"
            @keydown.enter="performSearch"
            type="text"
            :placeholder="$t('nav.searchPlaceholder')"
            class="input input-sm w-full bg-base-200 border-base-300 focus:border-primary pl-10"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-4 w-4 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <button @click="closeMobileSearch" class="absolute inset-y-0 right-0 pr-3 flex items-center">
            <svg class="h-4 w-4 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <!-- Mobile Search Results -->
        <div v-if="searchResults.length > 0" class="mt-2 space-y-2 max-h-80 overflow-y-auto">
          <div
            v-for="market in searchResults"
            :key="market.id"
            @click="goToMarket(market.id)"
            class="p-3 bg-base-200 rounded-lg cursor-pointer hover:bg-base-300"
          >
            <div class="font-medium text-sm">{{ getMarketTitle(market) }}</div>
            <div class="text-xs text-base-content/60 mt-1">{{ getMarketCategory(market) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity Ticker -->
    <ActivityTicker />

    <!-- Content -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useMarketsStore } from '@/stores/markets'
import { getMarketTitle, getMarketCategory } from '@/utils/market-i18n'
import LangSelector from '@/components/LangSelector.vue'
import AppFooter from '@/components/AppFooter.vue'
import ActivityTicker from '@/components/ActivityTicker.vue'
import type { Market } from '@/stores/markets'

const router = useRouter()
const authStore = useAuthStore()
const marketsStore = useMarketsStore()

// Search functionality
const searchQuery = ref('')
const showSearchResults = ref(false)
const showMobileSearch = ref(false)
const mobileSearchInput = ref<HTMLInputElement>()

// Filter markets based on search query
const searchResults = computed(() => {
  if (!searchQuery.value.trim() || searchQuery.value.length < 2) return []
  
  const query = searchQuery.value.toLowerCase()
  return marketsStore.markets.filter((market: Market) => {
    const title = getMarketTitle(market).toLowerCase()
    const category = getMarketCategory(market).toLowerCase()
    const description = market.description?.toLowerCase() || ''
    
    return title.includes(query) || 
           category.includes(query) || 
           description.includes(query)
  }).slice(0, 8) // Limit to 8 results
})

function truncateAddress(addr: string | undefined): string {
  if (!addr) return ''
  return addr.slice(0, 6) + '...' + addr.slice(-4)
}

function handleSearch() {
  showSearchResults.value = searchQuery.value.length >= 2
}

function performSearch() {
  if (searchResults.value.length > 0) {
    goToMarket(searchResults.value[0].id)
  } else if (searchQuery.value.trim()) {
    // Navigate to home page with search query
    router.push({ path: '/', query: { search: searchQuery.value } })
  }
  hideSearchResults()
}

function goToMarket(marketId: string) {
  router.push(`/market/${marketId}`)
  hideSearchResults()
}

function hideSearchResults() {
  showSearchResults.value = false
  searchQuery.value = ''
}

async function toggleMobileSearch() {
  showMobileSearch.value = true
  await nextTick()
  mobileSearchInput.value?.focus()
}

function closeMobileSearch() {
  showMobileSearch.value = false
  hideSearchResults()
}

// Load markets when component mounts
marketsStore.fetchMarkets()
</script>
