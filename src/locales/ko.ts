export default {
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

  nav: {
    home: '홈',
    markets: '마켓',
    create: '마켓 생성',
    profile: '프로필',
    connect: '지갑 연결',
    disconnect: '연결 해제',
    searchPlaceholder: '마켓 검색...',
  },

  home: {
    title: '미래를 예측하고, 지금 승리하세요',
    subtitle: 'WhatsReal은 AI 관리 Web3 예측 마켓 플랫폼입니다. 관심 있는 이벤트에 베팅하고 마켓이 진실을 알려주게 하세요.',
    stats: {
      totalMarkets: '총 마켓 수',
      activeTraders: '활성 트레이더',
      totalVolume: '총 거래량',
    },
  },

  markets: {
    details: {
      volume: '거래량',
      price: '가격',
      resolved: '결산됨',
      yes: '네',
      no: '아니오',
          settleMarket: '시장 정산',
      settleYes: '예로 정산',
      settleNo: '아니오로 정산',
      marketInfo: '시장 정보',
      notFound: '시장을 찾을 수 없습니다',
      confirmSettle: '시장을 "{resolution}"로 정산하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
      probability: '확률',
      currentProbability: '현재 확률',
      priceChart: '가격 차트',
      recentVotes: '최근 투표',
      votingArea: '투표 구역',
      noVotes: '투표 기록이 없습니다',
      comments: '댓글',
      noComments: '아직 댓글이 없습니다',
      addComment: '댓글 추가',
      commentPlaceholder: '의견을 공유해 주세요...',
      pleaseConnect: '먼저 지갑을 연결해 주세요',
      endDate: '종료일',
    },
    categories: {
      all: '전체',
      crypto: '암호화폐 마켓',
      stock: '주식 마켓',
      commodity: '상품 마켓',
      forex: '외환 마켓',
      sports: '스포츠',
      ai: 'AI 과학기술',
    },
  },

  createMarket: {
    title: '예측 마켓 생성',
    form: {
      title: '마켓 제목',
      titleEn: '마켓 제목 (영어, 선택사항)',
      category: '카테고리',
      description: '설명',
      descriptionEn: '설명 (영어, 선택사항)',
      endTime: '종료 시간',
      submit: '마켓 생성',
          initialLiquidity: '초기 유동성 (포인트)',
      liquidityPlaceholder: '잔액에서 차감하여 초기 유동성으로 제공',
      initialPrice: '초기 가격',
      liquidityHelp: '선택사항. 초기 유동성을 제공하면 거래가 더 원활해집니다. 0으로 설정하면 제공하지 않습니다.',
    },
  },

  profile: {
    title: '프로필',
    menu: {
      overview: '개요',
      positions: '포지션',
      history: '이력',
      settings: '설정',
    },
    overview: {
      stats: {
        positions: '포지션 수',
        trades: '거래 수',
        totalAssets: '총 자산',
      },
      recentActivity: '최근 활동',
      noActivity: '활동 이력이 없습니다',
    },
    positions: {
      title: '포지션',
      empty: '현재 포지션이 없습니다',
      market: '마켓',
      side: '사이드',
      shares: '지분',
      value: '가치',
    },
    history: {
      title: '거래 이력',
      empty: '거래 이력이 없습니다',
      type: '타입',
      market: '마켓',
      amount: '금액',
      time: '시간',
    },
    settings: {
      title: '설정',
      language: '언어',
      theme: '테마',
      notifications: '알림',
      account: '계정 관리',
      disconnect: '지갑 연결 해제',
    },
  },

  auth: {
    connect: {
      title: '지갑 연결',
      subtitle: '시작하려면 지갑을 연결하세요',
    },
  },

  search: {
    results: '검색 결과',
    query: '검색 쿼리',
    found: '개 결과',
    clear: '검색 지우기',
  },

  footer: {
    tagline: 'AI 관리 Web3 예측 마켓 플랫폼',
    platform: {
      title: '플랫폼',
    },
    company: {
      title: '회사',
      about: '회사 소개',
      terms: '이용 약관',
      privacy: '개인정보 보호정책',
    },
    contact: {
      title: '연락처',
      email: '이메일 문의',
    },
    copyright: 'All rights reserved',
  },

  about: {
    title: 'WhatsReal 소개',
    mission: {
      title: '우리의 사명',
      content: 'WhatsReal은 AI 기반 Web3 예측 시장 플랫폼을 통해 모든 사람이 미래 이벤트 예측에 참여하고, 집단 지성으로 진실을 발견하며, 더 투명하고 효율적인 정보 발견 메커니즘을 만들기 위해 노력합니다.',
    },
    whatWeDo: {
      title: '우리가 하는 일',
      content1: 'WhatsReal은 인공지능, 블록체인 기술 및 자동화된 시장 조성자(AMM) 메커니즘을 결합한 혁신적인 예측 시장 플랫폼으로 사용자에게 공정하고 투명하며 효율적인 예측 거래 경험을 제공합니다.',
      content2: '사용자는 암호화폐 가격 동향, 주식 시장 성과, 스포츠 이벤트 결과, 기술 개발 동향 등 다양한 분야의 미래 이벤트에 대해 플랫폼에서 예측 거래를 할 수 있습니다.',
    },
    technology: {
      title: '우리의 기술',
      ai: 'AI 알고리즘',
      aiDesc: '고급 기계 학습 모델로 시장 동향 분석 및 지능적 가격 발견 지원',
      web3: 'Web3 인프라',
      web3Desc: '블록체인 기술 기반의 분산형 아키텍처로 투명성과 보안 보장',
      amm: 'LMSR 메커니즘',
      ammDesc: '로그 시장 스코어링 규칙으로 효율적인 유동성과 공정한 가격 책정 구현',
      data: '실시간 데이터',
      dataDesc: '여러 데이터 소스에서 실시간으로 정보를 통합하여 정확한 시장 정보 제공',
    },
    vision: {
      title: '우리의 비전',
      content: '우리는 WhatsReal이 세계를 선도하는 분산형 예측 시장 플랫폼이 되어 더 많은 사람들이 디지털 경제에 참여하고 집단 지성의 힘으로 미래를 만들어갈 수 있는 개방적이고 포용적인 예측 생태계를 구축하는 것을 목표로 합니다.',
    },
    team: {
      title: '팀 소개',
      content: 'WhatsReal 팀은 블록체인, 인공지능, 금융, 제품 디자인 등 다양한 분야의 전문가들로 구성되어 있습니다. 우리는 사용자에게 최고 품질의 제품과 서비스를 제공하는 데 전념하고 있습니다.',
    },
    contactSection: {
      title: '문의하기',
      content: 'WhatsReal에 대해 궁금한 점이나 제안 사항이 있으시면 언제든지 문의해 주세요:',
      email: '이메일 보내기',
    },
  },

  terms: {
    title: '이용 약관',
    contactSection: {
      title: '문의하기',
      content: '이 이용 약관에 대해 질문이 있으시면 문의해 주세요:',
    },
  },

  privacy: {
    title: '개인정보 보호정책',
    contactSection: {
      title: '문의하기',
      content: '이 개인정보 보호정책에 대해 질문이나 우려 사항이 있으시면 다음을 통해 문의해 주세요:',
      email: '이메일',
      address: '주소',
    },
  },
}