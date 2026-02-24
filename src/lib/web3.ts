import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { createAppKit } from '@reown/appkit/vue'
import { bsc, bscTestnet } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// TODO: Replace with your own WalletConnect project ID from https://cloud.reown.com
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID'

const networks: [AppKitNetwork, ...AppKitNetwork[]] = [bsc, bscTestnet]

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
})

const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: 'WhatsReal',
    description: '用预测连接未来 — 去中心化预测市场',
    url: 'https://whatsreal.pages.dev',
    icons: ['/favicon.svg'],
  },
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#8b5cf6',
  },
})

export { wagmiAdapter, appKit }
export const wagmiConfig = wagmiAdapter.wagmiConfig
