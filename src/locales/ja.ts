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

  // 导航
  nav: {
    home: 'ホーム',
    markets: '市場',
    create: '市場を作成',
    profile: 'プロフィール',
    connect: 'ウォレット接続',
    disconnect: '切断',
    searchPlaceholder: '市場を検索...',
  },

  // ホームページ
  home: {
    title: '未来を予測し、今勝利せよ',
    subtitle: 'WhatsRealはAI管理のWeb3予測市場プラットフォームです。関心のあるイベントに賭けて、市場に真実を教えてもらいましょう。',
    stats: {
      totalMarkets: '総市場数',
      activeTraders: 'アクティブトレーダー',
      totalVolume: '総取引量',
    },
  },

  // 市場
  markets: {
    details: {
      volume: '取引量',
      price: '価格',
      resolved: '決済済み',
      yes: 'はい',
      no: 'いいえ',
          settleMarket: '市場決済',
      settleYes: 'はいで決済',
      settleNo: 'いいえで決済',
      marketInfo: '市場情報',
      notFound: '市場が見つかりません',
      confirmSettle: '市場を「{resolution}」として決済しますか？この操作は元に戻せません。',
      probability: '確率',
      currentProbability: '現在の確率',
      priceChart: '価格チャート',
      recentVotes: '最近の投票',
      votingArea: '投票エリア',
      noVotes: '投票記録がありません',
      comments: 'コメント',
      noComments: 'まだコメントがありません',
      addComment: 'コメントを追加',
      commentPlaceholder: 'ご意見をお聞かせください...',
      pleaseConnect: 'まずウォレットを接続してください',
      endDate: '終了日',
    },
    categories: {
      all: 'すべて',
      crypto: '仮想通貨市場',
      stock: '株式市場',
      commodity: '商品市場',
      forex: '外国為替市場',
      sports: 'スポーツ',
      ai: 'AI科学技術',
    },
  },

  // 市場作成
  createMarket: {
    title: '予測市場を作成',
    form: {
      title: '市場タイトル',
      titleEn: '市場タイトル (英語、オプション)',
      category: 'カテゴリ',
      description: '説明',
      descriptionEn: '説明 (英語、オプション)',
      endTime: '終了時間',
      submit: '市場を作成',
          initialLiquidity: '初期流動性 (ポイント)',
      liquidityPlaceholder: '残高から差し引き、初期流動性として提供',
      initialPrice: '初期価格',
      liquidityHelp: 'オプション。初期流動性を提供すると取引がスムーズになります。0に設定すると提供しません。',
    },
  },

  // プロフィール
  profile: {
    title: 'プロフィール',
    menu: {
      overview: '概要',
      positions: 'ポジション',
      history: '履歴',
      settings: '設定',
    },
    overview: {
      stats: {
        positions: 'ポジション数',
        trades: '取引数',
        totalAssets: '総資産',
      },
      recentActivity: '最近の活動',
      noActivity: '活動履歴がありません',
    },
    positions: {
      title: 'ポジション',
      empty: '現在ポジションはありません',
      market: '市場',
      side: 'サイド',
      shares: '株数',
      value: '価値',
    },
    history: {
      title: '取引履歴', 
      empty: '取引履歴がありません',
      type: 'タイプ',
      market: '市場',
      amount: '金額',
      time: '時間',
    },
    settings: {
      title: '設定',
      language: '言語',
      theme: 'テーマ',
      notifications: '通知',
      account: 'アカウント管理',
      disconnect: 'ウォレットを切断',
    },
  },

  // 接続
  auth: {
    connect: {
      title: 'ウォレットを接続',
      subtitle: '開始するためにウォレットを接続してください',
    },
  },

  // 検索
  search: {
    results: '検索結果',
    query: '検索クエリ',
    found: '件の結果が見つかりました',
    clear: '検索をクリア',
  },

  // Footer
  footer: {
    tagline: 'AI管理のWeb3予測市場プラットフォーム',
    platform: {
      title: 'プラットフォーム',
    },
    company: {
      title: '会社',
      about: '私たちについて',
      terms: '利用規約',
      privacy: 'プライバシーポリシー',
    },
    contact: {
      title: 'お問い合わせ',
      email: 'メールでお問い合わせ',
    },
    copyright: 'All rights reserved',
  },

  // About ページ
  about: {
    title: 'WhatsRealについて',
    mission: {
      title: '私たちの使命',
      content: 'WhatsRealは、AI駆動のWeb3予測市場プラットフォームを通じて、誰もが未来のイベント予測に参加し、集合知によって真実を発見し、より透明で効率的な情報発見メカニズムを構築することを目指しています。',
    },
    whatWeDo: {
      title: '私たちがしていること',
      content1: 'WhatsRealは、人工知能、ブロックチェーン技術、自動マーケットメーカー（AMM）メカニズムを組み合わせた革新的な予測市場プラットフォームで、ユーザーに公平で透明で効率的な予測取引体験を提供します。',
      content2: 'ユーザーは、仮想通貨価格動向、株式市場のパフォーマンス、スポーツイベントの結果、技術開発動向など、さまざまな分野の将来のイベントについて、プラットフォーム上で予測取引を行うことができます。',
    },
    technology: {
      title: '私たちの技術',
      ai: 'AIアルゴリズム',
      aiDesc: '高度な機械学習モデルで市場動向を分析し、インテリジェントな価格発見をサポート',
      web3: 'Web3インフラ',
      web3Desc: 'ブロックチェーン技術に基づく分散型アーキテクチャで、透明性とセキュリティを確保',
      amm: 'LMSR メカニズム',
      ammDesc: '対数マーケットスコアリングルールで効率的な流動性と公正な価格設定を実現',
      data: 'リアルタイムデータ',
      dataDesc: '複数のデータソースからリアルタイムで情報を統合し、正確な市場情報を提供',
    },
    vision: {
      title: '私たちのビジョン',
      content: '私たちは、WhatsRealが世界をリードする分散型予測市場プラットフォームになり、より多くの人々がデジタル経済に参加し、集合知の力で未来を形作ることができるオープンで包括的な予測エコシステムを構築することを目指しています。',
    },
    team: {
      title: 'チーム紹介',
      content: 'WhatsRealチームは、ブロックチェーン、人工知能、金融、プロダクトデザインなどの分野の専門家で構成されています。私たちは、ユーザーに最高品質の製品とサービスを提供することに専念しています。',
    },
    contactSection: {
      title: 'お問い合わせ',
      content: 'WhatsRealについてご質問やご提案がございましたら、お気軽にお問い合わせください：',
      email: 'メールを送信',
    },
  },

  // Terms ページ  
  terms: {
    title: '利用規約',
    // ... (簡略化のため一部のみ)
    contactSection: {
      title: 'お問い合わせ',
      content: 'この利用規約についてご質問がございましたら、お問い合わせください：',
    },
  },

  // Privacy ページ
  privacy: {
    title: 'プライバシーポリシー', 
    // ... (簡略化のため一部のみ)
    contactSection: {
      title: 'お問い合わせ',
      content: 'このプライバシーポリシーについてご質問やご懸念がございましたら、以下からお問い合わせください：',
      email: 'メール',
      address: '住所',
    },
  },
}