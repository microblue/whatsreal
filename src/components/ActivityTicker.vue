<template>
  <div class="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-base-300">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center py-3">
        <!-- Label -->
        <div class="flex items-center gap-2 text-sm font-medium text-base-content/70 mr-4 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          <span>{{ $t('ticker.label') }}</span>
        </div>

        <!-- Scrolling content -->
        <div class="flex-1 overflow-hidden">
          <div class="flex animate-scroll">
            <div 
              v-for="activity in activities" 
              :key="activity.id"
              class="flex items-center gap-2 text-sm whitespace-nowrap mr-8 cursor-pointer hover:text-primary transition-colors"
              @click="handleActivityClick(activity)"
            >
              <!-- Activity icon -->
              <div class="w-5 h-5 rounded-full flex items-center justify-center text-xs" :class="getActivityIcon(activity.type)">
                {{ getActivityEmoji(activity.type) }}
              </div>
              
              <!-- Activity text -->
              <span>{{ formatActivityText(activity) }}</span>
              
              <!-- Time -->
              <span class="text-xs text-base-content/50">{{ formatTime(activity.timestamp) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

interface Activity {
  id: string
  type: 'trade' | 'market_created' | 'market_resolved' | 'comment'
  marketId?: string
  marketTitle?: string
  userAddress?: string
  amount?: number
  side?: 'yes' | 'no'
  timestamp: number
}

const activities = ref<Activity[]>([
  {
    id: '1',
    type: 'trade',
    marketId: '1',
    marketTitle: '比特币价格突破10万美元',
    userAddress: '0x1234...5678',
    amount: 1000,
    side: 'yes',
    timestamp: Date.now() - 60000
  },
  {
    id: '2',
    type: 'market_created',
    marketId: '15',
    marketTitle: 'OpenAI GPT-5发布时间',
    userAddress: '0xabcd...efgh',
    timestamp: Date.now() - 120000
  },
  {
    id: '3',
    type: 'trade',
    marketId: '3',
    marketTitle: '特斯拉股价走势预测',
    userAddress: '0x9999...1111',
    amount: 500,
    side: 'no',
    timestamp: Date.now() - 180000
  },
  {
    id: '4',
    type: 'market_resolved',
    marketId: '2',
    marketTitle: '苹果发布新产品',
    timestamp: Date.now() - 300000
  },
  {
    id: '5',
    type: 'comment',
    marketId: '1',
    marketTitle: '比特币价格突破10万美元',
    userAddress: '0x2222...8888',
    timestamp: Date.now() - 420000
  }
])

function getActivityIcon(type: Activity['type']): string {
  switch (type) {
    case 'trade':
      return 'bg-green-500/20 text-green-600'
    case 'market_created':
      return 'bg-blue-500/20 text-blue-600'
    case 'market_resolved':
      return 'bg-purple-500/20 text-purple-600'
    case 'comment':
      return 'bg-orange-500/20 text-orange-600'
    default:
      return 'bg-gray-500/20 text-gray-600'
  }
}

function getActivityEmoji(type: Activity['type']): string {
  switch (type) {
    case 'trade':
      return '💰'
    case 'market_created':
      return '📊'
    case 'market_resolved':
      return '✅'
    case 'comment':
      return '💬'
    default:
      return '📈'
  }
}

function formatActivityText(activity: Activity): string {
  switch (activity.type) {
    case 'trade':
      return t('ticker.activities.trade', {
        user: truncateAddress(activity.userAddress!),
        side: t(`trade.${activity.side}`),
        amount: activity.amount,
        market: activity.marketTitle
      })
    case 'market_created':
      return t('ticker.activities.market_created', {
        user: truncateAddress(activity.userAddress!),
        market: activity.marketTitle
      })
    case 'market_resolved':
      return t('ticker.activities.market_resolved', {
        market: activity.marketTitle
      })
    case 'comment':
      return t('ticker.activities.comment', {
        user: truncateAddress(activity.userAddress!),
        market: activity.marketTitle
      })
    default:
      return activity.marketTitle || ''
  }
}

function truncateAddress(address: string): string {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

function formatTime(timestamp: number): string {
  const diff = Date.now() - timestamp
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  
  if (hours > 0) {
    return t('time.hoursAgo', { hours })
  } else if (minutes > 0) {
    return t('time.minutesAgo', { minutes })
  } else {
    return t('time.justNow')
  }
}

function handleActivityClick(activity: Activity) {
  if (activity.marketId) {
    router.push(`/market/${activity.marketId}`)
  }
}

// 模拟实时更新
let updateInterval: number | null = null

onMounted(() => {
  updateInterval = window.setInterval(() => {
    // 这里可以从API获取最新活动
    // 暂时模拟添加新活动
    if (Math.random() > 0.8) {
      const newActivity: Activity = {
        id: Date.now().toString(),
        type: ['trade', 'market_created', 'comment'][Math.floor(Math.random() * 3)] as Activity['type'],
        marketId: Math.floor(Math.random() * 15 + 1).toString(),
        marketTitle: ['比特币走势预测', '股市分析', '体育赛事', 'AI发展'][Math.floor(Math.random() * 4)],
        userAddress: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
        amount: Math.floor(Math.random() * 2000 + 100),
        side: Math.random() > 0.5 ? 'yes' : 'no',
        timestamp: Date.now()
      }
      
      activities.value.unshift(newActivity)
      if (activities.value.length > 20) {
        activities.value = activities.value.slice(0, 20)
      }
    }
  }, 30000) // 30秒更新一次
})

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval)
  }
})
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>