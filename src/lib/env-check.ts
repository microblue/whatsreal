// WhatsReal 环境变量验证
// 确保使用正确的 Supabase 配置，防止连接到错误的项目

const EXPECTED_SUPABASE_URL = 'https://xwbtovojdqydupvyzipr.supabase.co'
const EXPECTED_PROJECT_REF = 'xwbtovojdqydupvyzipr'

// 验证环境变量配置
export function validateEnvironment() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  // 检查 Supabase URL
  if (!supabaseUrl) {
    console.error('❌ VITE_SUPABASE_URL 环境变量未设置')
    return false
  }

  if (supabaseUrl !== EXPECTED_SUPABASE_URL) {
    console.error('❌ Supabase URL 不正确!')
    console.error(`当前值: ${supabaseUrl}`)
    console.error(`期望值: ${EXPECTED_SUPABASE_URL}`)
    console.error('这可能导致连接到错误的数据库项目')
    return false
  }

  // 检查 Supabase Key
  if (!supabaseKey) {
    console.error('❌ VITE_SUPABASE_ANON_KEY 环境变量未设置')
    return false
  }

  // 验证 Key 是否匹配正确的项目
  if (!supabaseKey.includes(EXPECTED_PROJECT_REF)) {
    console.error('❌ Supabase Key 不匹配当前项目!')
    console.error('Key 应该包含项目引用:', EXPECTED_PROJECT_REF)
    return false
  }

  console.log('✅ 环境变量验证通过')
  console.log(`📡 连接到项目: ${EXPECTED_PROJECT_REF}`)
  return true
}

// 开发环境自动验证
if (import.meta.env.DEV) {
  validateEnvironment()
}