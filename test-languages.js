// WhatsReal 多语言支持测试脚本
// 验证语言文件是否正常加载

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🌐 WhatsReal 多语言支持测试');
console.log('==========================\n');

// 支持的语言列表
const supportedLanguages = [
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

console.log('📊 语言文件检查:');
let passCount = 0;
let failCount = 0;

for (const lang of supportedLanguages) {
  const filePath = path.join(__dirname, 'src', 'locales', `${lang.code}.ts`);
  
  try {
    const fileExists = fs.existsSync(filePath);
    if (fileExists) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const hasBasicStructure = fileContent.includes('languages:') && 
                               fileContent.includes('nav:') && 
                               fileContent.includes('home:');
      
      if (hasBasicStructure) {
        console.log(`✅ ${lang.flag} ${lang.name} (${lang.code}) - 文件完整`);
        passCount++;
      } else {
        console.log(`⚠️  ${lang.flag} ${lang.name} (${lang.code}) - 文件结构不完整`);
        failCount++;
      }
    } else {
      console.log(`❌ ${lang.flag} ${lang.name} (${lang.code}) - 文件不存在`);
      failCount++;
    }
  } catch (error) {
    console.log(`❌ ${lang.flag} ${lang.name} (${lang.code}) - 读取错误: ${error.message}`);
    failCount++;
  }
}

console.log(`\n📈 测试结果:`);
console.log(`✅ 通过: ${passCount} 个语言`);
console.log(`❌ 失败: ${failCount} 个语言`);
console.log(`📊 完成率: ${Math.round(passCount / supportedLanguages.length * 100)}%\n`);

// 检查配置文件
console.log('🔧 配置文件检查:');
try {
  const indexPath = path.join(__dirname, 'src', 'locales', 'index.ts');
  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  
  const hasAllImports = supportedLanguages.every(lang => 
    indexContent.includes(`import ${lang.code.replace('-', '')} from './${lang.code}'`) ||
    indexContent.includes(`import ${lang.code.replace('-', '')} from './${lang.code.replace('-', '')}'`)
  );
  
  const hasAllInMessages = supportedLanguages.every(lang => 
    indexContent.includes(`'${lang.code}':`)
  );
  
  if (hasAllImports && hasAllInMessages) {
    console.log('✅ index.ts 配置完整');
  } else {
    console.log('⚠️  index.ts 配置可能不完整');
  }
} catch (error) {
  console.log(`❌ index.ts 读取错误: ${error.message}`);
}

console.log('\n🚀 部署信息:');
console.log('最新版本: https://1305375a.whatsreal.pages.dev');
console.log('主域名: https://whatsreal.pages.dev');
console.log('');
console.log('🎯 下一步: 添加剩余10种语言，达到Polymarket级别的20语言支持！');