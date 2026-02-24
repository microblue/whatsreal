import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://127.0.0.1:54321'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

// 开发环境调试信息
if (import.meta.env.DEV) {
  console.log('🔑 Supabase Config:', {
    url: supabaseUrl,
    key: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'MISSING',
    env: {
      url: import.meta.env.VITE_SUPABASE_URL ? 'LOADED' : 'MISSING',
      key: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'LOADED' : 'MISSING'
    }
  })
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
