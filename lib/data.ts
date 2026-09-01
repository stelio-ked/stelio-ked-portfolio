// ═══════════════════════════════════════════════════════════
// Dados do portfólio — Fonte única de verdade
// Edite apenas este arquivo para atualizar conteúdo do site
// ═══════════════════════════════════════════════════════════

export const personalInfo = {
  name: "Stelio Ked",
  greeting: "Olá, eu sou",
  title: "Coordenador de Analytics",
  subtitle: "Data & Analytics Leader",
  tagline: "+10 anos transformando dados em decisões estratégicas",
  location: "Palhoça, SC — Brasil",
  email: "theoked25@gmail.com",
  whatsapp: "5548988076962", // Number without +, spaces or dashes for API link
  whatsappDisplay: "+55 48 98807-6962",
  linkedin: "https://www.linkedin.com/in/stelio-ked/",
  avatarUrl: "/images/avatar-final.webp",
};

export const aboutText = {
  headline: "Sobre mim",
  paragraphs: [
    "Profissional dinâmico e proativo com mais de 10 anos de experiência na área de dados, atuando em diversos segmentos, incluindo varejo e finanças.",
    "Histórico de sucesso na implementação de soluções de dados que geraram resultados tangíveis para as empresas, sendo apaixonado por buscar inovações que agreguem valor ao crescimento das empresas e pessoas.",
    "Experiência consolidada em liderança de equipes de análise de dados e gerenciamento de projetos complexos, mantendo um perfil autodidata, determinado e disciplinado na busca por resultados e superação de metas."
  ],
  stats: [
    { value: "10+", label: "Anos de Experiência" },
    { value: "7+", label: "Empresas Impactadas" },
    { value: "25", label: "Certificações" },
  ],
  tags: ["#analisededados", "#cienciadedados", "#bigdata", "#businessintelligence", "#datavisualization", "#gestãodepessoas", "#liderança", "#recrutamentoeseletração", "#desenvolvimentodeequipes", "#culturaorganizacional"],
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

};

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

export const experiences: Experience[] = [
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
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
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
    title: "AI & Innovation",
    icon: "brain",
    skills: ["GenAI", "Prompt Engineering", "Inteligência Artificial", "D.R.I.V.E."],
    color: "violet",
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
    color: "blue",
  },
  {
    title: "Metodologias",
    icon: "layout-grid",
    skills: ["Scrum", "Kanban", "TaaS", "Agile", "Mapeamento de Processos"],
    color: "amber",
  },
];

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  highlight?: string;
}

export const education: Education[] = [
  {
    institution: "Escola Conquer",
    degree: "MBA — Pós-Graduação Latu Sensu",
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
];

export const certifications = {
  total: 25,
  featured: [
    { name: "Inteligência Artificial 2ª Edição", issuer: "Alura", year: "2024" },
  ],
};

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string; // ex: "Em produção", "Beta"
  color: string; // classe de cor Tailwind para o accent
}

export const projects: Project[] = [
  {
    id: "kedgo",
    name: "KedGo!",
    tagline: "Roteiro e Custos de Viagem com IA",
    description:
      "App web full-stack de planejamento de viagens inteligente. Gera roteiros personalizados com Gemini AI, controla custos por categoria com OCR de recibos, suporta múltiplos viajantes e funciona 100% offline. Inclui sistema de assinaturas (Stripe), referral, cupons promocionais e painel SuperAdmin.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Gemini AI", "Stripe", "Vite"],
    liveUrl: "https://kedgo.app",
    badge: "Em produção",
    color: "cyan",
  },
];

export const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Formação", href: "#education" },
  { label: "Contato", href: "#contact" },
];
