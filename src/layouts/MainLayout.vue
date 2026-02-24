<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 backdrop-blur-lg bg-base-100/80 border-b border-base-300">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span class="text-white font-bold text-sm">W</span>
          </div>
          <span class="text-xl font-bold gradient-text">WhatsReal</span>
        </router-link>

        <div class="flex items-center gap-4">
          <router-link to="/create" class="btn btn-sm gradient-bg text-white border-0">
            创建市场
          </router-link>
          <template v-if="authStore.isAuthenticated">
            <router-link to="/profile" class="btn btn-sm btn-ghost font-mono text-xs">
              {{ truncateAddress(authStore.address) }}
            </router-link>
            <button @click="authStore.signOut()" class="btn btn-sm btn-ghost">
              断开
            </button>
          </template>
          <template v-else>
            <router-link to="/auth/connect" class="btn btn-sm btn-ghost">
              连接钱包
            </router-link>
          </template>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="border-t border-base-300 py-8 text-center text-sm text-base-content/50">
      <p>© 2026 WhatsReal — 用预测连接未来</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

function truncateAddress(addr: string | undefined): string {
  if (!addr) return ''
  return addr.slice(0, 6) + '...' + addr.slice(-4)
}
</script>
