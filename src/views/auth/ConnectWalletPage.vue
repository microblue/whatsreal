<template>
  <div class="min-h-screen flex items-center justify-center px-4 bg-base-100">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold gradient-text mb-2">连接钱包</h1>
        <p class="text-base-content/50">使用 Web3 钱包登录 WhatsReal</p>
      </div>
      <div class="bg-base-200 rounded-xl p-6 space-y-6">
        <p class="text-sm text-base-content/60 text-center">
          支持 MetaMask、WalletConnect、Coinbase Wallet 等主流钱包
        </p>
        <div class="flex justify-center">
          <appkit-button />
        </div>
        <p class="text-xs text-base-content/40 text-center">
          连接钱包即表示您同意使用 BNB Smart Chain 网络
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Redirect to home once connected
watch(() => authStore.isAuthenticated, (connected) => {
  if (connected) {
    router.push('/')
  }
}, { immediate: true })
</script>
