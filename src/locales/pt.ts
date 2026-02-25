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
    loading: 'Carregando...',
    error: 'Erro',
    success: 'Sucesso',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    save: 'Salvar',
    edit: 'Editar',
    delete: 'Excluir',
    search: 'Pesquisar',
    back: 'Voltar',
    next: 'Próximo',
    previous: 'Anterior',
    close: 'Fechar',
    submit: 'Enviar',
    time: {
      minutesAgo: ' min atrás',
      hoursAgo: ' h atrás',
      daysAgo: ' dias atrás'
    }
  },

  // Navigation
  nav: {
    home: 'Início',
    markets: 'Mercados',
    create: 'Criar Mercado',
    profile: 'Perfil',
    connect: 'Conectar Carteira',
    disconnect: 'Desconectar',
    searchPlaceholder: 'Pesquisar mercados...',
  },

  // Homepage
  home: {
    title: 'Prever o futuro, ganhar agora',
    subtitle: 'WhatsReal é a plataforma de mercado de previsão Web3 gerenciada por IA. Aposte em eventos que lhe interessam e deixe o mercado lhe dizer a verdade.',
    cta: 'Começar Trading',
    stats: {
      totalMarkets: 'Mercados Totais',
      activeTraders: 'Traders Ativos',
      totalVolume: 'Volume Total'
    }
  },

  // Markets
  markets: {
    details: {
      volume: 'Volume',
      price: 'Preço',
      resolved: 'Resolvido',
      yes: 'Sim',
      no: 'Não',
      settleMarket: 'Liquidar mercado',
      settleYes: 'Liquidar como Sim',
      settleNo: 'Liquidar como Não',
      marketInfo: 'Informações do mercado',
      notFound: 'Mercado não encontrado',
      confirmSettle: 'Tem certeza de liquidar o mercado como "{resolution}"? Esta ação não pode ser desfeita.',
      probability: 'Probabilidade',
      currentProbability: 'Probabilidade atual',
      priceChart: 'Gráfico de preços',
      recentVotes: 'Votos recentes',
      votingArea: 'Área de votação',
      noVotes: 'Nenhum registro de voto',
      comments: 'Comentários',
      noComments: 'Ainda sem comentários',
      addComment: 'Adicionar comentário',
      commentPlaceholder: 'Compartilhe seus pensamentos...',
      pleaseConnect: 'Por favor conecte sua carteira primeiro',
      endDate: 'Data de fim',
    },
    categories: {
      all: 'Todos',
      crypto: 'Mercados Crypto',
      stock: 'Mercados de Ações', 
      commodity: 'Mercados de Commodities',
      forex: 'Mercados Forex',
      sports: 'Esportes',
      ai: 'Tecnologia IA'
    }
  },

  // Create Market
  createMarket: {
    title: 'Criar Mercado de Previsão',
    form: {
      title: 'Título do Mercado',
      titleEn: 'Título do Mercado (Inglês, opcional)',
      category: 'Categoria',
      description: 'Descrição',
      descriptionEn: 'Descrição (Inglês, opcional)',
      endTime: 'Hora de Fim',
      submit: 'Criar Mercado',
      initialLiquidity: 'Liquidez inicial (Pontos)',
      liquidityPlaceholder: 'Deduzido do saldo como liquidez inicial',
      initialPrice: 'Preço inicial',
      liquidityHelp: 'Opcional. Fornecer liquidez inicial torna o comércio mais suave. Definir como 0 para não fornecer.',
    }
  },

  // Profile
  profile: {
    title: 'Perfil',
    balance: 'Saldo',
    admin: 'Administrador',
    menu: {
      overview: 'Visão Geral',
      positions: 'Posições',
      history: 'Histórico',
      settings: 'Configurações'
    },
    overview: {
      stats: {
        positions: 'Número de Posições',
        trades: 'Número de Negociações',
        totalAssets: 'Ativos Totais'
      },
      recentActivity: 'Atividade Recente',
      noActivity: 'Nenhuma atividade',
      adminAlert: 'Você tem privilégios de administrador nesta plataforma.'
    },
    positions: {
      title: 'Posições',
      empty: 'Nenhuma posição atual',
      market: 'Mercado',
      side: 'Lado',
      shares: 'Ações', 
      value: 'Valor',
      pnl: 'P&L'
    },
    history: {
      title: 'Histórico de Negociações',
      empty: 'Nenhum histórico de negociações',
      type: 'Tipo',
      market: 'Mercado',
      amount: 'Quantidade',
      time: 'Hora'
    },
    settings: {
      title: 'Configurações',
      language: 'Idioma',
      theme: 'Tema',
      notifications: 'Notificações',
      account: 'Gestão da Conta',
      disconnect: 'Desconectar Carteira'
    }
  },

  // Auth
  auth: {
    connect: {
      title: 'Conectar Carteira',
      subtitle: 'Conecte sua carteira para começar'
    }
  },

  // Search
  search: {
    results: 'Resultados da pesquisa',
    query: 'Consulta de pesquisa',
    found: 'resultados encontrados',
    clear: 'Limpar pesquisa',
    placeholder: 'Pesquisar...',
    cancel: 'Cancelar'
  },

  // Footer
  footer: {
    tagline: 'A plataforma de mercado de previsão Web3 gerenciada por IA',
    platform: {
      title: 'Plataforma',
      howItWorks: 'Como Funciona',
      leaderboard: 'Classificação',
    },
    company: {
      title: 'Empresa',
      about: 'Sobre Nós',
      terms: 'Termos de Serviço',
      privacy: 'Política de Privacidade',
      whitepaper: 'Livro Branco',
    },
    contact: {
      title: 'Contato',
      email: 'Enviar Email',
    },
    copyright: 'Todos os direitos reservados',
  },

  // About Page
  about: {
    title: 'Sobre o WhatsReal',
    mission: {
      title: 'Nossa Missão',
      content: 'O WhatsReal se dedica a criar uma plataforma de mercado de previsão Web3 alimentada por IA que permite a todos participar na previsão de eventos futuros, descobrir a verdade através da inteligência coletiva e criar mecanismos de descoberta de informação mais transparentes e eficientes.',
    },
    whatWeDo: {
      title: 'O Que Fazemos',
      content1: 'O WhatsReal é uma plataforma de mercado de previsão inovadora que combina inteligência artificial, tecnologia blockchain e mecanismos de market maker automatizado (AMM) para oferecer aos usuários experiências de trading de previsão justas, transparentes e eficientes.',
      content2: 'Os usuários podem participar do trading de previsão sobre vários eventos futuros, incluindo movimentos de preços de criptomoedas, desempenho do mercado de ações, resultados esportivos, tendências de desenvolvimento tecnológico e mais em múltiplos domínios.',
    },
    technology: {
      title: 'Nossa Tecnologia',
      content1: 'O WhatsReal utiliza um conjunto de tecnologias de ponta para garantir segurança, confiabilidade e experiência do usuário da plataforma:',
      ai: {
        title: 'Algoritmos IA',
        desc: 'Algoritmos de aprendizado de máquina otimizam preços de mercado e gestão de riscos',
      },
      web3: {
        title: 'Infraestrutura Web3',
        desc: 'Arquitetura descentralizada baseada em blockchain garante transparência e segurança',
      },
      lmsr: {
        title: 'Market Making LMSR',
        desc: 'A Regra de Pontuação de Mercado Logarítmica fornece liquidez e preços justos',
      },
      realtime: {
        title: 'Dados em Tempo Real',
        desc: 'Atualizações de dados de mercado em tempo real e sistema de execução de negociações',
      },
    },
    vision: {
      title: 'Nossa Visão',
      content1: 'Acreditamos que os mercados de previsão podem se tornar ferramentas poderosas para descoberta de informações e gestão de riscos. Ao agregar a sabedoria e insights de usuários globais, o WhatsReal ajudará as pessoas a entender e prever melhor o futuro.',
      content2: 'Nosso objetivo é construir um ecossistema de previsão aberto, inclusivo e inovador onde cada participante pode se beneficiar enquanto impulsiona o desenvolvimento de toda a indústria.',
    },
    team: {
      title: 'Nossa Equipe',
      content: 'A equipe do WhatsReal é composta por especialistas dos campos de blockchain, inteligência artificial, finanças e design de produtos. Estamos comprometidos em fornecer aos usuários produtos e serviços da mais alta qualidade.',
    },
    contactSection: {
      title: 'Entre em Contato',
      content: 'Se você tem alguma pergunta ou sugestão sobre o WhatsReal, não hesite em nos contatar:',
      email: 'Enviar Email',
    },
  },

  // Terms Page
  terms: {
    title: 'Termos de Serviço',
    lastUpdated: 'Última atualização: 24 de fevereiro de 2026',
    introduction: {
      title: 'Introdução',
      content1: 'Bem-vindo à plataforma de mercado de previsão WhatsReal ("Plataforma", "Serviço" ou "Nós"). Estes Termos de Serviço ("Termos") regem seu acesso e uso do site e serviços do WhatsReal.',
      content2: 'Ao acessar ou usar nossos serviços, você concorda em estar vinculado a estes Termos. Se você discorda de qualquer parte destes termos, então não pode usar nossos serviços.',
    },
    acceptance: {
      title: 'Aceitação dos Termos',
      content: 'Ao usar os serviços do WhatsReal, você reconhece que leu, entendeu e concorda em estar vinculado a estes Termos de Serviço e nossa Política de Privacidade.',
    },
    platform: {
      title: 'Descrição da Plataforma',
      content1: 'O WhatsReal é uma plataforma de mercado de previsão Web3 gerenciada por IA que permite aos usuários participar do trading de previsão sobre eventos futuros. A plataforma utiliza LMSR (Regra de Pontuação de Mercado Logarítmica) como mecanismo de market maker automatizado.',
      content2: 'Todas as transações são baseadas em tecnologia blockchain para garantir transparência e descentralização. Os usuários precisam conectar uma carteira Web3 para participar do trading.',
    },
    responsibilities: {
      title: 'Responsabilidades do Usuário',
      item1: 'Você deve ter pelo menos 18 anos de idade ou a idade legal em sua jurisdição',
      item2: 'Você é responsável por proteger as chaves privadas de sua carteira e a segurança de sua conta',
      item3: 'Você se compromete a fornecer informações precisas e completas',
      item4: 'Você concorda em cumprir todas as leis e regulamentações aplicáveis',
      item5: 'Você entende que o trading de previsão envolve riscos e pode resultar em perdas',
    },
    prohibited: {
      title: 'Atividades Proibidas',
      item1: 'Manipular preços de mercado ou participar de trading injusto',
      item2: 'Usar ferramentas automatizadas ou bots para trading',
      item3: 'Espalhar informações falsas ou enganosas',
      item4: 'Infringir propriedade intelectual ou privacidade de outros',
      item5: 'Participar de qualquer atividade ilegal ou não autorizada',
    },
    risks: {
      title: 'Divulgação de Riscos',
      content1: 'Participar do trading de mercado de previsão envolve riscos significativos, incluindo mas não limitado a:',
      item1: 'A volatilidade do mercado pode resultar em perda parcial ou total de fundos',
      item2: 'A tecnologia blockchain e smart contracts têm riscos técnicos',
      item3: 'Liquidez insuficiente do mercado pode afetar a execução de negociações',
      item4: 'Mudanças regulatórias podem impactar as operações da plataforma',
    },
    ip: {
      title: 'Propriedade Intelectual',
      content1: 'A plataforma WhatsReal e todo seu conteúdo, recursos e funcionalidade são propriedade exclusiva do WhatsReal e seus licenciadores.',
      content2: 'Você não pode copiar, modificar, distribuir ou usar de outra forma o conteúdo da plataforma sem nossa permissão escrita explícita.',
    },
    disclaimers: {
      title: 'Isenções de Responsabilidade',
      content1: 'A plataforma WhatsReal é fornecida "como está" sem quaisquer garantias expressas ou implícitas. Não garantimos a precisão, confiabilidade ou disponibilidade do serviço.',
      content2: 'Não somos responsáveis por quaisquer perdas ou danos decorrentes do uso da plataforma, incluindo mas não limitado a danos diretos, indiretos, incidentais ou consequenciais.',
    },
    liability: {
      title: 'Limitação de Responsabilidade',
      content: 'Na máxima extensão permitida por lei, a responsabilidade total do WhatsReal por quaisquer perdas ou danos não excederá o valor que você nos pagou nos 12 meses anteriores ao evento que deu origem à reivindicação.',
    },
    law: {
      title: 'Lei Aplicável',
      content: 'Estes Termos são regidos e interpretados de acordo com as leis de Singapura. Quaisquer disputas serão resolvidas através de procedimentos de arbitragem em Singapura.',
    },
    changes: {
      title: 'Alterações aos Termos',
      content: 'Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entram em vigor imediatamente após a publicação. O uso continuado do serviço constitui aceitação dos termos modificados.',
    },
    contactSection: {
      title: 'Entre em Contato',
      content: 'Se você tem alguma pergunta sobre estes Termos de Serviço, por favor nos contate:',
    },
  },

  // Privacy Page
  privacy: {
    title: 'Política de Privacidade',
    lastUpdated: 'Última atualização: 24 de fevereiro de 2026',
    introduction: {
      title: 'Introdução',
      content1: 'O WhatsReal ("nós", "nosso" ou "plataforma") valoriza sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações quando você usa nossos serviços.',
      content2: 'Ao usar os serviços do WhatsReal, você concorda com a coleta e uso de informações de acordo com esta Política de Privacidade.',
    },
    collect: {
      title: 'Informações que Coletamos',
      intro: 'Coletamos os seguintes tipos de informações:',
      wallet: {
        title: 'Informações da Carteira',
        item1: 'Seu endereço de carteira Web3',
        item2: 'Histórico de transações e informações de saldo',
        item3: 'Registros de interação com smart contracts',
      },
      usage: {
        title: 'Dados de Uso',
        item1: 'Como você usa nossos serviços',
        item2: 'Horários de acesso, frequência e duração',
        item3: 'Informações do dispositivo e navegador',
        item4: 'Endereço IP e informações de localização (se permitido)',
      },
      technical: {
        title: 'Dados Técnicos',
        item1: 'Cookies e tecnologias de rastreamento similares',
        item2: 'Arquivos de log e relatórios de erro',
        item3: 'Dados de performance e analíticos',
      },
    },
    use: {
      title: 'Como Usamos as Informações',
      item1: 'Fornecer e manter nossos serviços',
      item2: 'Processar transações e gerenciar sua conta',
      item3: 'Melhorar nossos produtos e serviços',
      item4: 'Fornecer suporte ao cliente',
      item5: 'Garantir a segurança da plataforma e prevenir fraudes',
      item6: 'Cumprir requisitos legais',
    },
    sharing: {
      title: 'Compartilhamento de Informações',
      intro: 'Não vendemos, negociamos ou alugamos suas informações pessoais. Podemos compartilhar informações nas seguintes circunstâncias:',
      item1: 'Com seu consentimento explícito',
      item2: 'Para cumprir obrigações legais ou ordens judiciais',
      item3: 'Para proteger nossos direitos, propriedade ou segurança',
      item4: 'Com provedores de serviços confiáveis (sujeito a acordos de confidencialidade)',
    },
    blockchain: {
      title: 'Transparência Blockchain',
      content1: 'Note que as transações blockchain são inerentemente públicas. Seu endereço de carteira e atividades de transação serão permanentemente registradas na blockchain e visíveis para qualquer um.',
      content2: 'Não podemos controlar ou excluir informações já registradas na blockchain. Por favor considere isso antes de participar de transações.',
    },
    security: {
      title: 'Segurança de Dados',
      content1: 'Implementamos várias medidas de segurança para proteger suas informações:',
      item1: 'Criptografar transmissão e armazenamento de dados sensíveis',
      item2: 'Auditorias de segurança regulares e avaliações de vulnerabilidade',
      item3: 'Limitar acesso de funcionários a informações pessoais',
      item4: 'Usar provedores de serviços de terceiros seguros',
    },
    retention: {
      title: 'Retenção de Dados',
      content1: 'Retemos suas informações apenas pelo tempo necessário para cumprir os propósitos delineados nesta política.',
      content2: 'Você pode solicitar a exclusão de suas informações pessoais a qualquer momento, mas note que registros blockchain não podem ser excluídos.',
    },
    rights: {
      title: 'Seus Direitos',
      intro: 'Sob a lei aplicável, você pode ter os seguintes direitos:',
      item1: 'Acessar informações que temos sobre você',
      item2: 'Solicitar correção de informações imprecisas',
      item3: 'Solicitar exclusão de suas informações pessoais',
      item4: 'Restringir nosso processamento de suas informações',
    },
    cookies: {
      title: 'Política de Cookies',
      content1: 'Usamos cookies e tecnologias similares para melhorar sua experiência de usuário, analisar tráfego do site e personalizar conteúdo.',
      content2: 'Você pode controlar o uso de cookies através das configurações do seu navegador, mas isso pode afetar o uso normal de certas funcionalidades.',
    },
    thirdParty: {
      title: 'Serviços de Terceiros',
      content1: 'Nossos serviços podem conter links para sites ou serviços de terceiros. Serviços de terceiros que usamos incluem:',
      item1: 'Provedores de rede blockchain',
      item2: 'Serviços de analíticos e monitoramento',
      item3: 'Serviços de armazenamento em nuvem e hospedagem',
    },
    changes: {
      title: 'Alterações da Política',
      content: 'Podemos atualizar esta Política de Privacidade de tempos em tempos. Quaisquer alterações serão postadas nesta página, e para alterações significativas, forneceremos aviso mais proeminente.',
    },
    contactSection: {
      title: 'Entre em Contato',
      content: 'Se você tem alguma pergunta ou preocupação sobre esta Política de Privacidade, por favor nos contate através de:',
      email: 'Email',
      address: 'Endereço',
    },
  },

  // How It Works Page
  howItWorks: {
    title: 'Como Funciona',
    subtitle: 'Aprenda como usar o WhatsReal para trading de previsão e ganhar recompensas',
    steps: {
      title: 'Comece em 3 Passos',
      step1: {
        title: 'Conectar Carteira',
        description: 'Use MetaMask, WalletConnect ou outras carteiras Web3 para se conectar ao WhatsReal'
      },
      step2: {
        title: 'Explorar Mercados',
        description: 'Explore vários mercados de previsão incluindo crypto, ações, esportes e mais'
      },
      step3: {
        title: 'Começar Trading',
        description: 'Faça previsões baseadas em sua análise e ganhe recompensas quando os mercados se resolverem'
      }
    },
    features: {
      title: 'Recursos da Plataforma',
      ai: {
        title: 'Análise Alimentada por IA',
        description: 'Algoritmos IA avançados analisam tendências de mercado para descoberta inteligente de preços'
      },
      web3: {
        title: 'Tecnologia Web3',
        description: 'Arquitetura blockchain descentralizada garante transparência e segurança'
      },
      trading: {
        title: 'Trading Profissional',
        description: 'O mecanismo LMSR fornece liquidez eficiente e preços justos'
      },
      rewards: {
        title: 'Recompensas Atrativas',
        description: 'Previsões precisas ganham recompensas substanciais com risco controlado de perda'
      }
    },
    markets: {
      title: 'Tipos de Mercado',
      crypto: 'Prever Bitcoin, Ethereum e movimentos de preço das principais criptomoedas',
      stock: 'Prever preços de ações de empresas famosas e desempenho do mercado',
      sports: 'Prever resultados de eventos esportivos e estatísticas relacionadas'
    },
    faq: {
      title: 'Perguntas Frequentes',
      q1: {
        question: 'Como começar com o WhatsReal?',
        answer: 'Primeiro conecte uma carteira Web3 como MetaMask, depois explore os mercados de previsão disponíveis e escolha os que lhe interessam para começar o trading.'
      },
      q2: {
        question: 'Quais são os riscos do trading de previsão?',
        answer: 'O trading de previsão envolve risco de mercado e você pode perder seus fundos investidos. Recomendamos investir apenas quantias que você pode se dar ao luxo de perder e praticar gestão adequada de riscos.'
      },
      q3: {
        question: 'Como retirar meus ganhos?',
        answer: 'Quando os mercados de previsão se resolvem, se suas previsões estão corretas, as recompensas são automaticamente adicionadas ao saldo da sua conta e você pode sacar a qualquer momento.'
      }
    },
    cta: {
      title: 'Pronto para Começar?',
      subtitle: 'Junte-se ao WhatsReal e comece sua jornada de trading de previsão',
      connect: 'Conectar Carteira',
      explore: 'Explorar Mercados'
    }
  },

  // Activity Ticker
  ticker: {
    label: 'Atividade ao Vivo',
    activities: {
      trade: '{user} votou {side} em "{market}" com {amount}',
      market_created: '{user} criou o mercado "{market}"',
      market_resolved: 'O mercado "{market}" foi resolvido',
      comment: '{user} comentou em "{market}"'
    }
  },

  // Time format
  time: {
    justNow: 'Agora mesmo',
    minutesAgo: '{minutes}m atrás',
    hoursAgo: '{hours}h atrás'
  },
}