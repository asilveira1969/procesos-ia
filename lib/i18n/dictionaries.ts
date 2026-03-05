import type { Locale } from "@/types";

type NavKey =
  | "about"
  | "methodology"
  | "insights"
  | "cases"
  | "templates"
  | "contact"
  | "media";

export interface Dictionary {
  localeLabel: string;
  siteTitle: string;
  siteSubtitle: string;
  nav: Record<NavKey, string>;
  footer: {
    newsletterTitle: string;
    newsletterBody: string;
    privacy: string;
    legal: string;
    rights: string;
  };
  forms: {
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    templateSuccess: string;
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    credentials: string[];
    founderIntro: string;
    primaryCta: string;
    secondaryCta: string;
    aboutTitle: string;
    aboutBody: string;
    aboutPoints: string[];
    founderCardTitle: string;
    founderBio: string;
    founderButton: string;
    processTitle: string;
    processIntro: string;
    problemsTitle: string;
    problemsIntro: string;
    problems: string[];
    trustTitle: string;
    trustIntro: string;
    trustBullets: string[];
    featuredInsights: string;
    templatesTitle: string;
    closingTitle: string;
    closingBody: string;
    closingCta: string;
  };
  aboutPage: {
    title: string;
    intro: string[];
    principlesTitle: string;
    principles: string[];
    credentialsTitle: string;
    cta: string;
  };
  methodology: {
    title: string;
    description: string;
  };
  insights: {
    title: string;
    description: string;
  };
  cases: {
    title: string;
    description: string;
  };
  templates: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
  };
  media: {
    title: string;
    description: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    localeLabel: "ES",
    siteTitle: "Silveira Consultora",
    siteSubtitle: "Procesos + IA",
    nav: {
      about: "Nosotros",
      methodology: "Metodo",
      insights: "Insights",
      cases: "Casos",
      templates: "Templates",
      contact: "Contacto",
      media: "Media",
    },
    footer: {
      newsletterTitle: "Newsletter estrategico",
      newsletterBody:
        "Ideas puntuales sobre procesos, foco comercial y adopcion practica de IA.",
      privacy: "Privacy",
      legal: "Legal",
      rights: "Todos los derechos reservados.",
    },
    forms: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar",
      sending: "Enviando...",
      success: "Gracias. Recibimos tu solicitud.",
      error: "No pudimos procesar la solicitud. Intenta nuevamente.",
      templateSuccess: "Listo. Ya puedes descargar el material.",
    },
    home: {
      eyebrow: "Confianza directa",
      title:
        "Ayudamos a empresas a incorporar Inteligencia Artificial en sus procesos con metodo, experiencia y vision estrategica.",
      description:
        "Consultoria boutique en mejora y diseno de procesos empresariales. Integramos IA con criterio, enfocada en estabilidad, trazabilidad y resultado medible.",
      credentials: [
        "University of Baltimore - Business Management",
        "Johns Hopkins University - MS Marketing",
        "Green Belt Six Sigma - General Electric",
        "Experiencia en GE y Zurich",
      ],
      founderIntro:
        "Una direccion senior que combina mejora de procesos, lectura de negocio y criterios concretos para incorporar IA sin improvisacion.",
      primaryCta: "Agendar conversacion estrategica",
      secondaryCta: "Conocer nuestra metodologia",
      aboutTitle: "Una firma boutique, con direccion senior directa.",
      aboutBody:
        "Trabajamos de forma cercana, reservada y con foco ejecutivo. No vendemos volumen ni automatismos: acompanamos decisiones importantes con mirada senior y criterio operativo.",
      aboutPoints: [
        "Somos una firma boutique, creada para intervenciones acotadas y de alto nivel.",
        "La estrategia y el trabajo sensible se conducen directamente desde la direccion del fundador.",
        "Integramos IA dentro de procesos reales, con gobernanza, medicion y responsabilidad.",
      ],
      founderCardTitle: "Conduccion directa del fundador",
      founderBio:
        "Con experiencia en entornos multinacionales y mejora continua, el fundador lidera personalmente el diagnostico, el criterio de diseno y la conversacion estrategica de cada proyecto.",
      founderButton: "Conocer al fundador",
      processTitle: "Como trabajamos",
      processIntro:
        "Un marco claro para integrar IA sin perder control operativo ni calidad de ejecucion.",
      problemsTitle: "Que problemas resolvemos",
      problemsIntro:
        "Intervenimos cuando el crecimiento o la complejidad empiezan a superar la estructura disponible.",
      problems: [
        "Procesos ineficientes",
        "Falta de control y seguimiento",
        "Crecimiento sin estructura",
        "Desorden operativo",
        "Uso superficial de IA (sin metodo)",
        "Decisiones sin metricas confiables",
      ],
      trustTitle: "Por que confiar en nosotros",
      trustIntro:
        "El valor esta en la combinacion de trayectoria, criterio y una forma de trabajo reservada.",
      trustBullets: [
        "Formacion internacional (Baltimore + Johns Hopkins)",
        "Experiencia multinacional (GE y Zurich)",
        "Disciplina de mejora continua (Green Belt Six Sigma)",
        "Enfoque boutique: atencion directa y confidencialidad",
      ],
      featuredInsights: "Insights destacados",
      templatesTitle: "Templates utiles para avanzar",
      closingTitle: "Confianza para decidir, sin ruido.",
      closingBody:
        "Si esta evaluando integrar Inteligencia Artificial en su empresa sin comprometer estabilidad ni calidad, conversemos.",
      closingCta: "Solicitar reunion estrategica",
    },
    aboutPage: {
      title: "Direccion senior, criterio practico y una relacion de trabajo directa.",
      intro: [
        "Silveira Consultora nace con una premisa simple: cuando una empresa evalua cambios sensibles en procesos o en adopcion de IA, necesita seniority real y una conversacion honesta.",
        "Por eso trabajamos como firma boutique. No delegamos la estrategia central ni convertimos el servicio en una cadena de produccion. Cada intervencion se disena con foco, confidencialidad y presencia directa del fundador.",
        "Nuestro enfoque combina mejora de procesos, gobernanza y vision ejecutiva para que la IA entre donde tiene sentido: dentro de la operacion real, con control, medicion y responsabilidad.",
      ],
      principlesTitle: "Principios",
      principles: [
        "Claridad antes que complejidad",
        "IA aplicada con criterio, no por tendencia",
        "Confidencialidad y atencion directa",
        "Gobernanza y medicion desde el inicio",
        "Cambios concretos, no transformaciones teatrales",
      ],
      credentialsTitle: "Credenciales",
      cta: "Agendar conversacion estrategica",
    },
    methodology: {
      title: "Metodologia",
      description:
        "Diagnostico, priorizacion y acompanamiento para mover decisiones estrategicas hacia ejecucion consistente.",
    },
    insights: {
      title: "Insights",
      description:
        "Notas breves sobre procesos, gestion y adopcion responsable de IA.",
    },
    cases: {
      title: "Casos",
      description:
        "Intervenciones enfocadas en claridad operativa, alineacion y resultados sostenibles.",
    },
    templates: {
      title: "Templates",
      description:
        "Herramientas concretas para diagnosticar, ordenar y acelerar decisiones.",
    },
    contact: {
      title: "Contacto",
      description:
        "Comparte el contexto de tu desafio y responderemos con una mirada clara sobre el siguiente paso.",
    },
    media: {
      title: "Media",
      description: "Proximamente.",
    },
  },
  en: {
    localeLabel: "EN",
    siteTitle: "Silveira Consultora",
    siteSubtitle: "Processes + AI",
    nav: {
      about: "About",
      methodology: "Method",
      insights: "Insights",
      cases: "Cases",
      templates: "Templates",
      contact: "Contact",
      media: "Media",
    },
    footer: {
      newsletterTitle: "Strategic newsletter",
      newsletterBody:
        "Concise thinking on process design, operational clarity, and practical AI adoption.",
      privacy: "Privacy",
      legal: "Legal",
      rights: "All rights reserved.",
    },
    forms: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      sending: "Sending...",
      success: "Thank you. Your request has been received.",
      error: "We could not process your request. Please try again.",
      templateSuccess: "Done. Your download is ready.",
    },
    home: {
      eyebrow: "Direct trust",
      title:
        "We help companies integrate Artificial Intelligence into their business processes with discipline, experience, and strategic clarity.",
      description:
        "A boutique advisory practice focused on business process improvement and redesign. We bring AI into operations with judgment, not because it is fashionable.",
      credentials: [
        "University of Baltimore - Business Management",
        "Johns Hopkins University - MS Marketing",
        "Green Belt Six Sigma - General Electric",
        "Experience across GE and Zurich",
      ],
      founderIntro:
        "Senior leadership that brings process discipline, business perspective, and a measured approach to AI adoption.",
      primaryCta: "Schedule a strategic conversation",
      secondaryCta: "Explore our methodology",
      aboutTitle: "A boutique firm with direct senior leadership.",
      aboutBody:
        "The work is intentionally close, discreet, and led at senior level. We do not sell volume or delegate strategic thinking away from the client relationship.",
      aboutPoints: [
        "We are a boutique firm built for focused, high-trust engagements.",
        "Core strategy work is led directly by the founder, not passed down the chain.",
        "We place AI inside real processes, with governance, measurement, and accountability.",
      ],
      founderCardTitle: "Founder-led advisory",
      founderBio:
        "With multinational experience and continuous improvement discipline, the founder stays directly involved in diagnosis, design judgment, and the strategic dialogue of each engagement.",
      founderButton: "Meet the founder",
      processTitle: "How we work",
      processIntro:
        "A simple structure for integrating AI without giving up control, accountability, or execution quality.",
      problemsTitle: "What problems we solve",
      problemsIntro:
        "We step in when growth, complexity, or new tools start to outrun the operating model.",
      problems: [
        "Inefficient processes",
        "Limited control and follow-through",
        "Growth without structure",
        "Operational disorder",
        "Superficial AI adoption without method",
        "Decisions made without dependable metrics",
      ],
      trustTitle: "Why clients trust us",
      trustIntro:
        "Trust comes from depth of background, practical judgment, and a discreet way of working.",
      trustBullets: [
        "International education (Baltimore + Johns Hopkins)",
        "Multinational experience (GE and Zurich)",
        "Continuous improvement discipline (Green Belt Six Sigma)",
        "Boutique approach: direct attention and confidentiality",
      ],
      featuredInsights: "Featured insights",
      templatesTitle: "Useful templates",
      closingTitle: "A calm, direct way to make a strategic decision.",
      closingBody:
        "If you are evaluating how to bring Artificial Intelligence into your company without compromising stability or quality, let us talk.",
      closingCta: "Request a strategic meeting",
    },
    aboutPage: {
      title: "Senior judgment, practical discipline, and a direct advisory relationship.",
      intro: [
        "Silveira Consultora was built on a simple premise: when companies are considering sensitive changes in process design or AI adoption, they need real seniority and a straightforward conversation.",
        "That is why the firm operates as a boutique practice. We do not delegate the strategic core of the work or turn the service into a production line. Each engagement is designed with focus, confidentiality, and direct founder involvement.",
        "Our approach combines process improvement, governance, and executive clarity so AI is introduced where it genuinely strengthens the business process, with control and measurable value.",
      ],
      principlesTitle: "Principles",
      principles: [
        "Clarity before complexity",
        "Applied AI with judgment, not trend-following",
        "Confidentiality and direct attention",
        "Governance and measurement from the start",
        "Concrete change, not theatrical transformation",
      ],
      credentialsTitle: "Credentials",
      cta: "Schedule a strategic conversation",
    },
    methodology: {
      title: "Methodology",
      description:
        "Diagnosis, prioritization, and execution support built for international teams that need clarity.",
    },
    insights: {
      title: "Insights",
      description:
        "Brief notes on process design, management discipline, and responsible AI adoption.",
    },
    cases: {
      title: "Cases",
      description:
        "Selected engagements focused on operational clarity, decision flow, and durable results.",
    },
    templates: {
      title: "Templates",
      description:
        "Practical tools to diagnose priorities, align teams, and accelerate execution.",
    },
    contact: {
      title: "Contact",
      description:
        "Share your context and we will respond with a clear view of the next useful step.",
    },
    media: {
      title: "Media",
      description: "Coming soon.",
    },
  },
  pt: {
    localeLabel: "PT",
    siteTitle: "Silveira Consultora",
    siteSubtitle: "Processos + IA",
    nav: {
      about: "Sobre",
      methodology: "Metodo",
      insights: "Insights",
      cases: "Casos",
      templates: "Templates",
      contact: "Contato",
      media: "Media",
    },
    footer: {
      newsletterTitle: "Newsletter estrategica",
      newsletterBody:
        "Ideias objetivas sobre processos, disciplina de gestao e adocao pratica de IA.",
      privacy: "Privacy",
      legal: "Legal",
      rights: "Todos os direitos reservados.",
    },
    forms: {
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      submit: "Enviar",
      sending: "Enviando...",
      success: "Obrigado. Recebemos sua mensagem.",
      error: "Nao foi possivel processar sua solicitacao. Tente novamente.",
      templateSuccess: "Pronto. Seu download ja esta disponivel.",
    },
    home: {
      eyebrow: "Confianca direta",
      title:
        "Ajudamos empresas a integrar Inteligencia Artificial aos processos com metodo, experiencia e clareza estrategica.",
      description:
        "Consultoria boutique em melhoria e desenho de processos empresariais. Integramos IA com criterio, sem adotar tecnologia apenas por tendencia.",
      credentials: [
        "University of Baltimore - Business Management",
        "Johns Hopkins University - MS Marketing",
        "Green Belt Six Sigma - General Electric",
        "Experiencia em GE e Zurich",
      ],
      founderIntro:
        "Direcao senior com disciplina de processos, leitura de negocio e criterio para introduzir IA sem perder controle.",
      primaryCta: "Agendar conversa estrategica",
      secondaryCta: "Conhecer nossa metodologia",
      aboutTitle: "Uma firma boutique, com lideranca senior direta.",
      aboutBody:
        "Trabalhamos de forma proxima, reservada e orientada por senioridade real. Nao vendemos volume nem terceirizamos a parte mais sensivel do raciocinio estrategico.",
      aboutPoints: [
        "Somos uma firma boutique pensada para atuacoes focadas e de alta confianca.",
        "O trabalho estrategico e conduzido diretamente pelo fundador, sem delegacao do nucleo da decisao.",
        "Integramos IA em processos reais, com governanca, medicao e responsabilidade.",
      ],
      founderCardTitle: "Atuacao direta do fundador",
      founderBio:
        "Com experiencia multinacional e disciplina de melhoria continua, o fundador participa diretamente do diagnostico, do criterio de desenho e da conversa estrategica de cada projeto.",
      founderButton: "Conhecer o fundador",
      processTitle: "Como trabalhamos",
      processIntro:
        "Um metodo claro para integrar IA sem abrir mao de controle, governanca e qualidade de execucao.",
      problemsTitle: "Que problemas resolvemos",
      problemsIntro:
        "Entramos quando crescimento, complexidade ou novas ferramentas comecam a exceder a estrutura atual.",
      problems: [
        "Processos ineficientes",
        "Falta de controle e acompanhamento",
        "Crescimento sem estrutura",
        "Desordem operacional",
        "Uso superficial de IA (sem metodo)",
        "Decisoes sem metricas confiaveis",
      ],
      trustTitle: "Por que confiar em nos",
      trustIntro:
        "A confianca vem da combinacao de repertorio, criterio pratico e uma forma reservada de trabalhar.",
      trustBullets: [
        "Formacao internacional (Baltimore + Johns Hopkins)",
        "Experiencia multinacional (GE e Zurich)",
        "Disciplina de melhoria continua (Green Belt Six Sigma)",
        "Abordagem boutique: atencao direta e confidencialidade",
      ],
      featuredInsights: "Insights em destaque",
      templatesTitle: "Templates para avancar",
      closingTitle: "Confianca para decidir com serenidade.",
      closingBody:
        "Se voce esta avaliando integrar Inteligencia Artificial na sua empresa sem comprometer estabilidade nem qualidade, vamos conversar.",
      closingCta: "Solicitar reuniao estrategica",
    },
    aboutPage: {
      title: "Senioridade real, disciplina pratica e uma relacao direta de consultoria.",
      intro: [
        "Silveira Consultora foi criada com uma premissa simples: quando uma empresa avalia mudancas sensiveis em processos ou em adocao de IA, ela precisa de senioridade real e de uma conversa objetiva.",
        "Por isso atuamos como firma boutique. Nao delegamos o nucleo estrategico do trabalho nem transformamos o servico em linha de producao. Cada projeto e desenhado com foco, confidencialidade e participacao direta do fundador.",
        "Nossa abordagem combina melhoria de processos, governanca e clareza executiva para que a IA entre onde faz sentido, dentro da operacao real, com controle e valor mensuravel.",
      ],
      principlesTitle: "Principios",
      principles: [
        "Clareza antes da complexidade",
        "IA aplicada com criterio, nao por modismo",
        "Confidencialidade e atencao direta",
        "Governanca e medicao desde o inicio",
        "Mudanca concreta, nao transformacao teatral",
      ],
      credentialsTitle: "Credenciais",
      cta: "Agendar conversa estrategica",
    },
    methodology: {
      title: "Metodologia",
      description:
        "Diagnostico, priorizacao e acompanhamento para transformar direcao estrategica em execucao consistente.",
    },
    insights: {
      title: "Insights",
      description:
        "Notas curtas sobre processos, gestao e adocao responsavel de IA.",
    },
    cases: {
      title: "Casos",
      description:
        "Projetos selecionados com foco em clareza operacional, alinhamento e resultado sustentavel.",
    },
    templates: {
      title: "Templates",
      description:
        "Ferramentas praticas para diagnosticar prioridades e acelerar a execucao.",
    },
    contact: {
      title: "Contato",
      description:
        "Compartilhe seu contexto e responderemos com uma proposta clara para o proximo passo.",
    },
    media: {
      title: "Media",
      description: "Em breve.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
