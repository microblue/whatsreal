import { createI18n } from 'vue-i18n'
import { messages, detectBrowserLocale, type SupportedLocale } from '@/locales'

// 从本地存储获取保存的语言设置
function getSavedLocale(): SupportedLocale | null {
  const saved = localStorage.getItem('whatsreal-locale')
  if (saved && (saved === 'zh-CN' || saved === 'en')) {
    return saved as SupportedLocale
  }
  return null
}

// 保存语言设置到本地存储
export function saveLocale(locale: SupportedLocale) {
  localStorage.setItem('whatsreal-locale', locale)
}

// 确定初始语言
const initialLocale = getSavedLocale() || detectBrowserLocale()

// 创建i18n实例
export const i18n = createI18n({
  locale: initialLocale,
  fallbackLocale: 'zh-CN',
  messages,
  legacy: false, // 使用Composition API模式
  globalInjection: true, // 全局注入$t
})

export default i18n