import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { saveLocale } from '@/plugins/i18n'
import { type SupportedLocale, supportedLocales } from '@/locales'

export const useLangStore = defineStore('lang', () => {
  const { locale } = useI18n()
  const currentLocale = ref<SupportedLocale>(locale.value as SupportedLocale)

  // 监听locale变化，同步到i18n
  watch(currentLocale, (newLocale) => {
    locale.value = newLocale
    saveLocale(newLocale)
    console.log('🌐 语言已切换到:', newLocale)
  })

  // 切换语言
  function setLocale(newLocale: SupportedLocale) {
    if (supportedLocales.includes(newLocale)) {
      currentLocale.value = newLocale
    } else {
      console.warn('不支持的语言:', newLocale)
    }
  }

  // 获取当前语言
  function getCurrentLocale(): SupportedLocale {
    return currentLocale.value
  }

  // 检查是否为中文
  function isZhCN(): boolean {
    return currentLocale.value === 'zh-CN'
  }

  // 检查是否为英文
  function isEN(): boolean {
    return currentLocale.value === 'en'
  }

  return {
    currentLocale,
    setLocale,
    getCurrentLocale,
    isZhCN,
    isEN,
    supportedLocales: supportedLocales as readonly SupportedLocale[],
  }
})