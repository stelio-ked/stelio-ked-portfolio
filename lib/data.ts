// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// Dados do portfÃ³lio â€” Fonte Ãºnica de verdade
// Edite apenas este arquivo para atualizar conteÃºdo do site
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

export const personalInfo = {
  name: "Stelio Ked",
  greeting: "OlÃ¡, eu sou",
  title: "Coordenador de Analytics",
  subtitle: "Data & Analytics Leader",
  tagline: "+10 anos transformando dados em decisÃµes estratÃ©gicas",
  location: "PalhoÃ§a, SC â€” Brasil",
  email: "theoked25@gmail.com",
  whatsapp: "5548988076962", // Number without +, spaces or dashes for API link
  whatsappDisplay: "+55 48 98807-6962",
  linkedin: "https://www.linkedin.com/in/stelio-ked/",
  avatarUrl: "/images/avatar-final.webp",
};

export const aboutText = {
  headline: "Sobre mim",
  paragraphs: [
    "Profissional dinÃ¢mico e proativo com mais de 10 anos de experiÃªncia na Ã¡rea de dados, atuando em diversos segmentos, incluindo varejo e finanÃ§as.",
    "HistÃ³rico de sucesso na implementaÃ§Ã£o de soluÃ§Ãµes de dados que geraram resultados tangÃ­veis para as empresas, sendo apaixonado por buscar inovaÃ§Ãµes que agreguem valor ao crescimento das empresas e pessoas.",
    "ExperiÃªncia consolidada em lideranÃ§a de equipes de anÃ¡lise de dados e gerenciamento de projetos complexos, mantendo um perfil autodidata, determinado e disciplinado na busca por resultados e superaÃ§Ã£o de metas."
  ],
  stats: [
    { value: "10+", label: "Anos de ExperiÃªncia" },
    { value: "7+", label: "Empresas Impactadas" },
    { value: "25", label: "CertificaÃ§Ãµes" },
  ],
  tags: ["#analisededados", "#cienciadedados", "#bigdata", "#businessintelligence", "#datavisualization", "#gestÃ£odepessoas", "#lideranÃ§a", "#recrutamentoeseletraÃ§Ã£o", "#desenvolvimentodeequipes", "#culturaorganizacional"],
  highlights: [
    {
      icon: "target",
      title: "LideranÃ§a e Planejamento",
      text: "Lidera e planeja demandas com maestria, garantindo a entrega de resultados dentro do prazo e do orÃ§amento.",
    },
    {
      icon: "brain",
      title: "AnÃ¡lise de Problemas e Mapeamento de Processos",
      text: "Realiza anÃ¡lises profundas, mapeia processos com precisÃ£o e organiza estratÃ©gias eficazes para otimizar a produtividade.",
    },
    {
      icon: "bar-chart-3",
      title: "AnÃ¡lise de Dados",
      text: "Identifica padrÃµes e sugere respostas baseadas em dados estruturados, utilizando KPIs para fornecer insights acionÃ¡veis que impulsionam decisÃµes estratÃ©gicas.",
    },
    {
      icon: "trending-down",
      title: "ReduÃ§Ã£o de Custos",
      text: "Contribui significativamente para a reduÃ§Ã£o de custos operacionais atravÃ©s de insights valiosos e otimizaÃ§Ã£o de processos.",
    },
    {
      icon: "compass",
      title: "OrientaÃ§Ã£o por Dados",
      text: "Promove a cultura de trabalho orientada por dados, fornecendo suporte estratÃ©gico a todas as equipes nas decisÃµes corporativas.",
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
    period: "Jun 2023 â€” Presente",
    location: "Remoto",
    isActive: true,
    description: [
      "Modelo TaaS (Teams as a Service) para clientes enterprise",
      "Hyperautomation com n8n, Pipefy e GenAI",
      "CriaÃ§Ã£o da Metodologia D.R.I.V.E. para Analytics",
      "GestÃ£o de OKRs e Data Governance",
    ],
    techStack: ["n8n", "Pipefy", "GenAI", "SQL", "Python", "Tableau", "Power BI"],
  },
  {
    id: "vallora",
    role: "Gerente de Planejamento e Dados",
    company: "Vallora BenefÃ­cios",
    period: "Jan 2022 â€” Abr 2023",
    location: "PalhoÃ§a, SC",
    isActive: false,
    description: [
      "LideranÃ§a de equipes de Planejamento e BI",
      "AutomaÃ§Ã£o operacional e auditoria de vendas",
      "DefiniÃ§Ã£o de KPIs estratÃ©gicos do negÃ³cio",
    ],
    techStack: ["Power BI", "SQL", "Excel AvanÃ§ado", "Tableau"],
  },
  {
    id: "itech",
    role: "Analista de BI SÃªnior",
    company: "iTech Care",
    period: "Jun 2021 â€” Dez 2021",
    location: "SÃ£o Paulo, SP",
    isActive: false,
    description: [
      "ImplementaÃ§Ã£o de cultura data-driven",
      "Suporte decisÃ³rio para C-Level",
      "Dashboards estratÃ©gicos e operacionais",
    ],
    techStack: ["Tableau", "SQL", "Python"],
  },
  {
    id: "dasa",
    role: "Analista de BI SÃªnior",
    company: "Dasa Empresas",
    period: "Jun 2021 â€” Dez 2021",
    location: "SÃ£o Paulo, SP",
    isActive: false,
    description: [
      "Business Intelligence enterprise",
      "RelatÃ³rios e anÃ¡lises para gestÃ£o hospitalar",
    ],
    techStack: ["Power BI", "SQL", "ETL"],
  },
  {
    id: "mundialmix",
    role: "Analista de Dados",
    company: "Grupo MundialMix",
    period: "Out 2019 â€” Jun 2021",
    location: "PalhoÃ§a, SC",
    isActive: false,
    description: [
      "Tratamento e IntegraÃ§Ã£o de Dados (ETL)",
      "ConsolidaÃ§Ã£o de diversas fontes de dados",
      "Desenvolvimento com Pentaho, Nifi, Python, Tableau Prep",
    ],
    techStack: ["Pentaho", "Nifi", "Python", "Tableau Prep", "Oracle Cloud"],
  },
  {
    id: "calcard",
    role: "Analista de BI",
    company: "CALCARD",
    period: "Mai 2017 â€” Set 2019",
    isActive: false,
    description: [
      "DefiniÃ§Ã£o e monitoramento de KPIs",
      "GeraÃ§Ã£o de insights proativos para o negÃ³cio",
      "Reportes executivos e dashboards",
    ],
    techStack: ["SQL", "Excel", "Tableau"],
  },
  {
    id: "delsoft",
    role: "Consultor Pleno",
    company: "DELSOFT Sistemas",
    period: "Mar 2013 â€” Mar 2016",
    isActive: false,
    description: [
      "Consultoria de sistemas e processos",
      "ImplantaÃ§Ã£o de soluÃ§Ãµes ERP",
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
    title: "AutomaÃ§Ã£o",
    icon: "zap",
    skills: ["n8n", "Pipefy", "APIs/Webhooks", "ETL", "Pentaho", "Nifi"],
    color: "indigo",
  },
  {
    title: "AI & Innovation",
    icon: "brain",
    skills: ["GenAI", "Prompt Engineering", "InteligÃªncia Artificial", "D.R.I.V.E."],
    color: "violet",
  },
  {
    title: "LideranÃ§a",
    icon: "users",
    skills: ["GestÃ£o de Pessoas", "OKRs", "Planejamento", "Data Governance", "Mentoria"],
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
    degree: "MBA â€” PÃ³s-GraduaÃ§Ã£o Latu Sensu",
    field: "LideranÃ§a e GestÃ£o de Pessoas",
    period: "2022 â€” 2023",
    highlight: "AnalÃ­tica de dados",
  },
  {
    institution: "Universidade Anhembi Morumbi",
    degree: "PÃ³s-GraduaÃ§Ã£o",
    field: "GestÃ£o de Sistemas (BI) â€” CiÃªncias da ComputaÃ§Ã£o e InformÃ¡tica",
    period: "2015 â€” 2016",
    highlight: "Business Intelligence e AnalÃ­tica de dados",
  },
];

export const certifications = {
  total: 25,
  featured: [
    { name: "InteligÃªncia Artificial 2Âª EdiÃ§Ã£o", issuer: "Alura", year: "2024" },
  ],
};

export const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Experi\u00eancia", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Forma\u00e7\u00e3o", href: "#education" },
  { label: "Contato", href: "#contact" },
];


// --- Projects ---

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "kedgo",
    name: "KedGo!",
    tagline: "Roteiro e Custos de Viagem com IA",
    description:
      "App web full-stack de planejamento de viagens inteligente. Gera roteiros personalizados com Gemini AI, controla custos por categoria com OCR de recibos, suporta m\u00faltiplos viajantes e funciona 100% offline. Inclui sistema de assinaturas (Stripe), referral, cup\u00f5es promocionais e painel SuperAdmin.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Gemini AI",
      "Stripe",
      "Vite",
    ],
    liveUrl: "https://kedgo.app",
    badge: "Em produ\u00e7\u00e3o",
    color: "cyan",
  },
];

