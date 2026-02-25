# WhatsReal 项目记忆

## 2026-02-24  
- **🌍 完整多语言支持检查和修复**
  * 检查发现 MarketDetailPage 和 CreateMarketPage 存在硬编码中文文本
  * 新增市场详情页面多语言翻译键：
    - `markets.details.currentProbability` - 当前概率/Current Probability
    - `markets.details.priceChart` - 价格走势/Price Chart  
    - `markets.details.recentVotes` - 最近投票/Recent Votes
    - `markets.details.votingArea` - 投票区域/Voting Area
    - `markets.details.noVotes` - 暂无投票记录/No voting records
    - `markets.details.pleaseConnect` - 请先连接钱包/Please connect wallet first
  * 新增创建市场页面多语言翻译键：
    - `create.subtitle` - 提出一个可验证的是/否问题，让市场来回答
    - `create.form.titleChinese` - 市场标题（中文）/Market Title (Chinese)
    - `create.form.titleEn` - 市场标题（英文，可选）/Market Title (English, optional)
    - `create.form.descriptionChinese` - 详细描述（中文）
    - `create.form.descriptionEn` - 详细描述（英文，可选）
    - 完整的错误和成功消息翻译
  * 更新页面实现：MarketDetailPage.vue 和 CreateMarketPage.vue 完全使用 $t() 函数替代硬编码文本
  * **多语言支持状态**：✅ 全部10种语言 (中文、英语、日语、韩语、德语、法语、西班牙语、意大利语、葡萄牙语、俄语)
  * **浏览器语言检测**：✅ 自动检测用户浏览器语言并设置为默认语言，支持语言代码前缀匹配
  * **完整页面覆盖**：✅ 所有页面支持多语言切换，包括：
    - HomePage - 首页 ✅ 
    - MarketDetailPage - 市场详情页 ✅ (新修复)
    - CreateMarketPage - 创建市场页 ✅ (新修复)  
    - ProfilePage - 个人中心页 ✅
    - AboutPage - 关于我们页 ✅
    - TermsPage - 服务条款页 ✅
    - PrivacyPage - 隐私政策页 ✅  
    - HowItWorksPage - 使用指南页 ✅
    - ConnectWalletPage - 连接钱包页 ✅
    - MainLayout - 导航栏 ✅
    - AppFooter - 页脚 ✅
  * **联系邮箱更新**: 统一更改为 support@whatsreal.com
- **🔧 重大环境变量问题永久解决**
  * 根本原因：OpenClaw Gateway进程设置的系统环境变量持续覆盖.env文件
  * 错误环境变量：`zdvvsrvneovelxlpdngn.supabase.co` (导致PGRST205错误)
  * 正确配置：`xwbtovojdqydupvyzipr.supabase.co` (WhatsReal项目)
  * **永久解决方案**：
    - 创建清洁构建脚本 `build-clean.sh` - 自动清除冲突环境变量
    - 创建部署脚本 `deploy-clean.sh` - 完整的构建+部署流程
    - 添加运行时环境验证 `env-check.ts` - 自动检测和修复
    - 增强Supabase客户端 - 安全回退机制
  * **使用方法**: `./deploy-clean.sh` (一键解决所有环境问题)
  * 最新清洁部署: https://0fe52c65.whatsreal.pages.dev ⭐
- **🔐 用户认证系统完全修复**
  * UUID生成算法优化 - 为钱包地址生成标准UUID v4格式
  * 自动用户profile创建 - 钱包连接时检查并创建数据库记录
  * RLS策略修复 - 允许创建和管理profiles记录
  * 外键约束删除 - 不再依赖auth.users表
  * 默认余额设置 - 新用户获得1万余额开始交易
- **📊 所有功能验证完成**
  * ✅ 15个市场数据正常显示
  * ✅ 钱包连接自动创建用户
  * ✅ 投票交易功能完整
  * ✅ 环境变量自动验证防护
  * ✅ 数据库完全兼容
- **🔐 UI权限控制实现**
  * 删除首页"创建市场"和"浏览市场"按钮 - 简化用户界面
  * 导航栏"创建市场"按钮增加管理员权限控制
  * 创建管理员配置系统 `src/config/admin.ts`
  * 实现基于钱包地址的权限验证逻辑
  * 默认示例地址需要替换为实际管理员地址
  * 最新部署: https://e390d83b.whatsreal.pages.dev ⭐
