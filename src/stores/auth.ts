import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useAppKitAccount, useDisconnect } from '@reown/appkit/vue'
import { supabase } from '@/lib/supabase'
import { isAdminAddress } from '@/config/admin'

export const useAuthStore = defineStore('auth', () => {
  const isInitialized = ref(false)
  const appKitAccount = useAppKitAccount()
  const { disconnect: appKitDisconnect } = useDisconnect()
  const userUuid = ref<string | null>(null)

  const address = computed(() => appKitAccount.value.address)
  const isAuthenticated = computed(() => appKitAccount.value.isConnected)

  // Return UUID for database operations, wallet address for display
  const userId = computed(() => userUuid.value)

  // 检查当前用户是否为管理员
  const isAdmin = computed(() => {
    if (!address.value) return false
    return isAdminAddress(address.value)
  })

  // Watch for wallet connection changes
  watch(isAuthenticated, async (connected) => {
    if (connected && address.value) {
      await ensureUserProfile(address.value)
    }
  })

  // Generate deterministic UUID from wallet address  
  function generateUserUuid(walletAddress: string): string {
    // Create multiple hashes for more entropy
    let hash1 = 0, hash2 = 0, hash3 = 0, hash4 = 0;
    
    for (let i = 0; i < walletAddress.length; i++) {
      const char = walletAddress.charCodeAt(i);
      hash1 = ((hash1 << 5) - hash1) + char;
      hash2 = ((hash2 << 3) - hash2) + char * 7;
      hash3 = ((hash3 << 7) - hash3) + char * 11;
      hash4 = ((hash4 << 2) - hash4) + char * 13;
      
      // Keep hashes within bounds
      hash1 = hash1 & 0xffffffff;
      hash2 = hash2 & 0xffffffff; 
      hash3 = hash3 & 0xffffffff;
      hash4 = hash4 & 0xffffffff;
    }
    
    // Convert to positive numbers and generate hex strings
    const hex1 = Math.abs(hash1).toString(16).padStart(8, '0').slice(0, 8);
    const hex2 = Math.abs(hash2).toString(16).padStart(8, '0').slice(0, 4);
    const hex3 = Math.abs(hash3).toString(16).padStart(8, '0').slice(0, 3);
    const hex4 = Math.abs(hash4).toString(16).padStart(8, '0').slice(0, 3);
    const hex5 = Math.abs(hash1 + hash2).toString(16).padStart(12, '0').slice(0, 12);
    
    // Create valid UUID v4 format: xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx
    return `${hex1}-${hex2}-4${hex3}-8${hex4}-${hex5}`;
  }

  // Ensure user profile exists in database
  async function ensureUserProfile(walletAddress: string) {
    try {
      // Generate deterministic UUID for this wallet
      const uuid = generateUserUuid(walletAddress);
      userUuid.value = uuid;

      // Check if profile exists by UUID
      const { data: existing } = await supabase
        .from('profiles')
        .select('id, username, balance')
        .eq('id', uuid)
        .single()

      if (!existing) {
        // Create new profile with UUID and wallet address as username suffix
        const { error } = await supabase
          .from('profiles')
          .insert({
            id: uuid,
            username: `User_${walletAddress.slice(-6)}`,
            balance: 10000.00
          })

        if (error) {
          console.error('创建用户profile失败:', error)
        } else {
          console.log('✅ 新用户profile创建成功:', uuid, 'for wallet:', walletAddress)
        }
      } else {
        console.log('✅ 用户profile已存在:', existing)
      }
    } catch (error) {
      console.error('检查用户profile失败:', error)
    }
  }

  function initialize() {
    // AppKit handles session restoration automatically via wagmi
    isInitialized.value = true

    // If already connected, ensure profile exists
    if (isAuthenticated.value && address.value) {
      ensureUserProfile(address.value)
    }
  }

  async function signOut() {
    await appKitDisconnect()
  }

  return { 
    address, 
    userId, 
    isAuthenticated, 
    isInitialized,
    isAdmin,
    initialize, 
    signOut,
    ensureUserProfile
  }
})
