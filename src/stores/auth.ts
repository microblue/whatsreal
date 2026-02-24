import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAppKitAccount, useDisconnect } from '@reown/appkit/vue'

export const useAuthStore = defineStore('auth', () => {
  const isInitialized = ref(false)
  const appKitAccount = useAppKitAccount()
  const { disconnect: appKitDisconnect } = useDisconnect()

  const address = computed(() => appKitAccount.value.address)
  const isAuthenticated = computed(() => appKitAccount.value.isConnected)

  // Wallet address serves as user identifier (replaces Supabase user.id)
  const userId = computed(() => address.value ?? null)

  function initialize() {
    // AppKit handles session restoration automatically via wagmi
    isInitialized.value = true
  }

  async function signOut() {
    await appKitDisconnect()
  }

  return { address, userId, isAuthenticated, isInitialized, initialize, signOut }
})
