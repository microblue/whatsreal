# WhatsReal 项目记忆

## 2026-02-17
- 项目初始化，参考 vstudio 技术栈
- 搭建页面骨架：首页、市场详情、创建市场、个人中心、登录/注册
- Mock 数据包含 6 个示例市场
- 紫粉渐变主题，深色背景
- Dev server port: 5174（避免和 vstudio 5173 冲突）
- Cloudflare Pages 部署成功，项目名: whatsreal
- 线上地址: https://whatsreal.pages.dev ⭐ (推荐)
- 最新部署: https://6907d05e.whatsreal.pages.dev (2026-02-24)
- 部署命令: `cd /home/dz/whatsreal && ./deploy.sh` 或 `source /home/dz/.openclaw/cloudflare-env.sh && npm run build && npx wrangler pages deploy dist --project-name whatsreal --commit-dirty=true`
- 必须用 `--branch main` 部署（和 vstudio 一样）
- GitHub 仓库: https://github.com/microblue/whatsreal
- Supabase project ref: xwbtovojdqydupvyzipr
- Supabase URL: https://xwbtovojdqydupvyzipr.supabase.co
- DB password: 5AngALNaiCZtVK5aaRvZow==
- Schema 已推送（profiles, markets, positions, trades, comments + RLS）
- IPv6 不通，db push 需用 `--dns-resolver https`
- 邮件验证：需在 Dashboard 关闭 enable_confirmations
