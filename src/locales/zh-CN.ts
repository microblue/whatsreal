export default {
  // 语言列表
  languages: {
    'zh-CN': '中文',
    'en': 'English', 
    'ja': '日本語',
    'ko': '한국어',
    'de': 'Deutsch',
    'fr': 'Français', 
    'es': 'Español',
    'it': 'Italiano',
    'pt': 'Português',
    'ru': 'Русский',
  },

  // 通用
  common: {
    loading: '加载中...',
    error: '错误',
    success: '成功',
    confirm: '确认',
    cancel: '取消',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    search: '搜索',
    back: '返回',
    next: '下一步',
    previous: '上一步',
    close: '关闭',
    submit: '提交',
    time: {
      minutesAgo: '分钟前',
      hoursAgo: '小时前',
      daysAgo: '天前'
    }
  },

  // 导航
  nav: {
    home: '首页',
    markets: '市场',
    create: '创建市场',
    profile: '个人中心',
    connect: '连接钱包',
    disconnect: '断开',
    searchPlaceholder: '搜索市场...',
  },

  // 首页
  home: {
    title: '预测未来，赢在当下',
    subtitle: 'WhatsReal 是AI管理的Web3预测市场平台。对你关心的事件下注，让市场告诉你真相。',
    stats: {
      totalVolume: '总交易量',
      activeMarkets: '活跃市场',
      ammPricing: 'AMM 定价',
    },
    noMarkets: '暂无市场数据',
  },

  // 市场
  markets: {
    categories: {
      all: '全部',
      crypto: '加密市场',
      stock: '股票市场',
      commodity: '商品市场',
      forex: '外汇市场',
      sports: '体育',
      ai: 'AI科技',
      cryptocurrency: '加密货币',
      business: '商业',
      finance: '金融',
      politics: '政治',
      entertainment: '娱乐',
    },
    details: {
      volume: '交易量',
      endDate: '截止',
      resolved: '已结算',
      yes: '是',
      no: '否',
      probability: '概率',
      currentProbability: '当前概率',
      priceChart: '价格走势',
      recentVotes: '最近投票',
      votingArea: '投票区域',
      noVotes: '暂无投票记录',
      comments: '讨论区',
      noComments: '暂无评论',
      addComment: '添加评论',
      commentPlaceholder: '分享你的观点...',
      pleaseConnect: '请先连接钱包',
      settleMarket: '结算市场',
      settleYes: '结算为 是',
      settleNo: '结算为 否',
      marketInfo: '市场信息',
      notFound: '市场不存在',
      confirmSettle: '确定将市场结算为「{resolution}」？此操作不可撤销。',
    },
    status: {
      active: '进行中',
      resolved: '已结算',
      cancelled: '已取消'
    }
  },

  // 创建市场
  create: {
    title: '创建预测市场',
    subtitle: '提出一个可验证的是/否问题，让市场来回答',
    form: {
      title: '市场标题',
      titleChinese: '市场标题（中文）',
      titleEn: '市场标题（英文，可选）',
      titlePlaceholder: '例：比特币2026年底能突破20万美元吗？',
      titleEnPlaceholder: 'e.g: Will Bitcoin exceed $200,000 by the end of 2026?',
      description: '详细描述',
      descriptionChinese: '详细描述（中文）',
      descriptionEn: '详细描述（英文，可选）',
      descriptionPlaceholder: '清楚描述判定条件和数据来源',
      descriptionEnPlaceholder: 'Clearly describe the conditions and data sources for verification',
      category: '分类',
      endDate: '结束时间',
      liquidity: '流动性参数',
      initialLiquidity: '初始流动性 (积分)',
      liquidityPlaceholder: '从余额扣除，作为初始流动性',
      initialPrice: '初始价格',
      liquidityHelp: '可选。提供初始流动性可以让交易更平滑。设为0则不提供。',
      pleaseConnect: '请先连接钱包',
    },
    buttons: {
      create: '创建市场',
      preview: '预览',
    },
    errors: {
      titleRequired: '请输入市场标题',
      descriptionRequired: '请输入详细描述',
      categoryRequired: '请选择分类',
      endTimeRequired: '请选择结束时间',
      endTimeFuture: '结束时间必须是未来时间',
      createFailed: '创建失败，请重试',
    },
    success: {
      created: '市场创建成功！',
    }
  },

  // 个人资料
  profile: {
    title: '个人中心',
    menu: {
      overview: '概览'
    },
    tabs: {
      positions: '当前持仓',
      history: '交易历史',
      settings: '设置',
    },
    overview: {
      balance: '账户余额',
      totalValue: '总资产',
      activePositions: '持仓数量',
      totalTrades: '交易次数',
      recentActivity: '最近活动',
      noActivity: '暂无交易记录',
      viewAll: '查看全部'
    },
    positions: {
      empty: '暂无持仓',
      startTrading: '开始交易'
    },
    history: {
      empty: '暂无交易历史',
      startTrading: '开始交易'
    },
    settings: {
      language: '语言设置',
      languageDesc: '选择您偏好的界面语言',
      theme: '主题设置',
      themeDesc: '选择浅色或深色主题',
      notifications: '通知设置',
      notificationsDesc: '接收交易和市场变化通知',
      account: '账户管理',
      accountDesc: '管理您的账户设置',
      disconnect: '断开连接',
      confirmDisconnect: '确定要断开钱包连接吗？'
    },
    role: {
      admin: '管理员',
      adminAccess: '管理员权限',
      adminDescription: '您拥有创建市场和管理平台的特殊权限',
    },
  },

  // 交易
  trade: {
    buy: '买入',
    sell: '卖出',
    amount: '金额',
    shares: '份',
    price: '均价',
    current: '当前',
    total: '总计',
    slippage: '滑点',
    fee: '手续费',
    estimate: '当前',
    confirm: '确认交易',
    success: '交易成功',
    error: '交易失败',
  },

  // 钱包
  wallet: {
    connect: '连接钱包',
    loginDesc: '使用 Web3 钱包登录 WhatsReal',
    supportedWallets: '支持 MetaMask、WalletConnect、Coinbase Wallet 等主流钱包',
    networkNotice: '连接钱包即表示您同意使用 BNB Smart Chain 网络',
    connecting: '连接中...',
    connected: '已连接',
    disconnect: '断开连接',
    address: '钱包地址',
    balance: '余额',
    unsupported: '不支持的网络',
    switchNetwork: '切换网络',
  },

  // 错误消息
  errors: {
    networkError: '网络错误',
    invalidInput: '输入无效',
    insufficientBalance: '余额不足',
    transactionFailed: '交易失败',
    userNotFound: '用户不存在',
    marketNotFound: '市场不存在',
    marketClosed: '市场已关闭',
  },

  // 搜索
  search: {
    results: '搜索结果',
    query: '搜索关键词',
    found: '个结果',
    clear: '清除搜索',
  },

  // Footer
  footer: {
    tagline: 'AI管理的Web3预测市场平台',
    platform: {
      title: '平台',
      howItWorks: '使用指南',
      leaderboard: '排行榜',
    },
    company: {
      title: '公司',
      about: '关于我们',
      terms: '服务条款',
      privacy: '隐私政策',
      whitepaper: '白皮书',
    },
    contact: {
      title: '联系方式',
      email: '邮件联系',
    },
    copyright: '版权所有',
  },

  // About Page
  about: {
    title: '关于WhatsReal',
    mission: {
      title: '我们的使命',
      content: 'WhatsReal致力于通过AI管理的Web3预测市场平台，让每个人都能参与到未来事件的预测中，通过群体智慧发现真相，创造更加透明和高效的信息发现机制。',
    },
    whatWeDo: {
      title: '我们在做什么',
      content1: 'WhatsReal是一个创新的预测市场平台，结合了人工智能、区块链技术和自动化做市商(AMM)机制，为用户提供公平、透明、高效的预测交易体验。',
      content2: '用户可以在平台上对各种未来事件进行预测交易，包括加密货币价格走势、股票市场表现、体育赛事结果、技术发展趋势等多个领域。',
    },
    technology: {
      title: '我们的技术',
      content1: 'WhatsReal采用最先进的技术栈，确保平台的安全性、可靠性和用户体验：',
      ai: {
        title: 'AI智能算法',
        desc: '利用机器学习算法优化市场定价和风险管理',
      },
      web3: {
        title: 'Web3基础设施',
        desc: '基于区块链的去中心化架构确保透明度和安全性',
      },
      lmsr: {
        title: 'LMSR做市机制',
        desc: '对数市场评分规则提供流动性和公平定价',
      },
      realtime: {
        title: '实时数据',
        desc: '实时更新的市场数据和交易执行系统',
      },
    },
    vision: {
      title: '我们的愿景',
      content1: '我们相信预测市场能够成为信息发现和风险管理的强大工具。通过聚集全球用户的智慧和见解，WhatsReal将帮助人们更好地理解和预测未来。',
      content2: '我们的目标是建立一个开放、包容、创新的预测生态系统，让每个参与者都能从中受益，同时推动整个行业的发展。',
    },
    team: {
      title: '我们的团队',
      content: 'WhatsReal团队由来自区块链、人工智能、金融和产品设计等领域的专家组成。我们致力于为用户提供最优质的产品和服务。',
    },
    contactSection: {
      title: '联系我们',
      content: '如果您对WhatsReal有任何问题或建议，欢迎随时联系我们：',
      email: '发送邮件',
    },
  },

  // Terms Page
  terms: {
    title: '服务条款',
    lastUpdated: '最后更新：2026年2月24日',
    introduction: {
      title: '简介',
      content1: '欢迎使用WhatsReal预测市场平台（"平台"、"服务"或"我们"）。本服务条款（"条款"）适用于您对WhatsReal网站和服务的访问和使用。',
      content2: '通过访问或使用我们的服务，您同意受本条款约束。如果您不同意本条款的任何部分，则不应使用我们的服务。',
    },
    acceptance: {
      title: '接受条款',
      content: '通过使用WhatsReal服务，您确认您已阅读、理解并同意受本服务条款以及我们的隐私政策约束。',
    },
    platform: {
      title: '平台说明',
      content1: 'WhatsReal是一个AI管理的Web3预测市场平台，允许用户对未来事件进行预测交易。平台使用LMSR（对数市场评分规则）作为自动化做市商机制。',
      content2: '所有交易都基于区块链技术进行，确保透明度和去中心化。用户需要连接Web3钱包才能参与交易。',
    },
    responsibilities: {
      title: '用户责任',
      item1: '您必须年满18岁或在您所在司法管辖区达到法定年龄',
      item2: '您负责保护您的钱包私钥和账户安全',
      item3: '您承诺提供准确、完整的信息',
      item4: '您同意遵守所有适用的法律法规',
      item5: '您理解预测交易涉及风险，可能导致损失',
    },
    prohibited: {
      title: '禁止行为',
      item1: '操纵市场价格或从事不公平交易',
      item2: '使用自动化工具或机器人进行交易',
      item3: '传播虚假或误导性信息',
      item4: '侵犯他人知识产权或隐私',
      item5: '进行任何非法或未授权的活动',
    },
    risks: {
      title: '风险披露',
      content1: '参与预测市场交易涉及重大风险，包括但不限于：',
      item1: '市场波动可能导致部分或全部资金损失',
      item2: '区块链技术和智能合约存在技术风险',
      item3: '市场流动性不足可能影响交易执行',
      item4: '监管变化可能影响平台运营',
    },
    ip: {
      title: '知识产权',
      content1: 'WhatsReal平台及其所有内容、功能和特性均为WhatsReal及其许可方的专有财产。',
      content2: '您不得复制、修改、分发或以其他方式使用平台内容，除非获得我们的明确书面许可。',
    },
    disclaimers: {
      title: '免责声明',
      content1: 'WhatsReal平台按"现状"提供，不提供任何明示或暗示的保证。我们不保证服务的准确性、可靠性或可用性。',
      content2: '我们不对因使用平台而产生的任何损失或损害承担责任，包括但不限于直接、间接、偶然或后果性损害。',
    },
    liability: {
      title: '责任限制',
      content: '在法律允许的最大范围内，WhatsReal对任何损失或损害的总责任不得超过您在导致索赔的事件发生前12个月内支付给我们的金额。',
    },
    law: {
      title: '适用法律',
      content: '本条款受新加坡法律管辖并按其解释。任何争议应通过新加坡的仲裁程序解决。',
    },
    changes: {
      title: '条款变更',
      content: '我们保留随时修改本条款的权利。变更将在发布后立即生效。继续使用服务即表示您接受修改后的条款。',
    },
    contactSection: {
      title: '联系我们',
      content: '如果您对本服务条款有任何问题，请联系我们：',
    },
  },

  // Privacy Page
  privacy: {
    title: '隐私政策',
    lastUpdated: '最后更新：2026年2月24日',
    introduction: {
      title: '简介',
      content1: 'WhatsReal（"我们"、"我们的"或"平台"）重视您的隐私。本隐私政策说明我们如何收集、使用和保护您在使用我们服务时的信息。',
      content2: '通过使用WhatsReal服务，您同意按照本隐私政策收集和使用信息。',
    },
    collect: {
      title: '我们收集的信息',
      intro: '我们收集以下类型的信息：',
      wallet: {
        title: '钱包信息',
        item1: '您的Web3钱包地址',
        item2: '交易历史和余额信息',
        item3: '智能合约交互记录',
      },
      usage: {
        title: '使用数据',
        item1: '您如何使用我们的服务',
        item2: '访问时间、频率和持续时间',
        item3: '设备和浏览器信息',
        item4: 'IP地址和位置信息（如果允许）',
      },
      technical: {
        title: '技术数据',
        item1: 'Cookie和类似跟踪技术',
        item2: '日志文件和错误报告',
        item3: '性能和分析数据',
      },
    },
    use: {
      title: '信息使用方式',
      item1: '提供和维护我们的服务',
      item2: '处理交易和管理您的账户',
      item3: '改进我们的产品和服务',
      item4: '提供客户支持',
      item5: '确保平台安全和防止欺诈',
      item6: '遵守法律要求',
    },
    sharing: {
      title: '信息共享',
      intro: '我们不会出售、交易或出租您的个人信息。我们可能在以下情况下共享信息：',
      item1: '获得您的明确同意',
      item2: '遵守法律义务或法院命令',
      item3: '保护我们的权利、财产或安全',
      item4: '与可信的服务提供商合作（受保密协议约束）',
    },
    blockchain: {
      title: '区块链透明性',
      content1: '请注意，区块链交易本质上是公开的。您的钱包地址和交易活动将在区块链上永久记录，任何人都可以查看。',
      content2: '我们无法控制或删除已记录在区块链上的信息。请在参与交易前考虑这一点。',
    },
    security: {
      title: '数据安全',
      content1: '我们实施多种安全措施来保护您的信息：',
      item1: '加密传输和存储敏感数据',
      item2: '定期安全审计和漏洞评估',
      item3: '限制员工访问个人信息',
      item4: '使用安全的第三方服务提供商',
    },
    retention: {
      title: '数据保留',
      content1: '我们只在必要期间保留您的信息，以实现本政策中概述的目的。',
      content2: '您可以随时要求删除您的个人信息，但请注意区块链记录无法删除。',
    },
    rights: {
      title: '您的权利',
      intro: '根据适用法律，您可能拥有以下权利：',
      item1: '访问我们持有的关于您的信息',
      item2: '要求更正不准确的信息',
      item3: '要求删除您的个人信息',
      item4: '限制我们处理您的信息',
    },
    cookies: {
      title: 'Cookie政策',
      content1: '我们使用Cookie和类似技术来改善您的用户体验、分析网站流量并个性化内容。',
      content2: '您可以通过浏览器设置控制Cookie的使用，但这可能影响某些功能的正常使用。',
    },
    thirdParty: {
      title: '第三方服务',
      content1: '我们的服务可能包含指向第三方网站或服务的链接。我们使用的第三方服务包括：',
      item1: '区块链网络提供商',
      item2: '分析和监控服务',
      item3: '云存储和托管服务',
    },
    changes: {
      title: '政策变更',
      content: '我们可能不时更新本隐私政策。任何变更将在此页面上发布，对于重大变更，我们会提供更显著的通知。',
    },
    contactSection: {
      title: '联系我们',
      content: '如果您对本隐私政策有任何问题或疑虑，请通过以下方式联系我们：',
      email: '电子邮件',
      address: '地址',
    },
  },

  // How It Works Page
  howItWorks: {
    title: '使用指南',
    subtitle: '了解如何使用WhatsReal进行预测交易，赚取收益',
    steps: {
      title: '三步开始交易',
      step1: {
        title: '连接钱包',
        description: '使用MetaMask、WalletConnect等Web3钱包连接到WhatsReal平台'
      },
      step2: {
        title: '浏览市场',
        description: '探索各种预测市场，包括加密货币、股票、体育等领域'
      },
      step3: {
        title: '参与预测',
        description: '根据您的判断进行预测交易，等待市场结算后获得收益'
      }
    },
    features: {
      title: '平台特色',
      ai: {
        title: 'AI智能分析',
        description: '使用先进的AI算法分析市场趋势，提供智能价格发现'
      },
      web3: {
        title: 'Web3技术',
        description: '基于区块链的去中心化架构，确保透明性和安全性'
      },
      trading: {
        title: '专业交易',
        description: '采用LMSR机制，提供高效流动性和公平价格'
      },
      rewards: {
        title: '丰厚奖励',
        description: '准确预测可获得可观收益，错误预测风险可控'
      }
    },
    markets: {
      title: '市场类型',
      crypto: '预测比特币、以太坊等主流加密货币价格走势',
      stock: '预测知名公司股票价格和市场表现',
      sports: '预测体育赛事结果和相关数据'
    },
    faq: {
      title: '常见问题',
      q1: {
        question: '如何开始使用WhatsReal？',
        answer: '首先需要连接一个Web3钱包（如MetaMask），然后浏览可用的预测市场，选择您感兴趣的市场进行交易。'
      },
      q2: {
        question: '预测交易有什么风险？',
        answer: '预测交易涉及市场风险，您可能会损失投入的资金。建议只投入您能承受损失的金额，并做好风险管理。'
      },
      q3: {
        question: '如何提取收益？',
        answer: '当预测市场结算后，如果您的预测正确，收益会自动添加到您的账户余额中，您可以随时提取。'
      }
    },
    cta: {
      title: '准备开始了吗？',
      subtitle: '加入WhatsReal，开启您的预测交易之旅',
      connect: '连接钱包',
      explore: '浏览市场'
    }
  },

  // Activity Ticker
  ticker: {
    label: '实时动态',
    activities: {
      trade: '{user} 对 "{market}" 进行 {side} 投票 {amount}',
      market_created: '{user} 创建了市场 "{market}"',
      market_resolved: '市场 "{market}" 已结算',
      comment: '{user} 在 "{market}" 添加了评论'
    }
  },

  // Time format
  time: {
    justNow: '刚刚',
    minutesAgo: '{minutes}分钟前',
    hoursAgo: '{hours}小时前'
  },
}