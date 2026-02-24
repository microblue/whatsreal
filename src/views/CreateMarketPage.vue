<template>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-2 gradient-text">创建预测市场</h1>
    <p class="text-base-content/50 mb-8">提出一个可验证的是/否问题，让市场来回答</p>

    <div v-if="!authStore.isAuthenticated" class="text-center py-10">
      <p class="text-base-content/50 mb-4">请先连接钱包</p>
      <router-link to="/auth/connect" class="btn gradient-bg text-white border-0">连接钱包</router-link>
    </div>

    <div v-else class="space-y-6">
      <div>
        <label class="text-sm font-medium mb-1 block">市场标题</label>
        <input
          v-model="form.title"
          class="input input-bordered w-full bg-base-200 border-base-300"
          placeholder="例：比特币2026年底能突破20万美元吗？"
        />
      </div>

      <div>
        <label class="text-sm font-medium mb-1 block">详细描述</label>
        <textarea
          v-model="form.description"
          class="textarea textarea-bordered w-full bg-base-200 border-base-300"
          rows="3"
          placeholder="清楚描述判定条件和数据来源"
        ></textarea>
      </div>

      <div>
        <label class="text-sm font-medium mb-1 block">分类</label>
        <select v-model="form.category" class="select select-bordered w-full bg-base-200 border-base-300">
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>

      <div>
        <label class="text-sm font-medium mb-1 block">截止日期</label>
        <input
          v-model="form.end_date"
          type="date"
          class="input input-bordered w-full bg-base-200 border-base-300"
        />
      </div>

      <div>
        <label class="text-sm font-medium mb-1 block">流动性参数 (b值): {{ form.liquidity_param }}</label>
        <input
          v-model.number="form.liquidity_param"
          type="range"
          min="10"
          max="500"
          step="10"
          class="range range-primary w-full"
        />
        <div class="flex justify-between text-xs text-base-content/40 mt-1">
          <span>低流动性 (价格波动大)</span>
          <span>高流动性 (价格稳定)</span>
        </div>
      </div>

      <div>
        <label class="text-sm font-medium mb-1 block">初始流动性 (积分)</label>
        <input
          v-model.number="form.initial_liquidity"
          type="number"
          class="input input-bordered w-full bg-base-200 border-base-300"
          placeholder="从余额扣除，作为初始流动性"
          min="0"
        />
        <p class="text-xs text-base-content/40 mt-1">可选。提供初始流动性可以让交易更平滑。设为0则不提供。</p>
      </div>

      <div class="bg-base-200 rounded-lg p-4 text-sm space-y-1">
        <div class="flex justify-between">
          <span class="text-base-content/50">初始价格</span>
          <span>是 50% / 否 50%</span>
        </div>
        <div class="flex justify-between">
          <span class="text-base-content/50">流动性参数</span>
          <span>b = {{ form.liquidity_param }}</span>
        </div>
      </div>

      <button @click="handleCreate" class="btn w-full gradient-bg text-white border-0 btn-lg" :disabled="creating || !form.title || !form.end_date">
        {{ creating ? '创建中...' : '创建市场' }}
      </button>

      <p v-if="error" class="text-error text-sm text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const authStore = useAuthStore()

const categories = ['体育', 'AI科技', '加密货币', '商业', '金融', '政治', '娱乐', '其他']
const creating = ref(false)
const error = ref('')

const form = reactive({
  title: '',
  description: '',
  category: '其他',
  end_date: '',
  liquidity_param: 100,
  initial_liquidity: 0,
})

async function handleCreate() {
  if (!authStore.userId) return
  creating.value = true
  error.value = ''
  try {
    const { data, error: err } = await supabase.from('markets').insert({
      title: form.title,
      description: form.description,
      category: form.category,
      end_date: form.end_date,
      yes_price: 50,
      yes_shares: 0,
      no_shares: 0,
      liquidity_param: form.liquidity_param,
      volume: 0,
      status: 'active',
      creator_id: authStore.userId,
    }).select().single()

    if (err) throw new Error(err.message)

    // Deduct initial liquidity if provided
    if (form.initial_liquidity > 0 && data) {
      const profile = await supabase.from('profiles').select('balance').eq('id', authStore.userId!).single()
      if (profile.data && profile.data.balance >= form.initial_liquidity) {
        await supabase.from('profiles').update({
          balance: profile.data.balance - form.initial_liquidity
        }).eq('id', authStore.userId!)
      }
    }

    if (data) {
      router.push(`/market/${data.id}`)
    }
  } catch (e: any) {
    error.value = e.message || '创建失败'
  } finally {
    creating.value = false
  }
}
</script>
