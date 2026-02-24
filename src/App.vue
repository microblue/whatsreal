<template>
  <router-view v-if="authStore.isInitialized" />
  <div v-else class="min-h-screen flex items-center justify-center bg-slate-950">
    <span class="loading loading-spinner loading-lg text-primary"></span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

onMounted(() => {
  authStore.initialize()
})
</script>
