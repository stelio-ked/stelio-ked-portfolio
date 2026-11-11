// ═══════════════════════════════════════════════════════════
// Dados do portfólio — Fonte única de verdade
// Edite apenas este arquivo para atualizar conteúdo do site.
// O site tem dois idiomas: `pt` (padrão) e `en`. O inglês parte do português
// e sobrescreve só o que muda de idioma (cargos, textos, rótulos).
// ═══════════════════════════════════════════════════════════

export type Lang = "pt" | "en";

export interface PersonalInfo {
  name: string;
  greeting: string;
  title: string;
  subtitle: string;
  tagline: string;
  shareDescription: string; // descrição para buscadores e prévia de link (LinkedIn recomenda 100+ caracteres)
  location: string;
  email: string;
  whatsapp: string; // número sem +, espaços ou traços (link da API)
  whatsappDisplay: string;
  linkedin: string;
  avatarUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  isActive: boolean;
  description: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  highlight?: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string; // rótulo exibido no topo do card
  badge?: string; // ex: "Em produção", "Beta"
  color: string; // chave de cor do accent
}

// Textos de interface (rótulos, botões e avisos de acessibilidade)
export interface UiTexts {
  contact: string;
  toggleMenu: string;
  themeToLight: string;
  themeToDark: string;
  switchLanguage: { code: string; label: string }; // idioma de destino
  sections: {
    experience: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };
  currentPosition: string;
  scroll: string;
  viewLive: string;
  academic: string;
  certifications: string;
  certificationsDone: string;
  seeAllLinkedIn: string;
  sendEmail: string;
  madeWith: string;
}

export interface SiteContent {
  personalInfo: PersonalInfo;
  certifications: { total: number; featured: { name: string; issuer: string; year: string }[] };
  aboutText: {
    headline: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    tags: string[];
    highlights: { icon: string; title: string; text: string }[];
  };
  experiences: Experience[];
  skillCategories: SkillCategory[];
  education: Education[];
  projects: Project[];
  sectionTexts: {
    about: { title: string; highlight: string };
    experience: { title: string; subtitle: string };
    skills: { title: string; subtitle: string };
    projects: { title: string; subtitle: string };
    education: { title: string };
    contact: { title: string; highlight: string; text: string };
  };
  navLinks: { label: string; href: string }[];
  ui: UiTexts;
}

const CERTIFICATIONS_TOTAL = 25;

// ───────────────────────────── Português (padrão) ─────────────────────────────

