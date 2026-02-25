import zhCN from './zh-CN'
import en from './en'
import ja from './ja'
import ko from './ko'
import de from './de'
import fr from './fr'
import es from './es'
import it from './it'
import pt from './pt'
import ru from './ru'

export const messages = {
  'zh-CN': zhCN,
  'en': en,
  'ja': ja,
  'ko': ko, 
  'de': de,
  'fr': fr,
  'es': es,
  'it': it,
  'pt': pt,
  'ru': ru,
}

export const supportedLocales = ['zh-CN', 'en', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ru'] as const
export type SupportedLocale = typeof supportedLocales[number]

export const defaultLocale: SupportedLocale = 'zh-CN'

// 根据浏览器语言检测默认语言
export function detectBrowserLocale(): SupportedLocale {
  const browserLang = navigator.language || navigator.languages?.[0] || 'zh-CN'
  
  // 精确匹配
  if (supportedLocales.includes(browserLang as SupportedLocale)) {
    return browserLang as SupportedLocale
  }
  
  // 语言前缀匹配
  const langPrefix = browserLang.split('-')[0]
  const langMap: Record<string, SupportedLocale> = {
    'zh': 'zh-CN',
    'en': 'en', 
    'ja': 'ja',
    'ko': 'ko',
    'de': 'de',
    'fr': 'fr',
    'es': 'es',
    'it': 'it', 
    'pt': 'pt',
    'ru': 'ru',
  }
  
  if (langMap[langPrefix]) {
    return langMap[langPrefix]
  }
  
  // 默认语言
  return defaultLocale
}

// 获取语言显示名称
export function getLanguageName(locale: SupportedLocale, currentLocale: SupportedLocale = 'zh-CN'): string {
  const names = messages[currentLocale].languages
  return names[locale] || locale
}