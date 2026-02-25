<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span class="hidden sm:inline">
        {{ getLanguageName(langStore.currentLocale) }}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </div>
    <div tabindex="0" class="dropdown-content z-[1] p-1 shadow bg-base-100 rounded-box w-40 border border-base-300 max-h-60 overflow-y-auto">
      <div 
        v-for="locale in langStore.supportedLocales" 
        :key="locale"
        @click="handleLanguageChange(locale)"
        :class="{ 'bg-primary text-primary-content': locale === langStore.currentLocale }"
        class="cursor-pointer hover:bg-base-200 px-3 py-2 rounded text-sm flex items-center justify-between w-full"
      >
        <span>{{ getLanguageName(locale) }}</span>
        <svg v-if="locale === langStore.currentLocale" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLangStore } from '@/stores/lang'
import { getLanguageName, type SupportedLocale } from '@/locales'

const langStore = useLangStore()

function handleLanguageChange(locale: SupportedLocale) {
  langStore.setLocale(locale)
  
  // 自动关闭下拉菜单
  const dropdown = document.activeElement as HTMLElement
  if (dropdown) {
    dropdown.blur()
  }
  
  // 可以在这里添加额外的逻辑，比如显示切换成功提示
  console.log('🌐 语言切换完成:', locale)
}
</script>

<style scoped>
.dropdown-content {
  margin-top: 0.5rem;
}

.dropdown-content a.active {
  background-color: hsl(var(--p));
  color: hsl(var(--pc));
}
</style>