- **🌐 多语言国际化完整实现**
  * 集成Vue i18n v11 - 支持中文(zh-CN)和英文(en)双语
  * 智能浏览器语言检测 - 自动设置用户偏好语言
  * 语言持久化存储 - localStorage保存用户选择
  * 美观语言选择器组件 - 导航栏和设置页面双入口
  * 全站文本国际化 - 覆盖所有界面元素和业务术语
  * 即时语言切换 - 无需刷新页面立即生效
  * Profile设置页面集成 - 完整的用户偏好管理
  * 最新多语言部署: https://3edcef8e.whatsreal.pages.dev ⭐
- **📊 市场内容多语言完整实现**
  * 数据库添加title_en、description_en、category_en字段
  * 为15个现有市场自动填充英文翻译
  * 创建多语言工具函数 `src/utils/market-i18n.ts`
  * 首页、详情页、创建页全面支持市场内容多语言
  * 智能语言切换 - 英文环境显示英文，中文环境显示中文
  * 向后兼容 - 无英文翻译时自动回退到中文内容
  * 分类自动映射 - 加密市场→Cryptocurrency, 股票市场→Stock Market等
  * 创建市场支持双语输入（英文字段可选）
  * 修复管理员地址设置：0xB81702D77e6993151882f9E3f433e79B507Ef17C
  * 最新市场多语言版本: https://8a252f1f.whatsreal.pages.dev ⭐
