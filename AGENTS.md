# WhatsReal - 预测市场平台

## 技术栈
- Vue 3 + Vite + TypeScript
- TailwindCSS 4 + DaisyUI 5
- Pinia (状态管理)
- Vue Router
- Supabase (Auth + DB + Realtime)
- Lucide Icons
- 部署: Cloudflare Pages

## 目录结构
```
src/
├── assets/          # CSS
├── components/      # 通用组件
├── layouts/         # 页面布局
├── lib/             # Supabase 等工具
├── router/          # 路由
├── stores/          # Pinia stores
├── types/           # TypeScript 类型
└── views/           # 页面
    └── auth/        # 登录/注册
```

## 主题
- 紫粉渐变 (#8b5cf6 → #ec4899)
- 深色背景 (#0f0f23)
- 中文UI

## 开发
```bash
cd /home/dz/whatsreal
npm run dev     # port 5174
npm run build
```

## Supabase 表设计
- `profiles` - 用户资料、余额
- `markets` - 预测市场
- `positions` - 用户持仓
- `trades` - 交易记录
- `comments` - 评论

## ⛔ Context 管理规则（违反会导致 session 崩溃，必须严格遵守）

### 1. 所有编码/开发任务必须 spawn 子 agent
- **任何涉及写代码、修改文件、调试的任务**，一律 `sessions_spawn` 子 agent 执行
- 本 channel session **只能做**：接收指令 → spawn 子 agent → 汇报结果
- **绝对禁止**在本 session 里写代码、读源码、debug

### 2. 文件读取红线
- ⛔ **禁止** `cat` 任何文件
- ✅ 只用 `head -30`、`grep "关键词"`、`wc -l`
- ✅ 一轮对话最多读 2 个文件，每个不超过 50 行

### 3. 回复精简
- 回复不超过 10 行，不贴代码/日志
- 只汇报结论和下一步

### ⚠️ 多个项目已因 context overflow 崩溃过。每次崩溃 = 丢失所有对话记忆 + 人工清理。
