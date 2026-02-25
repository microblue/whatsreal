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
    loading: 'Caricamento...',
    error: 'Errore',
    success: 'Successo',
    confirm: 'Conferma',
    cancel: 'Annulla',
    save: 'Salva',
    edit: 'Modifica',
    delete: 'Elimina',
    search: 'Cerca',
    back: 'Indietro',
    next: 'Avanti',
    previous: 'Precedente',
    close: 'Chiudi',
    submit: 'Invia',
    time: {
      minutesAgo: ' min fa',
      hoursAgo: ' ore fa',
      daysAgo: ' giorni fa'
    }
  },

  // Navigation
  nav: {
    home: 'Home',
    markets: 'Mercati',
    create: 'Crea Mercato',
    profile: 'Profilo',
    connect: 'Connetti Wallet',
    disconnect: 'Disconnetti',
    searchPlaceholder: 'Cerca mercati...',
  },

  // Homepage
  home: {
    title: 'Predire il futuro, vincere ora',
    subtitle: 'WhatsReal è la piattaforma di mercato di previsione Web3 gestita da IA. Scommetti su eventi che ti interessano e lascia che il mercato ti dica la verità.',
    cta: 'Inizia Trading',
    stats: {
      totalMarkets: 'Mercati Totali',
      activeTraders: 'Trader Attivi',
      totalVolume: 'Volume Totale'
    }
  },

  // Markets
  markets: {
    details: {
      volume: 'Volume',
      price: 'Prezzo',
      resolved: 'Risolto',
      yes: 'Sì',
      no: 'No'
    },
    categories: {
      all: 'Tutti',
      crypto: 'Mercati Crypto',
      stock: 'Mercati Azionari', 
      commodity: 'Mercati delle Materie Prime',
      forex: 'Mercati Forex',
      sports: 'Sport',
      ai: 'Tecnologia IA'
    }
  },

  // Create Market
  createMarket: {
    title: 'Crea Mercato di Previsione',
    form: {
      title: 'Titolo del Mercato',
      titleEn: 'Titolo del Mercato (Inglese, opzionale)',
      category: 'Categoria',
      description: 'Descrizione',
      descriptionEn: 'Descrizione (Inglese, opzionale)',
      endTime: 'Ora di Fine',
      submit: 'Crea Mercato'
    }
  },

  // Profile
  profile: {
    title: 'Profilo',
    balance: 'Saldo',
    admin: 'Amministratore',
    menu: {
      overview: 'Panoramica',
      positions: 'Posizioni',
      history: 'Cronologia',
      settings: 'Impostazioni'
    },
    overview: {
      stats: {
        positions: 'Numero di Posizioni',
        trades: 'Numero di Scambi',
        totalAssets: 'Patrimonio Totale'
      },
      recentActivity: 'Attività Recente',
      noActivity: 'Nessuna attività',
      adminAlert: 'Hai privilegi di amministratore su questa piattaforma.'
    },
    positions: {
      title: 'Posizioni',
      empty: 'Nessuna posizione attuale',
      market: 'Mercato',
      side: 'Lato',
      shares: 'Azioni', 
      value: 'Valore',
      pnl: 'P&L'
    },
    history: {
      title: 'Cronologia Scambi',
      empty: 'Nessuna cronologia scambi',
      type: 'Tipo',
      market: 'Mercato',
      amount: 'Importo',
      time: 'Ora'
    },
    settings: {
      title: 'Impostazioni',
      language: 'Lingua',
      theme: 'Tema',
      notifications: 'Notifiche',
      account: 'Gestione Account',
      disconnect: 'Disconnetti Wallet'
    }
  },

  // Auth
  auth: {
    connect: {
      title: 'Connetti Wallet',
      subtitle: 'Connetti il tuo wallet per iniziare'
    }
  },

  // Search
  search: {
    results: 'Risultati di ricerca',
    query: 'Query di ricerca',
    found: 'risultati trovati',
    clear: 'Cancella ricerca',
    placeholder: 'Cerca...',
    cancel: 'Annulla'
  },

  // Footer
  footer: {
    tagline: 'La piattaforma di mercato di previsione Web3 gestita da IA',
    platform: {
      title: 'Piattaforma',
      howItWorks: 'Come Funziona',
      leaderboard: 'Classifica',
    },
    company: {
      title: 'Azienda',
      about: 'Chi Siamo',
      terms: 'Termini di Servizio',
      privacy: 'Politica sulla Privacy',
      whitepaper: 'Libro Bianco',
    },
    contact: {
      title: 'Contatti',
      email: 'Invia Email',
    },
    copyright: 'Tutti i diritti riservati',
  },

  // About Page
  about: {
    title: 'Chi è WhatsReal',
    mission: {
      title: 'La Nostra Missione',
      content: 'WhatsReal si dedica a creare una piattaforma di mercato di previsione Web3 alimentata da IA che permette a tutti di partecipare alla previsione di eventi futuri, scoprire la verità attraverso l\'intelligenza collettiva e creare meccanismi di scoperta delle informazioni più trasparenti ed efficienti.',
    },
    whatWeDo: {
      title: 'Cosa Facciamo',
      content1: 'WhatsReal è una piattaforma di mercato di previsione innovativa che combina intelligenza artificiale, tecnologia blockchain e meccanismi di market maker automatizzato (AMM) per offrire agli utenti esperienze di trading di previsione eque, trasparenti ed efficienti.',
      content2: 'Gli utenti possono partecipare al trading di previsione su vari eventi futuri, inclusi movimenti di prezzi di criptovalute, performance del mercato azionario, risultati sportivi, tendenze di sviluppo tecnologico e altro in molteplici domini.',
    },
    technology: {
      title: 'La Nostra Tecnologia',
      content1: 'WhatsReal utilizza uno stack tecnologico all\'avanguardia per garantire sicurezza, affidabilità ed esperienza utente della piattaforma:',
      ai: {
        title: 'Algoritmi IA',
        desc: 'Gli algoritmi di apprendimento automatico ottimizzano i prezzi del mercato e la gestione del rischio',
      },
      web3: {
        title: 'Infrastruttura Web3',
        desc: 'Architettura decentralizzata basata su blockchain garantisce trasparenza e sicurezza',
      },
      lmsr: {
        title: 'Market Making LMSR',
        desc: 'La Regola di Punteggio di Mercato Logaritmica fornisce liquidità e prezzi equi',
      },
      realtime: {
        title: 'Dati in Tempo Reale',
        desc: 'Aggiornamenti dei dati di mercato in tempo reale e sistema di esecuzione degli scambi',
      },
    },
    vision: {
      title: 'La Nostra Visione',
      content1: 'Crediamo che i mercati di previsione possano diventare strumenti potenti per la scoperta di informazioni e la gestione del rischio. Aggregando la saggezza e gli insights di utenti globali, WhatsReal aiuterà le persone a comprendere e prevedere meglio il futuro.',
      content2: 'Il nostro obiettivo è costruire un ecosistema di previsione aperto, inclusivo e innovativo dove ogni partecipante può trarre beneficio mentre guida lo sviluppo dell\'intera industria.',
    },
    team: {
      title: 'Il Nostro Team',
      content: 'Il team di WhatsReal è composto da esperti nei campi di blockchain, intelligenza artificiale, finanza e design del prodotto. Siamo impegnati a fornire agli utenti prodotti e servizi della più alta qualità.',
    },
    contactSection: {
      title: 'Contattaci',
      content: 'Se hai domande o suggerimenti su WhatsReal, non esitare a contattarci:',
      email: 'Invia Email',
    },
  },

  // Terms Page
  terms: {
    title: 'Termini di Servizio',
    lastUpdated: 'Ultimo aggiornamento: 24 febbraio 2026',
    introduction: {
      title: 'Introduzione',
      content1: 'Benvenuto nella piattaforma di mercato di previsione WhatsReal ("Piattaforma", "Servizio" o "Noi"). Questi Termini di Servizio ("Termini") regolano il vostro accesso e uso del sito web e dei servizi di WhatsReal.',
      content2: 'Accedendo o utilizzando i nostri servizi, accettate di essere vincolati da questi Termini. Se non siete d\'accordo con qualsiasi parte di questi termini, allora non potete utilizzare i nostri servizi.',
    },
    acceptance: {
      title: 'Accettazione dei Termini',
      content: 'Utilizzando i servizi di WhatsReal, riconoscete di aver letto, compreso e accettato di essere vincolati da questi Termini di Servizio e dalla nostra Politica sulla Privacy.',
    },
    platform: {
      title: 'Descrizione della Piattaforma',
      content1: 'WhatsReal è una piattaforma di mercato di previsione Web3 gestita da IA che permette agli utenti di partecipare al trading di previsione su eventi futuri. La piattaforma utilizza LMSR (Regola di Punteggio di Mercato Logaritmica) come meccanismo di market maker automatizzato.',
      content2: 'Tutte le transazioni sono basate sulla tecnologia blockchain per garantire trasparenza e decentralizzazione. Gli utenti devono connettere un wallet Web3 per partecipare al trading.',
    },
    responsibilities: {
      title: 'Responsabilità dell\'Utente',
      item1: 'Dovete avere almeno 18 anni o l\'età legale nella vostra giurisdizione',
      item2: 'Siete responsabili di proteggere le chiavi private del vostro wallet e la sicurezza del vostro account',
      item3: 'Vi impegnate a fornire informazioni accurate e complete',
      item4: 'Accettate di rispettare tutte le leggi e regolamentazioni applicabili',
      item5: 'Comprendete che il trading di previsione comporta rischi e può risultare in perdite',
    },
    prohibited: {
      title: 'Attività Proibite',
      item1: 'Manipolare i prezzi di mercato o partecipare a trading scorretto',
      item2: 'Utilizzare strumenti automatizzati o bot per il trading',
      item3: 'Diffondere informazioni false o ingannevoli',
      item4: 'Violare la proprietà intellettuale o la privacy di altri',
      item5: 'Partecipare a qualsiasi attività illegale o non autorizzata',
    },
    risks: {
      title: 'Divulgazione dei Rischi',
      content1: 'Partecipare al trading di mercato di previsione comporta rischi significativi, inclusi ma non limitati a:',
      item1: 'La volatilità del mercato può risultare in perdita parziale o totale dei fondi',
      item2: 'La tecnologia blockchain e gli smart contract hanno rischi tecnici',
      item3: 'La liquidità insufficiente del mercato può influenzare l\'esecuzione degli scambi',
      item4: 'I cambi normativi possono impattare le operazioni della piattaforma',
    },
    ip: {
      title: 'Proprietà Intellettuale',
      content1: 'La piattaforma WhatsReal e tutti i suoi contenuti, caratteristiche e funzionalità sono proprietà esclusiva di WhatsReal e dei suoi licenzianti.',
      content2: 'Non potete copiare, modificare, distribuire o altrimenti utilizzare i contenuti della piattaforma senza il nostro esplicito permesso scritto.',
    },
    disclaimers: {
      title: 'Clausole di Esclusione',
      content1: 'La piattaforma WhatsReal è fornita "così com\'è" senza garanzie espresse o implicite. Non garantiamo l\'accuratezza, affidabilità o disponibilità del servizio.',
      content2: 'Non siamo responsabili per perdite o danni derivanti dall\'uso della piattaforma, inclusi ma non limitati a danni diretti, indiretti, incidentali o consequenziali.',
    },
    liability: {
      title: 'Limitazione di Responsabilità',
      content: 'Nella massima misura permessa dalla legge, la responsabilità totale di WhatsReal per perdite o danni non supererà l\'importo che ci avete pagato nei 12 mesi precedenti l\'evento che ha dato origine al reclamo.',
    },
    law: {
      title: 'Legge Applicabile',
      content: 'Questi Termini sono regolati e interpretati secondo le leggi di Singapore. Qualsiasi disputa sarà risolta attraverso procedimenti di arbitrato a Singapore.',
    },
    changes: {
      title: 'Modifiche ai Termini',
      content: 'Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. Le modifiche entrano in vigore immediatamente dopo la pubblicazione. L\'uso continuato del servizio costituisce accettazione dei termini modificati.',
    },
    contactSection: {
      title: 'Contattaci',
      content: 'Se avete domande su questi Termini di Servizio, per favore contattateci:',
    },
  },

  // Privacy Page
  privacy: {
    title: 'Politica sulla Privacy',
    lastUpdated: 'Ultimo aggiornamento: 24 febbraio 2026',
    introduction: {
      title: 'Introduzione',
      content1: 'WhatsReal ("noi", "nostro" o "piattaforma") valorizza la vostra privacy. Questa Politica sulla Privacy spiega come raccogliamo, utilizziamo e proteggiamo le vostre informazioni quando utilizzate i nostri servizi.',
      content2: 'Utilizzando i servizi di WhatsReal, accettate la raccolta e l\'uso delle informazioni secondo questa Politica sulla Privacy.',
    },
    collect: {
      title: 'Informazioni che Raccogliamo',
      intro: 'Raccogliamo i seguenti tipi di informazioni:',
      wallet: {
        title: 'Informazioni del Wallet',
        item1: 'Il vostro indirizzo wallet Web3',
        item2: 'Cronologia delle transazioni e informazioni del saldo',
        item3: 'Registri di interazione con smart contract',
      },
      usage: {
        title: 'Dati di Utilizzo',
        item1: 'Come utilizzate i nostri servizi',
        item2: 'Tempi di accesso, frequenza e durata',
        item3: 'Informazioni del dispositivo e del browser',
        item4: 'Indirizzo IP e informazioni sulla posizione (se permesso)',
      },
      technical: {
        title: 'Dati Tecnici',
        item1: 'Cookie e tecnologie di tracciamento simili',
        item2: 'File di log e report di errore',
        item3: 'Dati di performance e analitici',
      },
    },
    use: {
      title: 'Come Utilizziamo le Informazioni',
      item1: 'Fornire e mantenere i nostri servizi',
      item2: 'Processare transazioni e gestire il vostro account',
      item3: 'Migliorare i nostri prodotti e servizi',
      item4: 'Fornire supporto clienti',
      item5: 'Garantire la sicurezza della piattaforma e prevenire frodi',
      item6: 'Conformarsi ai requisiti legali',
    },
    sharing: {
      title: 'Condivisione delle Informazioni',
      intro: 'Non vendiamo, scambiamo o affittiamo le vostre informazioni personali. Potremmo condividere informazioni nelle seguenti circostanze:',
      item1: 'Con il vostro consenso esplicito',
      item2: 'Per conformarci a obblighi legali o ordini del tribunale',
      item3: 'Per proteggere i nostri diritti, proprietà o sicurezza',
      item4: 'Con fornitori di servizi fidati (soggetti ad accordi di riservatezza)',
    },
    blockchain: {
      title: 'Trasparenza Blockchain',
      content1: 'Notate che le transazioni blockchain sono intrinsecamente pubbliche. Il vostro indirizzo wallet e le attività di transazione saranno registrate permanentemente sulla blockchain e visibili a chiunque.',
      content2: 'Non possiamo controllare o cancellare informazioni già registrate sulla blockchain. Per favore considerate questo prima di partecipare alle transazioni.',
    },
    security: {
      title: 'Sicurezza dei Dati',
      content1: 'Implementiamo varie misure di sicurezza per proteggere le vostre informazioni:',
      item1: 'Crittografare la trasmissione e l\'archiviazione di dati sensibili',
      item2: 'Audit di sicurezza regolari e valutazioni delle vulnerabilità',
      item3: 'Limitare l\'accesso dei dipendenti alle informazioni personali',
      item4: 'Utilizzare fornitori di servizi di terze parti sicuri',
    },
    retention: {
      title: 'Conservazione dei Dati',
      content1: 'Conserviamo le vostre informazioni solo per il tempo necessario a soddisfare gli scopi delineati in questa politica.',
      content2: 'Potete richiedere la cancellazione delle vostre informazioni personali in qualsiasi momento, ma notate che i record blockchain non possono essere cancellati.',
    },
    rights: {
      title: 'I Vostri Diritti',
      intro: 'Sotto la legge applicabile, potreste avere i seguenti diritti:',
      item1: 'Accedere alle informazioni che abbiamo su di voi',
      item2: 'Richiedere la correzione di informazioni inaccurate',
      item3: 'Richiedere la cancellazione delle vostre informazioni personali',
      item4: 'Limitare il nostro processamento delle vostre informazioni',
    },
    cookies: {
      title: 'Politica sui Cookie',
      content1: 'Utilizziamo cookie e tecnologie simili per migliorare la vostra esperienza utente, analizzare il traffico del sito web e personalizzare i contenuti.',
      content2: 'Potete controllare l\'uso dei cookie attraverso le impostazioni del vostro browser, ma questo potrebbe influenzare l\'uso normale di certe caratteristiche.',
    },
    thirdParty: {
      title: 'Servizi di Terze Parti',
      content1: 'I nostri servizi possono contenere link a siti web o servizi di terze parti. I servizi di terze parti che utilizziamo includono:',
      item1: 'Fornitori di rete blockchain',
      item2: 'Servizi di analitici e monitoraggio',
      item3: 'Servizi di archiviazione cloud e hosting',
    },
    changes: {
      title: 'Modifiche alla Politica',
      content: 'Potremmo aggiornare questa Politica sulla Privacy di tanto in tanto. Qualsiasi modifica sarà pubblicata su questa pagina, e per modifiche significative, forniremo un avviso più prominente.',
    },
    contactSection: {
      title: 'Contattaci',
      content: 'Se avete domande o preoccupazioni su questa Politica sulla Privacy, per favore contattateci tramite:',
      email: 'Email',
      address: 'Indirizzo',
    },
  },

  // How It Works Page
  howItWorks: {
    title: 'Come Funziona',
    subtitle: 'Impara come usare WhatsReal per il trading di previsione e guadagnare ricompense',
    steps: {
      title: 'Inizia in 3 Passi',
      step1: {
        title: 'Connetti Wallet',
        description: 'Usa MetaMask, WalletConnect o altri wallet Web3 per connetterti a WhatsReal'
      },
      step2: {
        title: 'Esplora Mercati',
        description: 'Esplora vari mercati di previsione inclusi crypto, azioni, sport e altro'
      },
      step3: {
        title: 'Inizia Trading',
        description: 'Fai previsioni basate sulla tua analisi e guadagna ricompense quando i mercati si risolvono'
      }
    },
    features: {
      title: 'Caratteristiche della Piattaforma',
      ai: {
        title: 'Analisi Alimentata da IA',
        description: 'Algoritmi IA avanzati analizzano le tendenze del mercato per la scoperta intelligente dei prezzi'
      },
      web3: {
        title: 'Tecnologia Web3',
        description: 'L\'architettura blockchain decentralizzata garantisce trasparenza e sicurezza'
      },
      trading: {
        title: 'Trading Professionale',
        description: 'Il meccanismo LMSR fornisce liquidità efficiente e prezzi equi'
      },
      rewards: {
        title: 'Ricompense Attraenti',
        description: 'Le previsioni accurate guadagnano ricompense sostanziali con rischio al ribasso controllato'
      }
    },
    markets: {
      title: 'Tipi di Mercato',
      crypto: 'Predire Bitcoin, Ethereum e movimenti di prezzo delle principali criptovalute',
      stock: 'Predire prezzi delle azioni di aziende famose e performance del mercato',
      sports: 'Predire risultati di eventi sportivi e statistiche correlate'
    },
    faq: {
      title: 'Domande Frequenti',
      q1: {
        question: 'Come iniziare con WhatsReal?',
        answer: 'Prima connetti un wallet Web3 come MetaMask, poi esplora i mercati di previsione disponibili e scegli quelli che ti interessano per iniziare il trading.'
      },
      q2: {
        question: 'Quali sono i rischi del trading di previsione?',
        answer: 'Il trading di previsione comporta rischi di mercato e potresti perdere i tuoi fondi investiti. Raccomandiamo di investire solo importi che puoi permetterti di perdere e praticare una gestione del rischio appropriata.'
      },
      q3: {
        question: 'Come ritiro le mie vincite?',
        answer: 'Quando i mercati di previsione si risolvono, se le tue previsioni sono corrette, le ricompense vengono automaticamente aggiunte al saldo del tuo account e puoi ritirare in qualsiasi momento.'
      }
    },
    cta: {
      title: 'Pronto per Iniziare?',
      subtitle: 'Unisciti a WhatsReal e inizia il tuo viaggio di trading di previsione',
      connect: 'Connetti Wallet',
      explore: 'Esplora Mercati'
    }
  },

  // Activity Ticker
  ticker: {
    label: 'Attività dal Vivo',
    activities: {
      trade: '{user} ha votato {side} su "{market}" con {amount}',
      market_created: '{user} ha creato il mercato "{market}"',
      market_resolved: 'Il mercato "{market}" è stato risolto',
      comment: '{user} ha commentato su "{market}"'
    }
  },

  // Time format
  time: {
    justNow: 'Proprio ora',
    minutesAgo: '{minutes}m fa',
    hoursAgo: '{hours}h fa'
  },
}