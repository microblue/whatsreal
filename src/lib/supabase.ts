import { createClient } from '@supabase/supabase-js'
import { validateEnvironment } from './env-check'

// 验证环境变量配置
const envValid = validateEnvironment()

// 如果环境变量验证失败，使用安全的默认值避免连接到错误的项目
const supabaseUrl = envValid 
  ? import.meta.env.VITE_SUPABASE_URL 
  : 'https://xwbtovojdqydupvyzipr.supabase.co' // 强制使用正确的URL

const supabaseAnonKey = envValid 
  ? import.meta.env.VITE_SUPABASE_ANON_KEY 
  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3YnRvdm9qZHF5ZHVwdnl6aXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNzY3NzgsImV4cCI6MjA4Njk1Mjc3OH0.8X7iImXJfvYQAYohc0AMTCC3wWhx5-n87J_irBoIHvI'

// 生产环境安全检查
if (!envValid && !import.meta.env.DEV) {
  console.warn('⚠️  环境变量验证失败，使用备用配置')
}

// 开发环境详细日志
if (import.meta.env.DEV) {
  console.log('🔑 Supabase 最终配置:', {
    url: supabaseUrl,
    key: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'MISSING',
    validated: envValid,
    project: supabaseUrl.includes('xwbtovojdqydupvyzipr') ? 'WhatsReal ✅' : '❌ 错误项目'
  })
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
