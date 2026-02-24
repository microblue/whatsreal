# WhatsReal 项目记忆

## 2026-02-17
- 项目初始化，参考 vstudio 技术栈
- 搭建页面骨架：首页、市场详情、创建市场、个人中心、登录/注册
- Mock 数据包含 6 个示例市场
- 紫粉渐变主题，深色背景
- Dev server port: 5174（避免和 vstudio 5173 冲突）
- Cloudflare Pages 部署成功，项目名: whatsreal
- 线上地址: https://whatsreal.pages.dev ⭐ (推荐)
- **回滚到初始版本** (commit 229f214): https://whatsreal.pages.dev (2026-02-24)
  * 恢复基础预测市场功能
  * 包含：首页、市场详情、创建市场、个人中心页面
  * 保留原始的6个示例市场和基础交易功能
  * 简洁的预测市场平台，无复杂的AI营销内容
  * 恢复"WhatsReal"原始标题
  * 用户可以创建市场、浏览市场、参与投票交易
- 部署命令: `cd /home/dz/whatsreal && ./deploy.sh` 或 `source /home/dz/.openclaw/cloudflare-env.sh && npm run build && npx wrangler pages deploy dist --project-name whatsreal --commit-dirty=true`
- 必须用 `--branch main` 部署（和 vstudio 一样）
- GitHub 仓库: https://github.com/microblue/whatsreal
- Supabase project ref: xwbtovojdqydupvyzipr
- Supabase URL: https://xwbtovojdqydupvyzipr.supabase.co
- DB password: 5AngALNaiCZtVK5aaRvZow==
- Schema 已推送（profiles, markets, positions, trades, comments + RLS）
- IPv6 不通，db push 需用 `--dns-resolver https`
- 邮件验证：需在 Dashboard 关闭 enable_confirmations
- 项目文档: `doc/WhatsReal_Whitepaper_v2.0.pdf` - 完整白皮书（技术架构、代币经济模型、路线图）