const pt: SiteContent = {
  personalInfo: {
    name: "Stelio Ked",
    greeting: "Olá, eu sou",
    title: "Coordenador de Analytics",
    subtitle: "Líder em Analytics e IA Aplicada",
    tagline: "+10 anos transformando dados em decisões estratégicas, agora com IA aplicada",
    shareDescription:
      "Coordenador de Analytics com +10 anos transformando dados em decisões estratégicas. BI, automação, IA aplicada e liderança de times de dados.",
    location: "Palhoça, SC — Brasil",
    email: "theoked25@gmail.com",
    whatsapp: "5548988076962",
    whatsappDisplay: "+55 48 98807-6962",
    linkedin: "https://www.linkedin.com/in/stelio-ked/",
    avatarUrl: "/images/avatar-final.webp",
  },

  certifications: {
    total: CERTIFICATIONS_TOTAL,
    featured: [
      { name: "Inteligência Artificial 2ª Edição", issuer: "Alura", year: "2024" },
    ],
  },

  aboutText: {
    headline: "Sobre mim",
    paragraphs: [
      "Profissional dinâmico e proativo com mais de 10 anos de experiência na área de dados, atuando em diversos segmentos, incluindo varejo e finanças.",
      "Histórico de sucesso na implementação de soluções de dados que geraram resultados tangíveis para as empresas, sendo apaixonado por buscar inovações que agreguem valor ao crescimento das empresas e pessoas.",
      "Experiência consolidada em liderança de equipes de análise de dados e gerenciamento de projetos complexos, mantendo um perfil autodidata, determinado e disciplinado na busca por resultados e superação de metas.",
      "Hoje combino a base em dados com IA aplicada: soluções com modelos de linguagem, agentes e busca em documentos, sempre com avaliação de qualidade, segurança e governança desde o desenho.",
    ],
    stats: [
      { value: "10+", label: "Anos de Experiência" },
      { value: "7+", label: "Empresas Impactadas" },
      { value: String(CERTIFICATIONS_TOTAL), label: "Certificações" },
    ],
    tags: [
      "#analisededados",
      "#cienciadedados",
      "#bigdata",
      "#businessintelligence",
      "#iaaplicada",
      "#llm",
      "#datavisualization",
      "#gestãodepessoas",
      "#liderança",
      "#recrutamentoeseleção",
      "#desenvolvimentodeequipes",
      "#culturaorganizacional",
    ],
    highlights: [
      {
        icon: "target",
        title: "Liderança e Planejamento",
        text: "Lidera e planeja demandas com maestria, garantindo a entrega de resultados dentro do prazo e do orçamento.",
      },
      {
        icon: "brain",
        title: "Análise de Problemas e Mapeamento de Processos",
        text: "Realiza análises profundas, mapeia processos com precisão e organiza estratégias eficazes para otimizar a produtividade.",
      },
      {
        icon: "bar-chart-3",
        title: "Análise de Dados",
        text: "Identifica padrões e sugere respostas baseadas em dados estruturados, utilizando KPIs para fornecer insights acionáveis que impulsionam decisões estratégicas.",
      },
      {
        icon: "trending-down",
        title: "Redução de Custos",
        text: "Contribui significativamente para a redução de custos operacionais através de insights valiosos e otimização de processos.",
      },
      {
        icon: "compass",
        title: "Orientação por Dados",
        text: "Promove a cultura de trabalho orientada por dados, fornecendo suporte estratégico a todas as equipes nas decisões corporativas.",
      },
    ],
  },

  experiences: [
    {
      id: "droove",
      role: "Coordenador de Analytics",
      company: "Droove",
      period: "Jun 2023 — Presente",
      location: "Remoto",
      isActive: true,
      description: [
        "Modelo TaaS (Teams as a Service) para clientes enterprise",
        "Hyperautomation com n8n, Pipefy e GenAI",
        "Criação da Metodologia D.R.I.V.E. para Analytics",
        "Gestão de OKRs e Data Governance",
      ],
      techStack: ["n8n", "Pipefy", "GenAI", "SQL", "Python", "Tableau", "Power BI"],
    },
    {
      id: "vallora",
      role: "Gerente de Planejamento e Dados",
      company: "Vallora Benefícios",
      period: "Jan 2022 — Abr 2023",
      location: "Palhoça, SC",
      isActive: false,
      description: [
        "Liderança de equipes de Planejamento e BI",
        "Automação operacional e auditoria de vendas",
        "Definição de KPIs estratégicos do negócio",
      ],
      techStack: ["Power BI", "SQL", "Excel Avançado", "Tableau"],
    },
    {
      id: "itech",
      role: "Analista de BI Sênior",
      company: "iTech Care",
      period: "Jun 2021 — Dez 2021",
      location: "São Paulo, SP",
      isActive: false,
      description: [
        "Implementação de cultura data-driven",
        "Suporte decisório para C-Level",
        "Dashboards estratégicos e operacionais",
      ],
      techStack: ["Tableau", "SQL", "Python"],
    },
    {
      id: "dasa",
      role: "Analista de BI Sênior",
      company: "Dasa Empresas",
      period: "Jun 2021 — Dez 2021",
      location: "São Paulo, SP",
      isActive: false,
      description: [
        "Business Intelligence enterprise",
        "Relatórios e análises para gestão hospitalar",
      ],
      techStack: ["Power BI", "SQL", "ETL"],
    },
    {
      id: "mundialmix",
      role: "Analista de Dados",
      company: "Grupo MundialMix",
      period: "Out 2019 — Jun 2021",
      location: "Palhoça, SC",
      isActive: false,
      description: [
        "Tratamento e Integração de Dados (ETL)",
        "Consolidação de diversas fontes de dados",
        "Desenvolvimento com Pentaho, Nifi, Python, Tableau Prep",
      ],
      techStack: ["Pentaho", "Nifi", "Python", "Tableau Prep", "Oracle Cloud"],
    },
    {
      id: "calcard",
      role: "Analista de BI",
      company: "CALCARD",
      period: "Mai 2017 — Set 2019",
      isActive: false,
      description: [
        "Definição e monitoramento de KPIs",
        "Geração de insights proativos para o negócio",
        "Reportes executivos e dashboards",
      ],
      techStack: ["SQL", "Excel", "Tableau"],
    },
    {
      id: "delsoft",
      role: "Consultor Pleno",
      company: "DELSOFT Sistemas",
      period: "Mar 2013 — Mar 2016",
      isActive: false,
      description: [
        "Consultoria de sistemas e processos",
        "Implantação de soluções ERP",
      ],
      techStack: ["SQL", "ERP"],
    },
  ],

  skillCategories: [
    {
      title: "Data & BI",
      icon: "bar-chart-3",
      skills: ["Tableau", "Power BI", "SQL", "Python", "KPIs", "Data Visualization"],
      color: "cyan",
    },
    {
      title: "Automação",
      icon: "zap",
      skills: ["n8n", "Pipefy", "APIs/Webhooks", "ETL", "Pentaho", "Nifi"],
      color: "indigo",
    },
    {
      title: "IA Aplicada",
      icon: "brain",
      skills: [
        "LLMs e GenAI",
        "Agentes e Tool Calling",
        "RAG e Embeddings",
        "Bancos Vetoriais",
        "Engenharia de Prompt e Contexto",
        "Avaliação de Modelos",
        "Segurança e Governança de IA",
        "D.R.I.V.E.",
      ],
      color: "violet",
    },
    {
      title: "Backend & Integrações",
      icon: "server",
      skills: ["C# / .NET", "APIs REST", "SQL Server", "SOLID", "Semantic Kernel", "LangChain / LangGraph"],
      color: "blue",
    },
    {
      title: "Liderança",
      icon: "users",
      skills: ["Gestão de Pessoas", "OKRs", "Planejamento", "Data Governance", "Mentoria"],
      color: "emerald",
    },
    {
      title: "Cloud",
      icon: "cloud",
      skills: ["Oracle Cloud", "AWS", "DW/Data Lake"],
      color: "cyan",
    },
    {
      title: "Metodologias",
      icon: "layout-grid",
      skills: ["Scrum", "Kanban", "TaaS", "Agile", "Mapeamento de Processos"],
      color: "amber",
    },
  ],

  education: [
    {
      institution: "Escola Conquer",
      degree: "MBA — Pós-Graduação Lato Sensu",
      field: "Liderança e Gestão de Pessoas",
      period: "2022 — 2023",
      highlight: "Analítica de dados",
    },
    {
      institution: "Universidade Anhembi Morumbi",
      degree: "Pós-Graduação",
      field: "Gestão de Sistemas (BI) — Ciências da Computação e Informática",
      period: "2015 — 2016",
      highlight: "Business Intelligence e Analítica de dados",
    },
  ],

  projects: [
    {
      id: "kedgo",
      name: "KedGo!",
      tagline: "Roteiro e Custos de Viagem com IA",
      description:
        "App web full-stack de planejamento de viagens inteligente. Gera roteiros personalizados com Gemini AI, controla custos por categoria com OCR de recibos, suporta múltiplos viajantes e funciona 100% offline. Inclui sistema de assinaturas (Stripe), referral, cupons promocionais e painel SuperAdmin.",
      techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Gemini AI", "Stripe", "Vite"],
      liveUrl: "https://kedgo.pro",
      category: "SaaS & Web App",
      badge: "Em produção",
      color: "cyan",
    },
  ],

  sectionTexts: {
    about: {
      title: "Liderança em dados e IA com paixão por",
      highlight: "transformar dados em impacto",
    },
    experience: {
      title: "Trajetória Profissional",
      subtitle: "+10 anos construindo pontes entre dados e decisões",
    },
    skills: {
      title: "Competências & Tecnologias",
      subtitle: "Stack técnica e habilidades que impulsionam resultados",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle:
        "Aplicações reais desenvolvidas de ponta a ponta com foco em IA, usabilidade e arquitetura escalável",
    },
    education: {
      title: "Educação & Certificações",
    },
    contact: {
      title: "Vamos",
      highlight: "conversar?",
      text: "Transformando dados em decisões estratégicas e em soluções de IA confiáveis. Se você busca alguém que conecte tecnologia, dados e resultados — let's talk.",
    },
  },

  navLinks: [
    { label: "Sobre", href: "#about" },
    { label: "Experiência", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Formação", href: "#education" },
    { label: "Contato", href: "#contact" },
  ],

  ui: {
    contact: "Contato",
    toggleMenu: "Alternar menu",
    themeToLight: "Mudar para o tema claro",
    themeToDark: "Mudar para o tema escuro",
    switchLanguage: { code: "EN", label: "Mudar para o inglês" },
    sections: {
      experience: "Experiência",
      skills: "Skills",
      projects: "Projetos",
      education: "Formação",
      contact: "Contato",
    },
    currentPosition: "Posição atual",
    scroll: "Scroll",
    viewLive: "Ver ao vivo",
    academic: "Formação Acadêmica",
    certifications: "Certificações",
    certificationsDone: "certificações concluídas",
    seeAllLinkedIn: "Ver todas no LinkedIn",
    sendEmail: "Enviar Email",
    madeWith: "Feito com",
  },
};

// ───────────────────────────── English ─────────────────────────────
// Campos que não mudam de idioma (empresas, tecnologias, links, cores) vêm do português.

const enExperience: Record<
  string,
  { role: string; period: string; location?: string; description: string[] }
> = {
  droove: {
    role: "Analytics Coordinator",
    period: "Jun 2023 — Present",
    location: "Remote",
    description: [
      "TaaS (Teams as a Service) model for enterprise clients",
      "Hyperautomation with n8n, Pipefy and GenAI",
      "Creation of the D.R.I.V.E. Methodology for Analytics",
      "OKR management and Data Governance",
    ],
  },
  vallora: {
    role: "Planning and Data Manager",
    period: "Jan 2022 — Apr 2023",
    description: [
      "Leadership of Planning and BI teams",
      "Operational automation and sales auditing",
      "Definition of strategic business KPIs",
    ],
  },
  itech: {
    role: "Senior BI Analyst",
    period: "Jun 2021 — Dec 2021",
    description: [
      "Implementation of a data-driven culture",
      "Decision support for C-Level",
      "Strategic and operational dashboards",
    ],
  },
  dasa: {
    role: "Senior BI Analyst",
    period: "Jun 2021 — Dec 2021",
    description: [
      "Enterprise Business Intelligence",
      "Reports and analyses for hospital management",
    ],
  },
  mundialmix: {
    role: "Data Analyst",
    period: "Oct 2019 — Jun 2021",
    description: [
      "Data processing and integration (ETL)",
      "Consolidation of multiple data sources",
      "Development with Pentaho, Nifi, Python, Tableau Prep",
    ],
  },
  calcard: {
    role: "BI Analyst",
    period: "May 2017 — Sep 2019",
    description: [
      "KPI definition and monitoring",
      "Proactive business insights",
      "Executive reports and dashboards",
    ],
  },
  delsoft: {
    role: "Mid-level Consultant",
    period: "Mar 2013 — Mar 2016",
    description: [
      "Systems and process consulting",
      "ERP solutions implementation",
    ],
  },
};

// Mesma ordem de `pt.skillCategories`
const enSkillCategories: { title: string; skills: string[] }[] = [
  { title: "Data & BI", skills: ["Tableau", "Power BI", "SQL", "Python", "KPIs", "Data Visualization"] },
  { title: "Automation", skills: ["n8n", "Pipefy", "APIs/Webhooks", "ETL", "Pentaho", "Nifi"] },
  {
    title: "Applied AI",
    skills: [
      "LLMs & GenAI",
      "Agents & Tool Calling",
      "RAG & Embeddings",
      "Vector Databases",
      "Prompt & Context Engineering",
      "Model Evaluation",
      "AI Security & Governance",
      "D.R.I.V.E.",
    ],
  },
  {
    title: "Backend & Integrations",
    skills: ["C# / .NET", "REST APIs", "SQL Server", "SOLID", "Semantic Kernel", "LangChain / LangGraph"],
  },
  { title: "Leadership", skills: ["People Management", "OKRs", "Planning", "Data Governance", "Mentoring"] },
  { title: "Cloud", skills: ["Oracle Cloud", "AWS", "DW/Data Lake"] },
  { title: "Methodologies", skills: ["Scrum", "Kanban", "TaaS", "Agile", "Process Mapping"] },
];

// Mesma ordem de `pt.education`
const enEducation: Pick<Education, "degree" | "field" | "highlight">[] = [
  {
    degree: "MBA — Postgraduate Degree (Lato Sensu)",
    field: "Leadership and People Management",
    highlight: "Data analytics",
  },
  {
    degree: "Postgraduate Degree",
    field: "Systems Management (BI) — Computer Science and Informatics",
    highlight: "Business Intelligence and Data Analytics",
  },
];

const enProjects: Record<string, Pick<Project, "tagline" | "description" | "badge">> = {
  kedgo: {
    tagline: "AI-Powered Travel Itineraries and Costs",
    description:
      "Full-stack web app for smart trip planning. Generates personalized itineraries with Gemini AI, tracks costs by category with receipt OCR, supports multiple travelers and works 100% offline. Includes a subscription system (Stripe), referrals, promo coupons and a SuperAdmin panel.",
    badge: "In production",
  },
};

const en: SiteContent = {
  personalInfo: {
    ...pt.personalInfo,
    greeting: "Hi, I'm",
    title: "Analytics Coordinator",
    subtitle: "Analytics & Applied AI Leader",
    tagline: "10+ years turning data into strategic decisions, now with applied AI",
    shareDescription:
      "Analytics Coordinator with 10+ years turning data into strategic decisions. BI, automation, applied AI and data team leadership.",
    location: "Palhoça, SC — Brazil",
  },

  certifications: {
    total: CERTIFICATIONS_TOTAL,
    featured: [
      { name: "Artificial Intelligence — 2nd Edition", issuer: "Alura", year: "2024" },
    ],
  },

  aboutText: {
    headline: "About me",
    paragraphs: [
      "Dynamic, proactive professional with over 10 years of experience in data, working across diverse segments including retail and finance.",
      "Track record of implementing data solutions that delivered tangible results for companies, with a passion for innovations that add value to the growth of organizations and people.",
      "Solid experience leading data analysis teams and managing complex projects, with a self-taught, determined and disciplined profile in pursuit of results and goal achievement.",
      "Today I combine a data foundation with applied AI: solutions with language models, agents and document search, always with quality evaluation, security and governance built in from the design stage.",
    ],
    stats: [
      { value: "10+", label: "Years of Experience" },
      { value: "7+", label: "Companies Impacted" },
      { value: String(CERTIFICATIONS_TOTAL), label: "Certifications" },
    ],
    tags: [
      "#dataanalysis",
      "#datascience",
      "#bigdata",
      "#businessintelligence",
      "#appliedai",
      "#llm",
      "#datavisualization",
      "#peoplemanagement",
      "#leadership",
      "#recruiting",
      "#teamdevelopment",
      "#organizationalculture",
    ],
    highlights: [
      {
        icon: "target",
        title: "Leadership and Planning",
        text: "Leads and plans demands with mastery, ensuring results are delivered on time and within budget.",
      },
      {
        icon: "brain",
        title: "Problem Analysis and Process Mapping",
        text: "Performs in-depth analyses, maps processes precisely and organizes effective strategies to optimize productivity.",
      },
      {
        icon: "bar-chart-3",
        title: "Data Analysis",
        text: "Identifies patterns and suggests answers based on structured data, using KPIs to deliver actionable insights that drive strategic decisions.",
      },
      {
        icon: "trending-down",
        title: "Cost Reduction",
        text: "Contributes significantly to reducing operating costs through valuable insights and process optimization.",
      },
      {
        icon: "compass",
        title: "Data-Driven Mindset",
        text: "Promotes a data-driven work culture, providing strategic support to all teams in corporate decisions.",
      },
    ],
  },

  experiences: pt.experiences.map((exp) => ({ ...exp, ...enExperience[exp.id] })),

  skillCategories: pt.skillCategories.map((category, i) => ({ ...category, ...enSkillCategories[i] })),

  education: pt.education.map((edu, i) => ({ ...edu, ...enEducation[i] })),

  projects: pt.projects.map((project) => ({ ...project, ...enProjects[project.id] })),

  sectionTexts: {
    about: {
      title: "Data and AI leadership with a passion for",
      highlight: "turning data into impact",
    },
    experience: {
      title: "Professional Journey",
      subtitle: "10+ years building bridges between data and decisions",
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Technical stack and abilities that drive results",
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "Real applications built end to end, focused on AI, usability and scalable architecture",
    },
    education: {
      title: "Education & Certifications",
    },
    contact: {
      title: "Let's",
      highlight: "talk?",
      text: "Turning data into strategic decisions and reliable AI solutions. If you are looking for someone who connects technology, data and results — let's talk.",
    },
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  ui: {
    contact: "Contact",
    toggleMenu: "Toggle menu",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    switchLanguage: { code: "PT", label: "Switch to Portuguese" },
    sections: {
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    currentPosition: "Current position",
    scroll: "Scroll",
    viewLive: "View live",
    academic: "Academic Background",
    certifications: "Certifications",
    certificationsDone: "certifications completed",
    seeAllLinkedIn: "See all on LinkedIn",
    sendEmail: "Send Email",
    madeWith: "Made with",
  },
};

export const content: Record<Lang, SiteContent> = { pt, en };

// Versão em português, usada pelo que é estático (metadados do site e imagem de prévia do link)
export const personalInfo = pt.personalInfo;
