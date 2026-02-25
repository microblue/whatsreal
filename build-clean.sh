#!/bin/bash
# WhatsReal 清洁构建脚本 - 确保使用正确的环境变量

echo "🧹 开始清洁构建..."

# 1. 清除可能冲突的系统环境变量
unset VITE_SUPABASE_URL
unset VITE_SUPABASE_ANON_KEY
unset VITE_WALLETCONNECT_PROJECT_ID

echo "✅ 已清除系统环境变量"

# 2. 验证 .env 文件存在且包含正确配置
if [[ ! -f ".env" ]]; then
    echo "❌ 错误: .env 文件不存在"
    exit 1
fi

# 3. 读取并验证 .env 文件配置
source .env

if [[ "$VITE_SUPABASE_URL" != "https://xwbtovojdqydupvyzipr.supabase.co" ]]; then
    echo "❌ 错误: .env 文件中 Supabase URL 不正确"
    echo "当前值: $VITE_SUPABASE_URL"
    echo "期望值: https://xwbtovojdqydupvyzipr.supabase.co"
    exit 1
fi

echo "✅ .env 配置验证通过"

# 4. 清理旧构建文件
rm -rf dist/ .vite/ node_modules/.vite/
echo "✅ 已清理旧构建文件"

# 5. 构建项目
echo "🔨 开始构建项目..."
npm run build

# 6. 验证构建结果
if [[ ! -f "dist/index.html" ]]; then
    echo "❌ 构建失败: dist/index.html 不存在"
    exit 1
fi

# 7. 验证正确的 URL 已注入构建
if grep -r "xwbtovojdqydupvyzipr" dist/ > /dev/null; then
    echo "✅ 构建成功，正确的 Supabase URL 已注入"
else
    echo "❌ 构建验证失败: 正确的 Supabase URL 未注入到构建中"
    exit 1
fi

echo "🎉 清洁构建完成！"