import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { WagmiPlugin } from '@wagmi/vue'
import App from './App.vue'
import router from './router'
import { wagmiConfig } from './lib/web3'
import i18n from './plugins/i18n'
import './assets/main.css'

const queryClient = new QueryClient()

const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(WagmiPlugin, { config: wagmiConfig })
app.use(VueQueryPlugin, { queryClient })
app.use(router)
app.mount('#app')
