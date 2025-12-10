import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "John Developer",
      title: "Full-Stack Developer & Designer",
      subtitle: "I craft digital experiences that merge beautiful design with robust functionality. Based in São Paulo, working globally.",
      cta: "Let's Talk",
      scroll: "Scroll to explore",
    },
    about: {
      title: "About Me",
      bio: "I'm a passionate developer with over 5 years of experience building web applications. I specialize in React, TypeScript, and Node.js, creating seamless user experiences that delight users and drive business results.",
      techStack: "Tech Stack",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my recent work",
      viewProject: "View Project",
      items: [
        {
          title: "E-Commerce Platform",
          description: "A full-featured online store with real-time inventory and payment processing.",
          tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
        },
        {
          title: "Task Management App",
          description: "Collaborative project management tool with real-time updates.",
          tags: ["Next.js", "TypeScript", "Prisma"],
        },
        {
          title: "Analytics Dashboard",
          description: "Data visualization platform for business intelligence.",
          tags: ["React", "D3.js", "Python", "FastAPI"],
        },
        {
          title: "Social Media App",
          description: "Mobile-first social platform with live streaming features.",
          tags: ["React Native", "Firebase", "WebRTC"],
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Senior Full-Stack Developer",
          company: "Tech Startup Inc.",
          period: "2022 - Present",
          description: "Leading the development of scalable web applications, mentoring junior developers, and architecting microservices solutions.",
        },
        {
          role: "Frontend Developer",
          company: "Digital Agency Co.",
          period: "2020 - 2022",
          description: "Built responsive web applications for Fortune 500 clients using React and TypeScript.",
        },
        {
          role: "Junior Developer",
          company: "Software House",
          period: "2019 - 2020",
          description: "Developed and maintained client websites, learned best practices in agile development.",
        },
      ],
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Have a project in mind? I'd love to hear about it.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
      },
      socials: "Find me on",
    },
    footer: {
      made: "Made with",
      by: "by John Developer",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "John Developer",
      title: "Desenvolvedor Full-Stack & Designer",
      subtitle: "Crio experiências digitais que unem design bonito com funcionalidade robusta. Baseado em São Paulo, trabalhando globalmente.",
      cta: "Vamos Conversar",
      scroll: "Role para explorar",
    },
    about: {
      title: "Sobre Mim",
      bio: "Sou um desenvolvedor apaixonado com mais de 5 anos de experiência construindo aplicações web. Especializo-me em React, TypeScript e Node.js, criando experiências de usuário impecáveis que encantam usuários e geram resultados de negócio.",
      techStack: "Tecnologias",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Uma seleção do meu trabalho recente",
      viewProject: "Ver Projeto",
      items: [
        {
          title: "Plataforma E-Commerce",
          description: "Loja online completa com inventário em tempo real e processamento de pagamentos.",
          tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
        },
        {
          title: "App de Gestão de Tarefas",
          description: "Ferramenta colaborativa de gerenciamento de projetos com atualizações em tempo real.",
          tags: ["Next.js", "TypeScript", "Prisma"],
        },
        {
          title: "Dashboard de Analytics",
          description: "Plataforma de visualização de dados para inteligência de negócios.",
          tags: ["React", "D3.js", "Python", "FastAPI"],
        },
        {
          title: "App de Rede Social",
          description: "Plataforma social mobile-first com recursos de streaming ao vivo.",
          tags: ["React Native", "Firebase", "WebRTC"],
        },
      ],
    },
    experience: {
      title: "Experiência",
      items: [
        {
          role: "Desenvolvedor Full-Stack Sênior",
          company: "Tech Startup Inc.",
          period: "2022 - Presente",
          description: "Liderando o desenvolvimento de aplicações web escaláveis, mentorando desenvolvedores juniores e arquitetando soluções de microserviços.",
        },
        {
          role: "Desenvolvedor Frontend",
          company: "Digital Agency Co.",
          period: "2020 - 2022",
          description: "Construí aplicações web responsivas para clientes Fortune 500 usando React e TypeScript.",
        },
        {
          role: "Desenvolvedor Júnior",
          company: "Software House",
          period: "2019 - 2020",
          description: "Desenvolvi e mantive sites de clientes, aprendi melhores práticas em desenvolvimento ágil.",
        },
      ],
    },
    contact: {
      title: "Vamos Conectar",
      subtitle: "Tem um projeto em mente? Adoraria saber sobre ele.",
      form: {
        name: "Seu Nome",
        email: "Seu Email",
        message: "Sua Mensagem",
        send: "Enviar Mensagem",
      },
      socials: "Me encontre em",
    },
    footer: {
      made: "Feito com",
      by: "por John Developer",
      rights: "Todos os direitos reservados.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
