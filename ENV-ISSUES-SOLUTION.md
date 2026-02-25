# WhatsReal 环境变量问题 - 永久解决方案

## 问题描述

**重复发生的问题**：系统环境变量持续覆盖 `.env` 文件配置

```bash
❌ 系统环境变量: zdvvsrvneovelxlpdngn.supabase.co (错误项目)
✅ .env 文件配置:  xwbtovojdqydupvyzipr.supabase.co (正确项目)
```

**影响**：
- 导致 PGRST205 错误（找不到 markets 表）
- 连接到错误的数据库项目
- 用户看到"暂无市场数据"

## 根本原因

环境变量来源：**OpenClaw Gateway 进程**
```bash
父进程: openclaw-gatewa
```

## 永久解决方案

### 1. 清洁构建脚本 (`build-clean.sh`)

```bash
./build-clean.sh
```

**功能**：
- ✅ 清除冲突的系统环境变量
- ✅ 验证 .env 文件配置
- ✅ 清理旧构建缓存
- ✅ 执行构建并验证结果
- ✅ 确保正确的 URL 注入构建

### 2. 完整部署脚本 (`deploy-clean.sh`)

```bash
./deploy-clean.sh
```

**功能**：
- ✅ 执行清洁构建
- ✅ 部署到 Cloudflare Pages
- ✅ 提供部署后验证

### 3. 运行时环境验证 (`src/lib/env-check.ts`)

**自动验证**：
- ✅ 检查 Supabase URL 正确性
- ✅ 验证项目引用匹配
- ✅ 开发环境自动验证
- ✅ 生产环境安全回退

### 4. 增强的 Supabase 客户端 (`src/lib/supabase.ts`)

**安全机制**：
- ✅ 环境验证失败时使用正确的备用配置
- ✅ 详细的开发环境日志
- ✅ 防止连接到错误项目

## 使用方法

### 日常部署
```bash
cd /home/dz/whatsreal
./deploy-clean.sh
```

### 仅构建
```bash
cd /home/dz/whatsreal  
./build-clean.sh
```

### 验证环境
```bash
# 检查当前环境变量
env | grep VITE_SUPABASE

# 检查 .env 文件
cat .env
```

## 部署链接

- 🌟 **主域名**: https://whatsreal.pages.dev
- 🔧 **最新部署**: https://0fe52c65.whatsreal.pages.dev
- 📊 **Production**: https://production.whatsreal.pages.dev

## 验证清单

构建完成后检查：
- [ ] 构建日志显示 `✅ 构建成功，正确的 Supabase URL 已注入`
- [ ] 网站显示15个市场数据
- [ ] 钱包连接正常
- [ ] 投票交易功能正常
- [ ] 控制台无 PGRST205 错误

## 故障排除

如果问题再次出现：

1. **检查构建验证**：
   ```bash
   grep -r "xwbtovojdqydupvyzipr" dist/
   ```

2. **使用清洁脚本重新构建**：
   ```bash
   ./build-clean.sh
   ```

3. **检查环境变量源**：
   ```bash
   env | grep VITE_
   ```

4. **清除浏览器缓存**测试

## 防止再次发生

- ✅ 始终使用 `./deploy-clean.sh` 部署
- ✅ 环境变量自动验证已启用
- ✅ 构建时自动检查配置正确性
- ✅ 运行时安全回退机制

---

**最后更新**: 2026-02-24  
**状态**: ✅ 已解决并防护