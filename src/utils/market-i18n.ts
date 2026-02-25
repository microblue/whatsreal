import { useLangStore } from '@/stores/lang'
import type { Market } from '@/stores/markets'

/**
 * 获取市场的多语言标题
 */
export function getMarketTitle(market: Market): string {
  const langStore = useLangStore()
  const isEnglish = langStore.currentLocale === 'en'
  
  if (isEnglish && market.title_en) {
    return market.title_en
  }
  return market.title
}

/**
 * 获取市场的多语言描述
 */
export function getMarketDescription(market: Market): string {
  const langStore = useLangStore()
  const isEnglish = langStore.currentLocale === 'en'
  
  if (isEnglish && market.description_en) {
    return market.description_en
  }
  return market.description
}

/**
 * 获取市场的多语言分类
 */
export function getMarketCategory(market: Market): string {
  const langStore = useLangStore()
  const isEnglish = langStore.currentLocale === 'en'
  
  if (isEnglish && market.category_en) {
    return market.category_en
  }
  return market.category
}

/**
 * 获取完整的多语言市场对象（用于显示）
 */
export function getLocalizedMarket(market: Market): Market & {
  localizedTitle: string
  localizedDescription: string
  localizedCategory: string
} {
  return {
    ...market,
    localizedTitle: getMarketTitle(market),
    localizedDescription: getMarketDescription(market),
    localizedCategory: getMarketCategory(market)
  }
}