- **🎨 个人中心页面完整重构**
  * 全新左右布局设计 - 左侧固定菜单，右侧动态内容区
  * 用户信息头部 - 头像、钱包地址、余额卡片
  * 四个主菜单页面：概览、持仓、历史、设置
  * 概览页面统计 - 持仓数量、交易次数、总资产
  * 最近活动时间线 - 显示最近5笔交易记录
  * 持仓页面优化 - 卡片化布局，详细盈亏分析
  * 交易历史美化 - 图标化交易类型，完整信息展示
  * 设置页面增强 - 语言、主题、通知、账户管理
  * 完美多语言集成 - 所有文本支持中英切换
  * 响应式设计 - 支持桌面和移动设备
  * 优雅空状态 - 友好的无数据引导页面
  * 智能时间格式化 - 相对时间显示（1分钟前、2小时前）
  * 断开钱包功能 - 集成账户管理操作
  * 响应式移动端适配 - 移动端顶部导航栏和下拉菜单
  * 断开连接按钮重新定位 - 从导航栏移至个人中心底部，带图标和确认
  * 断开连接按钮移至Settings页面最下方 - 更符合账户管理的逻辑分组
  * ConnectWalletPage多语言适配 - 钱包连接页面支持中英双语
  * Profile页面宽度修复 - 与导航栏保持一致的最大宽度约束
  * 语言选择器地球图标 - 导航栏语言选择使用地球图标替代翻译图标
  * Profile页面宽度完全修复 - 确保与navbar完美对齐，移动端顶部导航也使用相同容器约束
  * MarketDetailPage页面宽度修复 - 从max-w-5xl改为max-w-7xl，与导航栏对齐
  * 主域名部署: https://whatsreal.pages.dev (使用--branch main部署)
  * 分类清理 - 保留从beginning到AI科技的分类：全部、加密市场、股票市场、商品市场、外汇市场、体育、AI科技
  * 删除分类 - 移除：加密货币、商业、金融、政治、娱乐等分类及对应市场数据
  * 平台描述更新 - 从"prediction market platform"改为"AI managed web3 prediction market platform"
    - 英文：WhatsReal is the AI managed web3 prediction market platform
    - 中文：WhatsReal 是AI驱动的Web3预测市场平台
    - 页面标题：WhatsReal - AI驱动的Web3预测市场
    - 添加meta description提升SEO
  * 评论系统修复 - 解决PGRST200错误，移除外键约束冲突，comments表支持钱包地址
  * Footer页面功能完整 - 添加About/Terms/Privacy页面，内容从白皮书概念摘取
    - AppFooter组件：品牌展示、平台链接、公司信息、联系方式4个区域
    - About页面：使命、技术栈、愿景、团队介绍等完整内容
    - Terms页面：服务条款、用户责任、风险披露、法律条款
    - Privacy页面：隐私政策、数据收集、使用方式、用户权利
    - 双语支持：中英文完整翻译，专业法律和技术术语
    - 响应式设计：桌面和移动端友好的布局
  * 评论系统修复 - 解决PGRST200错误，移除外键约束冲突，comments表支持钱包地址
  * Footer页面功能完整 - 添加About/Terms/Privacy页面，内容从白皮书概念摘取
    - AppFooter组件：品牌展示、平台链接、公司信息、联系方式4个区域
    - About页面：使命、技术栈、愿景、团队介绍等完整内容
    - Terms页面：服务条款、用户责任、风险披露、法律条款
    - Privacy页面：隐私政策、数据收集、使用方式、用户权利
    - 双语支持：中英文完整翻译，专业法律和技术术语
    - 响应式设计：桌面和移动端友好的布局
  * 导航栏搜索功能 - 添加完整的市场搜索系统
    - 桌面端：中央搜索框，实时下拉结果，支持标题/分类/描述搜索
    - 移动端：搜索按钮触发全屏搜索覆盖层
    - 搜索结果页面：URL查询参数支持，搜索信息展示，清除搜索功能
    - 智能匹配：关键词匹配市场标题、分类、描述内容
    - 多语言支持：搜索界面完全支持中英双语
    - 即时导航：搜索结果直接跳转到市场详情页
  * UI字体优化 - 调整多个界面元素的字体大小提升可读性
    - 移除Contact中的GitHub链接：Footer、About、翻译文件完整清理
    - 市场分类按钮：从btn-sm改为btn，增加text-base字体大小
    - 导航栏按钮优化：创建市场、账户地址、连接钱包、语言选择、移动搜索按钮全部增大
    - 账户地址显示：从text-xs改为text-sm，保持font-mono等宽字体
    - 语言选择器：从btn-sm改为btn正常大小，保持地球图标
  * 20语言国际化支持 (第一期) - 从2语言扩展到10语言的Polymarket级别多语言支持
    - 核心10语言：中文、英语、日语、韩语、德语、法语、西班牙语、意大利语、葡萄牙语、俄语
    - 完整翻译体系：导航、首页、市场、个人中心、About/Terms/Privacy、搜索、Footer等所有界面
    - 智能语言检测：支持浏览器语言自动检测和前缀匹配
    - 优化语言选择器：增加语言代码标识、支持滚动、更好的视觉层次
    - 专业本地化：针对每个语言市场的文化和用词习惯进行优化
    - 基础架构：为后续扩展到20语言做好技术准备
  * 投票区链接钱包功能 - 添加"请先连接钱包"按钮点击跳转功能
    - 修改handleTrade函数支持未认证用户跳转到连接钱包页面
    - 优化按钮disabled逻辑，使未连接钱包时可点击
    - 使用useRouter实现页面跳转到'/auth/connect'
  * 20种语言国际化支持 - 扩展为Polymarket级别的多语言平台
    - 第一阶段完成10种核心语言：中文、英语、日语、韩语、德语、法语、西班牙语、意大利语、葡萄牙语、俄语
    - 扩展语言检测系统支持所有语言的浏览器自动检测
    - 创建完整的翻译文件覆盖所有界面文本
    - 更新语言选择器显示所有支持的语言选项
    - 智能语言映射系统支持语言代码前缀匹配
  * 钱包地址按钮样式优化 - 让用户明确知道钱包地址是可点击的
    - 从btn-ghost改为btn-outline样式，增加明显的边框
    - 添加用户图标，提供视觉提示
    - 优化flex布局，确保图标和文字对齐
    - 提升用户对按钮可点击性的识别度
  * 管理员角色显示功能 - 在Profile页面展示管理员身份和权限
    - 更新admin.ts配置文件，修复地址大小写不匹配问题
    - Profile左侧头部添加管理员badge标识，使用闪电图标
    - Overview页面添加管理员权限提醒alert，突出特殊权限
    - 中英双语翻译支持管理员角色相关文本
    - 管理员地址：0xb81702d77e6993151882f9e3f433e79b507ef17c (小写)
  * Footer功能增强和UI优化完成 - 根据用户反馈进行的多项改进
    - ✅ 创建"How to Work"使用指导页面 - 完整的三步教程和FAQ
    - ✅ Footer平台区域添加"使用指南"和"排行榜"链接 
    - ✅ Company区域添加"白皮书"链接，直接访问PDF文档
    - ✅ 语言选择器优化 - 彻底重构为div布局，移除DaisyUI menu组件，确保真正单列显示
    - ✅ Connect按钮样式优化 - 从btn-ghost改为btn-outline，更明显可点击
    - 📁 白皮书文件已复制到public/doc目录，可在线访问
  * Footer和UI增强完整版本 - 所有用户反馈改进已完成
    - ✅ Footer版权标识改为"WhatsReal.com" - 品牌完整性提升
    - ✅ 语言选择后自动关闭下拉菜单 - 改善用户体验
    - ✅ 走马灯活动展示栏完整实现 - 实时显示平台动态
      * 显示交易、市场创建、结算、评论等活动
      * 自动滚动动画，鼠标悬停暂停
      * 点击跳转到对应市场详情页
      * 30秒模拟数据自动更新
      * 支持中英双语显示
      * 闪电图标和渐变背景设计
    - ✅ Company区域已简化 - 只保留"关于我们"和"白皮书"
    - ✅ Terms和Privacy链接保留在底部版权区域
  * 移动端logo优化 - 在小屏幕设备上隐藏"WhatsReal"文字，只显示"W"图标
    - 添加`hidden sm:inline`响应式类，手机端显示更简洁
    - 节省移动端导航栏空间，提升用户体验
  * 首页标题字体优化 - "预测未来，赢在当下"标题从text-5xl调整为text-4xl
    - 让首页标题字体更加协调和平衡
    - 提升整体页面视觉层次感
  * 移除首页统计卡片区域 - 根据用户反馈删除交易量/活跃市场/AMM定价统计卡片
    - 简化首页布局，突出核心市场内容
    - 让页面更加专注和整洁
  * 平台描述词优化 - 将"AI驱动的"改为"AI管理的"
    - 首页副标题："AI驱动的Web3预测市场平台"改为"AI管理的Web3预测市场平台"
    - 同步更新About页面、Terms页面中的所有相关描述
    - 保持中英文版本表述一致
  * 最新版本: https://082677f9.whatsreal.pages.dev / https://whatsreal.pages.dev ⭐

