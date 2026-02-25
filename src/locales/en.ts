export default {
  // Languages
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

  // Common
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    confirm: 'Confirm',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    search: 'Search',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    close: 'Close',
    submit: 'Submit',
    time: {
      minutesAgo: ' mins ago',
      hoursAgo: ' hrs ago',
      daysAgo: ' days ago'
    }
  },

  // Navigation
  nav: {
    home: 'Home',
    markets: 'Markets',
    create: 'Create Market',
    profile: 'Profile',
    connect: 'Connect Wallet',
    disconnect: 'Disconnect',
    searchPlaceholder: 'Search markets...',
  },

  // Homepage
  home: {
    title: 'Predict the Future, Win Today',
    subtitle: 'WhatsReal is the AI managed web3 prediction market platform. Bet on events you care about and let the market tell you the truth.',
    stats: {
      totalVolume: 'Total Volume',
      activeMarkets: 'Active Markets',
      ammPricing: 'AMM Pricing',
    },
    noMarkets: 'No market data available',
  },

  // Markets
  markets: {
    categories: {
      all: 'All',
      crypto: 'Crypto Markets',
      stock: 'Stock Markets',
      commodity: 'Commodity Markets',
      forex: 'Forex Markets',
      sports: 'Sports',
      ai: 'AI & Tech',
      cryptocurrency: 'Cryptocurrency',
      business: 'Business',
      finance: 'Finance',
      politics: 'Politics',
      entertainment: 'Entertainment',
    },
    details: {
      volume: 'Volume',
      endDate: 'Ends',
      resolved: 'Resolved',
      yes: 'Yes',
      no: 'No',
      probability: 'Probability',
      currentProbability: 'Current Probability',
      priceChart: 'Price Chart',
      recentVotes: 'Recent Votes',
      votingArea: 'Voting Area',
      noVotes: 'No voting records',
      comments: 'Comments',
      noComments: 'No comments yet',
      addComment: 'Add Comment',
      commentPlaceholder: 'Share your thoughts...',
      pleaseConnect: 'Please connect wallet first',
    },
    status: {
      active: 'Active',
      resolved: 'Resolved',
      cancelled: 'Cancelled'
    }
  },

  // Create Market
  create: {
    title: 'Create Prediction Market',
    subtitle: 'Ask a verifiable yes/no question and let the market answer it',
    form: {
      title: 'Market Title',
      titleChinese: 'Market Title (Chinese)',
      titleEn: 'Market Title (English, optional)',
      titlePlaceholder: 'e.g: Will Bitcoin exceed $200,000 by the end of 2026?',
      titleEnPlaceholder: 'e.g: Will Bitcoin exceed $200,000 by the end of 2026?',
      description: 'Detailed Description',
      descriptionChinese: 'Detailed Description (Chinese)',
      descriptionEn: 'Detailed Description (English, optional)',
      descriptionPlaceholder: 'Clearly describe the conditions and data sources for verification',
      descriptionEnPlaceholder: 'Clearly describe the conditions and data sources for verification',
      category: 'Category',
      endDate: 'End Time',
      liquidity: 'Initial Liquidity',
      liquidityHelp: 'Creating a market requires providing initial liquidity',
      pleaseConnect: 'Please connect wallet first',
    },
    buttons: {
      create: 'Create Market',
      preview: 'Preview',
    },
    errors: {
      titleRequired: 'Please enter market title',
      descriptionRequired: 'Please enter detailed description',
      categoryRequired: 'Please select category',
      endTimeRequired: 'Please select end time',
      endTimeFuture: 'End time must be in the future',
      createFailed: 'Creation failed, please try again',
    },
    success: {
      created: 'Market created successfully!',
    }
  },

  // Profile
  profile: {
    title: 'Profile',
    menu: {
      overview: 'Overview'
    },
    tabs: {
      positions: 'Current Positions',
      history: 'Trade History',
      settings: 'Settings',
    },
    overview: {
      balance: 'Account Balance',
      totalValue: 'Total Assets',
      activePositions: 'Active Positions',
      totalTrades: 'Total Trades',
      recentActivity: 'Recent Activity',
      noActivity: 'No trading activity',
      viewAll: 'View All'
    },
    positions: {
      empty: 'No positions',
      startTrading: 'Start Trading'
    },
    history: {
      empty: 'No trade history',
      startTrading: 'Start Trading'
    },
    settings: {
      language: 'Language Settings',
      languageDesc: 'Select your preferred interface language',
      theme: 'Theme Settings',
      themeDesc: 'Choose light or dark theme',
      notifications: 'Notifications',
      notificationsDesc: 'Receive trading and market change notifications',
      account: 'Account Management',
      accountDesc: 'Manage your account settings',
      disconnect: 'Disconnect',
      confirmDisconnect: 'Are you sure you want to disconnect your wallet?'
    },
    role: {
      admin: 'Admin',
      adminAccess: 'Administrator Access',
      adminDescription: 'You have special permissions to create markets and manage the platform',
    },
  },

  // Trading
  trade: {
    buy: 'Buy',
    sell: 'Sell',
    amount: 'Amount',
    shares: ' shares',
    price: 'Avg Price',
    current: 'Current',
    total: 'Total',
    slippage: 'Slippage',
    fee: 'Fee',
    estimate: 'Current',
    confirm: 'Confirm Trade',
    success: 'Trade Successful',
    error: 'Trade Failed',
  },

  // Wallet
  wallet: {
    connect: 'Connect Wallet',
    loginDesc: 'Login to WhatsReal using your Web3 wallet',
    supportedWallets: 'Supports MetaMask, WalletConnect, Coinbase Wallet and other mainstream wallets',
    networkNotice: 'By connecting your wallet, you agree to use the BNB Smart Chain network',
    connecting: 'Connecting...',
    connected: 'Connected',
    disconnect: 'Disconnect',
    address: 'Wallet Address',
    balance: 'Balance',
    unsupported: 'Unsupported Network',
    switchNetwork: 'Switch Network',
  },

  // Error Messages
  errors: {
    networkError: 'Network Error',
    invalidInput: 'Invalid Input',
    insufficientBalance: 'Insufficient Balance',
    transactionFailed: 'Transaction Failed',
    userNotFound: 'User Not Found',
    marketNotFound: 'Market Not Found',
    marketClosed: 'Market Closed',
  },

  // Search
  search: {
    results: 'Search Results',
    query: 'Search Query',
    found: 'results found',
    clear: 'Clear Search',
  },

  // Footer
  footer: {
    tagline: 'The AI managed web3 prediction market platform',
    platform: {
      title: 'Platform',
      howItWorks: 'How It Works',
      leaderboard: 'Leaderboard',
    },
    company: {
      title: 'Company',
      about: 'About Us',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      whitepaper: 'Whitepaper',
    },
    contact: {
      title: 'Contact',
      email: 'Email Us',
    },
    copyright: 'All rights reserved',
  },

  // About Page
  about: {
    title: 'About WhatsReal',
    mission: {
      title: 'Our Mission',
      content: 'WhatsReal is dedicated to creating an AI-driven Web3 prediction market platform that enables everyone to participate in forecasting future events, discover truth through collective intelligence, and create more transparent and efficient information discovery mechanisms.',
    },
    whatWeDo: {
      title: 'What We Do',
      content1: 'WhatsReal is an innovative prediction market platform that combines artificial intelligence, blockchain technology, and automated market maker (AMM) mechanisms to provide users with fair, transparent, and efficient prediction trading experiences.',
      content2: 'Users can engage in prediction trading on various future events, including cryptocurrency price movements, stock market performance, sports results, technology development trends, and more across multiple domains.',
    },
    technology: {
      title: 'Our Technology',
      content1: 'WhatsReal utilizes cutting-edge technology stack to ensure platform security, reliability, and user experience:',
      ai: {
        title: 'AI Algorithms',
        desc: 'Machine learning algorithms optimize market pricing and risk management',
      },
      web3: {
        title: 'Web3 Infrastructure',
        desc: 'Blockchain-based decentralized architecture ensures transparency and security',
      },
      lmsr: {
        title: 'LMSR Market Making',
        desc: 'Logarithmic Market Scoring Rule provides liquidity and fair pricing',
      },
      realtime: {
        title: 'Real-time Data',
        desc: 'Real-time market data updates and trade execution system',
      },
    },
    vision: {
      title: 'Our Vision',
      content1: 'We believe prediction markets can become powerful tools for information discovery and risk management. By aggregating the wisdom and insights of global users, WhatsReal will help people better understand and predict the future.',
      content2: 'Our goal is to build an open, inclusive, and innovative prediction ecosystem where every participant can benefit while driving the development of the entire industry.',
    },
    team: {
      title: 'Our Team',
      content: 'The WhatsReal team consists of experts from blockchain, artificial intelligence, finance, and product design fields. We are committed to providing users with the highest quality products and services.',
    },
    contactSection: {
      title: 'Contact Us',
      content: 'If you have any questions or suggestions about WhatsReal, please feel free to contact us:',
      email: 'Send Email',
    },
  },

  // Terms Page
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: February 24, 2026',
    introduction: {
      title: 'Introduction',
      content1: 'Welcome to WhatsReal prediction market platform ("Platform", "Service", or "We"). These Terms of Service ("Terms") govern your access to and use of WhatsReal website and services.',
      content2: 'By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not use our services.',
    },
    acceptance: {
      title: 'Acceptance of Terms',
      content: 'By using WhatsReal services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.',
    },
    platform: {
      title: 'Platform Description',
      content1: 'WhatsReal is an AI-managed Web3 prediction market platform that allows users to engage in prediction trading on future events. The platform uses LMSR (Logarithmic Market Scoring Rule) as an automated market maker mechanism.',
      content2: 'All transactions are based on blockchain technology to ensure transparency and decentralization. Users need to connect a Web3 wallet to participate in trading.',
    },
    responsibilities: {
      title: 'User Responsibilities',
      item1: 'You must be at least 18 years old or of legal age in your jurisdiction',
      item2: 'You are responsible for protecting your wallet private keys and account security',
      item3: 'You commit to providing accurate and complete information',
      item4: 'You agree to comply with all applicable laws and regulations',
      item5: 'You understand that prediction trading involves risks and may result in losses',
    },
    prohibited: {
      title: 'Prohibited Activities',
      item1: 'Manipulating market prices or engaging in unfair trading',
      item2: 'Using automated tools or bots for trading',
      item3: 'Spreading false or misleading information',
      item4: 'Infringing on others\' intellectual property or privacy',
      item5: 'Engaging in any illegal or unauthorized activities',
    },
    risks: {
      title: 'Risk Disclosure',
      content1: 'Participating in prediction market trading involves significant risks, including but not limited to:',
      item1: 'Market volatility may result in partial or total loss of funds',
      item2: 'Blockchain technology and smart contracts have technical risks',
      item3: 'Insufficient market liquidity may affect trade execution',
      item4: 'Regulatory changes may impact platform operations',
    },
    ip: {
      title: 'Intellectual Property',
      content1: 'WhatsReal platform and all its content, features, and functionality are the exclusive property of WhatsReal and its licensors.',
      content2: 'You may not copy, modify, distribute, or otherwise use platform content without our explicit written permission.',
    },
    disclaimers: {
      title: 'Disclaimers',
      content1: 'WhatsReal platform is provided "as is" without any express or implied warranties. We do not guarantee the accuracy, reliability, or availability of the service.',
      content2: 'We are not liable for any losses or damages arising from the use of the platform, including but not limited to direct, indirect, incidental, or consequential damages.',
    },
    liability: {
      title: 'Limitation of Liability',
      content: 'To the maximum extent permitted by law, WhatsReal\'s total liability for any losses or damages shall not exceed the amount you paid to us in the 12 months preceding the event giving rise to the claim.',
    },
    law: {
      title: 'Governing Law',
      content: 'These Terms are governed by and construed in accordance with the laws of Singapore. Any disputes shall be resolved through arbitration proceedings in Singapore.',
    },
    changes: {
      title: 'Changes to Terms',
      content: 'We reserve the right to modify these Terms at any time. Changes will take effect immediately upon posting. Continued use of the service constitutes acceptance of the modified terms.',
    },
    contactSection: {
      title: 'Contact Us',
      content: 'If you have any questions about these Terms of Service, please contact us:',
    },
  },

  // Privacy Page
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: February 24, 2026',
    introduction: {
      title: 'Introduction',
      content1: 'WhatsReal ("we", "our", or "platform") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our services.',
      content2: 'By using WhatsReal services, you agree to the collection and use of information in accordance with this Privacy Policy.',
    },
    collect: {
      title: 'Information We Collect',
      intro: 'We collect the following types of information:',
      wallet: {
        title: 'Wallet Information',
        item1: 'Your Web3 wallet address',
        item2: 'Transaction history and balance information',
        item3: 'Smart contract interaction records',
      },
      usage: {
        title: 'Usage Data',
        item1: 'How you use our services',
        item2: 'Access times, frequency, and duration',
        item3: 'Device and browser information',
        item4: 'IP address and location information (if permitted)',
      },
      technical: {
        title: 'Technical Data',
        item1: 'Cookies and similar tracking technologies',
        item2: 'Log files and error reports',
        item3: 'Performance and analytics data',
      },
    },
    use: {
      title: 'How We Use Information',
      item1: 'Provide and maintain our services',
      item2: 'Process transactions and manage your account',
      item3: 'Improve our products and services',
      item4: 'Provide customer support',
      item5: 'Ensure platform security and prevent fraud',
      item6: 'Comply with legal requirements',
    },
    sharing: {
      title: 'Information Sharing',
      intro: 'We do not sell, trade, or rent your personal information. We may share information in the following circumstances:',
      item1: 'With your explicit consent',
      item2: 'To comply with legal obligations or court orders',
      item3: 'To protect our rights, property, or safety',
      item4: 'With trusted service providers (subject to confidentiality agreements)',
    },
    blockchain: {
      title: 'Blockchain Transparency',
      content1: 'Please note that blockchain transactions are inherently public. Your wallet address and transaction activities will be permanently recorded on the blockchain and viewable by anyone.',
      content2: 'We cannot control or delete information already recorded on the blockchain. Please consider this before participating in transactions.',
    },
    security: {
      title: 'Data Security',
      content1: 'We implement various security measures to protect your information:',
      item1: 'Encrypt transmission and storage of sensitive data',
      item2: 'Regular security audits and vulnerability assessments',
      item3: 'Limit employee access to personal information',
      item4: 'Use secure third-party service providers',
    },
    retention: {
      title: 'Data Retention',
      content1: 'We only retain your information for as long as necessary to fulfill the purposes outlined in this policy.',
      content2: 'You may request deletion of your personal information at any time, but note that blockchain records cannot be deleted.',
    },
    rights: {
      title: 'Your Rights',
      intro: 'Under applicable law, you may have the following rights:',
      item1: 'Access information we hold about you',
      item2: 'Request correction of inaccurate information',
      item3: 'Request deletion of your personal information',
      item4: 'Restrict our processing of your information',
    },
    cookies: {
      title: 'Cookie Policy',
      content1: 'We use cookies and similar technologies to improve your user experience, analyze website traffic, and personalize content.',
      content2: 'You can control cookie usage through your browser settings, but this may affect the normal use of certain features.',
    },
    thirdParty: {
      title: 'Third-Party Services',
      content1: 'Our services may contain links to third-party websites or services. Third-party services we use include:',
      item1: 'Blockchain network providers',
      item2: 'Analytics and monitoring services',
      item3: 'Cloud storage and hosting services',
    },
    changes: {
      title: 'Policy Changes',
      content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and for significant changes, we will provide more prominent notice.',
    },
    contactSection: {
      title: 'Contact Us',
      content: 'If you have any questions or concerns about this Privacy Policy, please contact us through:',
      email: 'Email',
      address: 'Address',
    },
  },

  // How It Works Page
  howItWorks: {
    title: 'How It Works',
    subtitle: 'Learn how to use WhatsReal for prediction trading and earn rewards',
    steps: {
      title: 'Get Started in 3 Steps',
      step1: {
        title: 'Connect Wallet',
        description: 'Use MetaMask, WalletConnect or other Web3 wallets to connect to WhatsReal'
      },
      step2: {
        title: 'Browse Markets',
        description: 'Explore various prediction markets including crypto, stocks, sports and more'
      },
      step3: {
        title: 'Start Trading',
        description: 'Make predictions based on your analysis and earn rewards when markets settle'
      }
    },
    features: {
      title: 'Platform Features',
      ai: {
        title: 'AI-Powered Analysis',
        description: 'Advanced AI algorithms analyze market trends for intelligent price discovery'
      },
      web3: {
        title: 'Web3 Technology',
        description: 'Decentralized blockchain architecture ensures transparency and security'
      },
      trading: {
        title: 'Professional Trading',
        description: 'LMSR mechanism provides efficient liquidity and fair pricing'
      },
      rewards: {
        title: 'Attractive Rewards',
        description: 'Accurate predictions earn substantial rewards with controlled downside risk'
      }
    },
    markets: {
      title: 'Market Types',
      crypto: 'Predict Bitcoin, Ethereum and major cryptocurrency price movements',
      stock: 'Predict famous company stock prices and market performance',
      sports: 'Predict sports event outcomes and related statistics'
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: {
        question: 'How do I get started with WhatsReal?',
        answer: 'First connect a Web3 wallet like MetaMask, then browse available prediction markets and choose ones you\'re interested in to start trading.'
      },
      q2: {
        question: 'What are the risks of prediction trading?',
        answer: 'Prediction trading involves market risk and you may lose your invested funds. We recommend only investing amounts you can afford to lose and practicing proper risk management.'
      },
      q3: {
        question: 'How do I withdraw my earnings?',
        answer: 'When prediction markets settle, if your predictions are correct, rewards are automatically added to your account balance and you can withdraw anytime.'
      }
    },
    cta: {
      title: 'Ready to Get Started?',
      subtitle: 'Join WhatsReal and begin your prediction trading journey',
      connect: 'Connect Wallet',
      explore: 'Explore Markets'
    }
  },

  // Activity Ticker
  ticker: {
    label: 'Live Activity',
    activities: {
      trade: '{user} voted {side} on "{market}" with {amount}',
      market_created: '{user} created market "{market}"',
      market_resolved: 'Market "{market}" has been resolved',
      comment: '{user} commented on "{market}"'
    }
  },

  // Time format
  time: {
    justNow: 'Just now',
    minutesAgo: '{minutes}m ago',
    hoursAgo: '{hours}h ago'
  },
}