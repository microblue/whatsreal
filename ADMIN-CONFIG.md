# WhatsReal 管理员配置指南

## 修改内容

### 1. 首页按钮删除
- ✅ **删除**："创建市场" 和 "浏览市场" 按钮
- ✅ **保留**：标题和描述文本
- ✅ **简化**：首页更加简洁

### 2. 导航栏权限控制
- ✅ **创建市场按钮**：仅管理员可见
- ✅ **普通用户**：看不到创建市场按钮
- ✅ **管理员用户**：正常显示创建市场按钮

## 配置管理员地址

### 方法1: 修改配置文件（推荐）

编辑文件：`src/config/admin.ts`

```typescript
export const ADMIN_ADDRESSES = [
  // 添加实际的管理员钱包地址
  '0x你的管理员钱包地址1',
  '0x你的管理员钱包地址2',
  // 可以添加多个管理员地址
]
```

### 方法2: 使用开发者工具动态添加

```javascript
// 在浏览器控制台中运行
import { addAdminAddress } from '@/config/admin'
addAdminAddress('0x你的钱包地址')
```

## 当前配置状态

- 📁 **配置文件位置**: `src/config/admin.ts`
- 🔧 **默认地址**: `0x1234567890abcdef1234567890abcdef12345678` (示例地址)
- ⚠️ **需要替换**: 请将示例地址替换为实际管理员钱包地址

## 权限控制逻辑

### 管理员权限
- ✅ **导航栏显示**："创建市场" 按钮
- ✅ **页面访问**：可以访问 `/create` 页面
- ✅ **功能完整**：所有管理功能可用

### 普通用户
- ❌ **导航栏隐藏**："创建市场" 按钮不显示
- ❌ **直接访问**：如果直接访问 `/create` 页面，需要在页面中添加权限检查

## 建议的安全增强

### 1. 页面级权限检查

在 `CreateMarketPage.vue` 中添加权限验证：

```vue
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

// 权限检查
if (!authStore.isAdmin) {
  router.push('/')
}
</script>
```

### 2. 路由守卫

在 `router/index.ts` 中添加路由守卫：

```typescript
router.beforeEach((to) => {
  if (to.path === '/create') {
    const authStore = useAuthStore()
    if (!authStore.isAdmin) {
      return '/'
    }
  }
})
```

## 部署版本

🌟 **最新部署**: https://e390d83b.whatsreal.pages.dev
📊 **主域名**: https://whatsreal.pages.dev

## 验证步骤

1. **普通用户测试**:
   - 连接非管理员钱包
   - 确认导航栏没有"创建市场"按钮

2. **管理员测试**:
   - 连接管理员钱包地址
   - 确认导航栏显示"创建市场"按钮

3. **首页检查**:
   - 确认首页标题下方没有按钮
   - 页面布局简洁

## 下一步建议

1. 🔑 **替换管理员地址** - 用实际钱包地址替换示例地址
2. 🛡️ **添加路由守卫** - 防止直接访问创建页面
3. 📊 **管理面板** - 考虑添加管理员专用的管理面板
4. 🔐 **多重签名** - 考虑实现多重签名管理机制

---

**修改完成时间**: 2026-02-24  
**状态**: ✅ 已实现并部署