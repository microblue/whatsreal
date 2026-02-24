import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        { path: '', name: 'home', component: () => import('@/views/HomePage.vue') },
        { path: 'market/:id', name: 'market-detail', component: () => import('@/views/MarketDetailPage.vue') },
        { path: 'create', name: 'create-market', component: () => import('@/views/CreateMarketPage.vue') },
        { path: 'profile', name: 'profile', component: () => import('@/views/ProfilePage.vue') },
      ]
    },
    {
      path: '/auth',
      children: [
        { path: 'connect', name: 'connect-wallet', component: () => import('@/views/auth/ConnectWalletPage.vue') },
        // Legacy routes redirect to connect
        { path: 'login', redirect: '/auth/connect' },
        { path: 'register', redirect: '/auth/connect' },
      ]
    },
  ]
})

export default router