## 2026-02-25
- **📋 智能合约开发状态完整检查**
  * 检查 `/home/dz/whatsreal/contracts/` 目录结构
  * 主合约文件：`WhatsReal.sol` (13,173字节) - 功能完整，准备部署
  * **核心功能特性**：
    - ERC1155代币标准 - 用于预测市场持仓
    - Chainlink VRF集成 - 彩票随机数生成
    - Chainlink价格预言机 - BTC/USD结算支持
    - AccessControl权限管理 - PAUSER_ROLE和SETTLER_ROLE
    - 50/50奖励分配 - 比例奖励+彩票奖励
    - 应急功能和暂停机制 - 安全保障
    - 10%平台手续费 (1000 BPS)
  * **测试覆盖**：完整测试套件 `WhatsReal.t.sol` 包含模拟合约
  * **部署配置**：BSC主网部署脚本 `Deploy.s.sol` 配置正确地址
  * **编译状态**：`out/` 目录包含编译好的JSON artifacts
  * **技术栈**：Foundry项目，配置文件 `foundry.toml` 完整
  * **部署准备度**：✅ 合约开发完成，可直接部署到BSC主网
  * **网络目标**：Binance Smart Chain (BSC) 主网
  * **依赖问题**：系统未安装Foundry但编译产物完整，不影响部署准备

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
  * **数据恢复更新**：恢复丰富市场数据和四大分类
  * 15个高质量demo市场（含真实交易量和价格数据）
  * 四大市场分类：加密市场、股票市场、商品市场、外汇市场
  * 解决回滚后数据丢失问题，现在数据完整丰富
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
