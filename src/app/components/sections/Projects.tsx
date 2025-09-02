// src/app/components/Projects.tsx
import ProjectsPrimary from "../ui/ProjectsPrimary";
import type { Project } from "../ui/ProjectCardCompact";
import OtherProjectsCarousel from "../ui/OtherProjectsCarousel";

const principais: Project[] = [
  {
    title: "ScoreIt",
    summary:
      "ScoreIt é uma plataforma web para avaliar filmes, séries e músicas, ver opiniões de amigos e descobrir novos conteúdos.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Java", "API"],
    cover: "/projetos/scoreit.png",
    demoUrl: "https://scoreit.vercel.app/pt",
    repoUrl: "https://github.com/leandrfaria/scoreIt",
  },
  {
    title: "Nutrivo",
    summary:
      "Nutrivo é uma plataforma que cria planos alimentares personalizados conforme os hábitos, objetivos e restrições do usuário.",
    tags: ["Next.js 15", "Tailwind v4", "Inteligência Artificial"],
    cover: "/projetos/nutrivo.png",
    demoUrl: "https://nutriv.vercel.app/",
    repoUrl: "https://github.com/leandrfaria/nutrivo",
  },
  {
    title: "Carreira FC",
    summary:
      "Página de time de futebol para modo carreira do FIFA, exibindo partidas, calendário e estatísticas de forma prática e organizada.",
    tags: ["Next.js", "UI/UX", "Tailwind"],
    cover: "/covers/carreirafc.png",
    demoUrl: "#",
    repoUrl: "https://github.com/leandrfaria/career-mode",
  },
];

const outros: Project[] = [
  {
    title: "TarefasPlus",
    summary: "Plataforma web simples para gerenciar tarefas.",
    tags: ["React", "TypeScript"],
    cover: "/projetos/react.png",
    repoUrl: "https://github.com/leandrfaria/tarefasplus",
  },
  {
    title: "GamesPedia",
    summary: "Enciclopédia sobre videogames.",
    tags: ["React", "TypeScript"],
    cover: "/projetos/react.png",
    repoUrl: "https://github.com/leandrfaria/gamespedia",
  },
  {
    title: "MyReposits",
    summary:
      "Plataforma que gerencia repositórios do GitHub via API.",
    tags: ["React", "Javascript", "API"],
    cover: "/projetos/react.png",
    repoUrl: "https://github.com/leandrfaria/MyReposits",
  },

  {
    title: "Locação de Veículos",
    summary: "Aplicação de locação de veículos em microsserviços.",
    tags: ["Java", "Docker"],
    cover: "/projetos/java.png",
    repoUrl: "https://github.com/leandrfaria/API_Locacao_de_Veiculos",
  },
  {
    title: "Árvore Binária de Busca",
    summary:
      "Projeto em Java de Árvore Binária de Busca não balanceada.",
    tags: ["Java"],
    cover: "/projetos/java.png",
    repoUrl: "https://github.com/leandrfaria/ArvoreBinariaJava",
  },
  {
    title: "Aulas Java",
    summary: "Exercícios de Java resolvidos em aula.",
    tags: ["Java"],
    cover: "/projetos/java.png",
    repoUrl: "https://github.com/leandrfaria/aulas_java",
  },

  {
    title: "Chat em Tempo Real",
    summary:
      "Sistema de chat em tempo real com sockets, suporte a mensagens públicas e privadas.",
    tags: ["Python"],
    cover: "/projetos/python.png",
    repoUrl: "https://github.com/leandrfaria/Chat",
  },
  {
    title: "Calculadora RMC",
    summary: "Calculadora no terminal para funções e matrizes.",
    tags: ["Python"],
    cover: "/projetos/python.png",
    repoUrl: "https://github.com/leandrfaria/calculadora_rmc",
  },
  {
    title: "Batalha Naval",
    summary:
      "Batalha Naval PvP com navios horizontais e pontuação por destruição.",
    tags: ["Python"],
    cover: "/projetos/python.png",
    repoUrl: "https://github.com/leandrfaria/batalha-naval",
  },

  {
    title: "MedPro",
    summary: "Aplicação mobile de saúde.",
    tags: ["Kotlin", "Mobile"],
    cover: "/projetos/kotlin.png",
    repoUrl: "https://github.com/leandrfaria/Pokedex",
  },
];

export default function Projects() {
  return (
    <>
      <ProjectsPrimary items={principais} />
      <OtherProjectsCarousel items={outros} />
    </>
  );
}
