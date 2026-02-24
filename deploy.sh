#!/bin/bash
# WhatsReal 部署脚本

echo "🚀 开始部署 WhatsReal..."

# 构建项目
echo "📦 构建项目..."
npm run build

# 部署到 Cloudflare Pages
echo "🌎 部署到 Cloudflare Pages..."
source /home/dz/.openclaw/cloudflare-env.sh
npx wrangler pages deploy dist --project-name whatsreal --commit-dirty=true

echo "✅ 部署完成！"
echo "🌐 主域名: https://whatsreal.pages.dev"