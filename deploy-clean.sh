#!/bin/bash
# WhatsReal 清洁部署脚本 - 构建并部署到 Cloudflare Pages

echo "🚀 开始 WhatsReal 清洁部署..."

# 1. 切换到项目目录
cd "$(dirname "$0")" || exit 1

# 2. 执行清洁构建
echo "📦 执行清洁构建..."
./build-clean.sh
if [[ $? -ne 0 ]]; then
    echo "❌ 构建失败，终止部署"
    exit 1
fi

# 3. 准备部署环境变量
echo "🔧 准备部署环境..."
if [[ -f "/home/dz/.openclaw/cloudflare-env.sh" ]]; then
    source /home/dz/.openclaw/cloudflare-env.sh
    echo "✅ Cloudflare 环境变量已加载"
else
    echo "⚠️  Cloudflare 环境变量文件不存在，使用系统默认"
fi

# 4. 执行部署
echo "🌐 开始部署到 Cloudflare Pages..."
npx wrangler pages deploy dist --project-name whatsreal --commit-dirty=true

if [[ $? -eq 0 ]]; then
    echo "🎉 部署成功！"
    echo "📊 主域名: https://whatsreal.pages.dev"
    echo "🔄 建议清除浏览器缓存后测试"
else
    echo "❌ 部署失败"
    exit 1
fi