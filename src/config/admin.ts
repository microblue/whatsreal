// WhatsReal 管理员配置
// 管理员钱包地址列表 - 只有这些地址可以创建市场

export const ADMIN_ADDRESSES = [
  '0xb81702d77e6993151882f9e3f433e79b507ef17c', // 主管理员地址 (小写)
  // 可以添加更多管理员地址
]

// 检查地址是否为管理员
export function isAdminAddress(address: string): boolean {
  if (!address) return false
  return ADMIN_ADDRESSES.includes(address.toLowerCase())
}

// 添加管理员地址
export function addAdminAddress(address: string): void {
  const lowerAddress = address.toLowerCase()
  if (!ADMIN_ADDRESSES.includes(lowerAddress)) {
    ADMIN_ADDRESSES.push(lowerAddress)
    console.log(`✅ 管理员地址已添加: ${address}`)
  }
}

// 删除管理员地址  
export function removeAdminAddress(address: string): void {
  const lowerAddress = address.toLowerCase()
  const index = ADMIN_ADDRESSES.indexOf(lowerAddress)
  if (index > -1) {
    ADMIN_ADDRESSES.splice(index, 1)
    console.log(`❌ 管理员地址已删除: ${address}`)
  }
}