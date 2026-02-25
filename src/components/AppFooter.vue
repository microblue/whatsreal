<template>
  <footer class="bg-base-200 border-t border-base-300 mt-auto">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span class="text-white font-bold text-sm">W</span>
            </div>
            <span class="text-xl font-bold gradient-text">WhatsReal</span>
          </div>
          <p class="text-base-content/60 text-sm mb-4">
            {{ $t('footer.tagline') }}
          </p>
          <div class="flex gap-4">
            <!-- Social links could be added here -->
          </div>
        </div>

        <!-- Platform -->
        <div class="md:col-span-1">
          <h3 class="font-semibold mb-4">{{ $t('footer.platform.title') }}</h3>
          <ul class="space-y-3 text-sm text-base-content/60">
            <li><router-link to="/" class="hover:text-base-content transition-colors">{{ $t('nav.home') }}</router-link></li>
            <li><router-link to="/#markets" class="hover:text-base-content transition-colors">{{ $t('nav.markets') }}</router-link></li>
            <li><router-link to="/how-it-works" class="hover:text-base-content transition-colors">{{ $t('footer.platform.howItWorks') }}</router-link></li>
            <li><a href="#" class="hover:text-base-content transition-colors">{{ $t('footer.platform.leaderboard') }}</a></li>
            <li v-if="authStore.isAdmin"><router-link to="/create" class="hover:text-base-content transition-colors">{{ $t('nav.create') }}</router-link></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="md:col-span-1">
          <h3 class="font-semibold mb-4">{{ $t('footer.company.title') }}</h3>
          <ul class="space-y-3 text-sm text-base-content/60">
            <li><router-link to="/about" class="hover:text-base-content transition-colors">{{ $t('footer.company.about') }}</router-link></li>
            <li><a href="/doc/WhatsReal_Whitepaper_v2.0.pdf" target="_blank" class="hover:text-base-content transition-colors">{{ $t('footer.company.whitepaper') }}</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="md:col-span-1">
          <h3 class="font-semibold mb-4">{{ $t('footer.contact.title') }}</h3>
          <ul class="space-y-3 text-sm text-base-content/60">
            <li>
              <a href="mailto:support@whatsreal.com" class="hover:text-base-content transition-colors">
                {{ $t('footer.contact.email') }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-base-300 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-base-content/50">
        <div>
          © 2026 WhatsReal.com. {{ $t('footer.copyright') }}
        </div>
        <div class="flex gap-4 mt-4 sm:mt-0">
          <router-link to="/terms" class="hover:text-base-content/70 transition-colors">{{ $t('footer.company.terms') }}</router-link>
          <router-link to="/privacy" class="hover:text-base-content/70 transition-colors">{{ $t('footer.company.privacy') }}</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>