<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-primary/10 to-secondary/10">
      <div class="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold gradient-text mb-6">{{ $t('howItWorks.title') }}</h1>
        <p class="text-lg text-base-content/70 max-w-2xl mx-auto">{{ $t('howItWorks.subtitle') }}</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <!-- Step by Step Guide -->
      <section>
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('howItWorks.steps.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('howItWorks.steps.step1.title') }}</h3>
            <p class="text-base-content/70">{{ $t('howItWorks.steps.step1.description') }}</p>
          </div>
          <!-- Step 2 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('howItWorks.steps.step2.title') }}</h3>
            <p class="text-base-content/70">{{ $t('howItWorks.steps.step2.description') }}</p>
          </div>
          <!-- Step 3 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('howItWorks.steps.step3.title') }}</h3>
            <p class="text-base-content/70">{{ $t('howItWorks.steps.step3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="bg-base-200 rounded-2xl p-8 md:p-12">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('howItWorks.features.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold mb-2">{{ $t('howItWorks.features.ai.title') }}</h3>
              <p class="text-base-content/70 text-sm">{{ $t('howItWorks.features.ai.description') }}</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold mb-2">{{ $t('howItWorks.features.web3.title') }}</h3>
              <p class="text-base-content/70 text-sm">{{ $t('howItWorks.features.web3.description') }}</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold mb-2">{{ $t('howItWorks.features.trading.title') }}</h3>
              <p class="text-base-content/70 text-sm">{{ $t('howItWorks.features.trading.description') }}</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold mb-2">{{ $t('howItWorks.features.rewards.title') }}</h3>
              <p class="text-base-content/70 text-sm">{{ $t('howItWorks.features.rewards.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Market Types Section -->
      <section>
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('howItWorks.markets.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-base-200 rounded-xl p-6">
            <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">{{ $t('markets.categories.crypto') }}</h3>
            <p class="text-base-content/60 text-sm">{{ $t('howItWorks.markets.crypto') }}</p>
          </div>
          
          <div class="bg-base-200 rounded-xl p-6">
            <div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">{{ $t('markets.categories.stock') }}</h3>
            <p class="text-base-content/60 text-sm">{{ $t('howItWorks.markets.stock') }}</p>
          </div>
          
          <div class="bg-base-200 rounded-xl p-6">
            <div class="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">{{ $t('markets.categories.sports') }}</h3>
            <p class="text-base-content/60 text-sm">{{ $t('howItWorks.markets.sports') }}</p>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section>
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('howItWorks.faq.title') }}</h2>
        <div class="max-w-3xl mx-auto space-y-4">
          <div class="collapse collapse-plus bg-base-200">
            <input type="radio" name="faq" />
            <div class="collapse-title text-lg font-medium">{{ $t('howItWorks.faq.q1.question') }}</div>
            <div class="collapse-content">
              <p>{{ $t('howItWorks.faq.q1.answer') }}</p>
            </div>
          </div>
          
          <div class="collapse collapse-plus bg-base-200">
            <input type="radio" name="faq" />
            <div class="collapse-title text-lg font-medium">{{ $t('howItWorks.faq.q2.question') }}</div>
            <div class="collapse-content">
              <p>{{ $t('howItWorks.faq.q2.answer') }}</p>
            </div>
          </div>
          
          <div class="collapse collapse-plus bg-base-200">
            <input type="radio" name="faq" />
            <div class="collapse-title text-lg font-medium">{{ $t('howItWorks.faq.q3.question') }}</div>
            <div class="collapse-content">
              <p>{{ $t('howItWorks.faq.q3.answer') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Get Started CTA -->
      <section class="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl text-white p-12">
        <h2 class="text-3xl font-bold mb-4">{{ $t('howItWorks.cta.title') }}</h2>
        <p class="text-xl mb-8 opacity-90">{{ $t('howItWorks.cta.subtitle') }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/auth/connect" class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
            {{ $t('howItWorks.cta.connect') }}
          </router-link>
          <router-link to="/" class="btn btn-lg bg-white text-primary hover:bg-white/90">
            {{ $t('howItWorks.cta.explore') }}
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>