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
      name: "Guilherme Guaita",
      title: "Full-Stack Developer & QA",
      subtitle: "I create digital experiences that blend beautiful design with robust functionality. Based in Florianópolis, working globally.",
      cta: "Let's Talk",
      scroll: "Scroll to explore",
    },
    about: {
      title: "About Me",
      bio: "I am a passionate software developer and Quality Assurance (QA) analyst with over 3 years of experience building and testing web applications. I specialize in React, TypeScript, JavaScript, Node.js, and Robot Framework, creating seamless user experiences that delight users and drive business results.",
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
          role: "Analisyt quality Jr",
          company: "Softplan",
          period: "2024 - Present",
          description: "I work on creating and executing automated tests using Robot Framework, ensuring the quality and functionality of applications developed by the team.",
        },
        {
          role: "IT Technician - Help Desk",
          company: "Softplan",
          period: "2023 - 2024",
          description: "I provided top-notch technical support to end users, resolving hardware and software issues, ensuring customer satisfaction and operational efficiency.",
        },
        {
          role: "Jovem Aprendiz - Infraestrutura",
          company: "Softplan",
          period: "2022 - 2023",
          description: "It was where I started my journey in technology, developing and maintaining client websites, learning the best practices in agile development.",
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
      by: "by Guilherme Guaita de Souza",
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
      name: "Guilherme Guaita",
      title: "Desenvolvedor Full-Stack & QA",
      subtitle: "Crio experiências digitais que unem design bonito com funcionalidade robusta. Baseado em Florianópolis, trabalhando globalmente.",
      cta: "Vamos Conversar",
      scroll: "Role para explorar",
    },
    about: {
      title: "Sobre Mim",
      bio: "Sou um desenvolvedor e analista de qualidade de Software (QA) apaixonado por tecnologia, com mais de 3 anos de experiência construindo e testando aplicações web. Especializo-me em React, TypeScript, JavaScript, Node.js e Robot Framework criando experiências de usuário impecáveis que encantam usuários e geram resultados de negócio.",
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
          role: "Analista de QA Jr",
          company: "Softplan",
          period: "2024 - Presente",
          description: "Atuo na criação e execução de testes automatizados utilizando Robot Framework, garantindo a qualidade e a funcionalidade das aplicações desenvolvidas pela equipe.",
        },
        {
          role: "Técnico de TI - Help Desk",
          company: "Softplan",
          period: "2023 - 2024",
          description: "Forneci suporte técnico de primeira linha para usuários finais, resolvendo problemas de hardware e software, garantindo a satisfação do cliente e a eficiência operacional.",
        },
        {
          role: "Jovem Aprendiz - Infraestrutura",
          company: "Softplan",
          period: "2022 - 2023",
          description: "Foi onde comecei minha jornada na tecnologia, desenvolvendo e mantendo sites de clientes, aprendendo as melhores práticas em desenvolvimento ágil.",
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
      by: "por Guilherme Guaita de Souza",
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
