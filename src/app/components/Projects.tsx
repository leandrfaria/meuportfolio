// src/app/components/Projects.tsx
import ProjectsPrimary from "./ProjectsPrimary";
import OtherProjectsCarousel from "./OtherProjectsCarousel";
import type { Project } from "./ProjectCardCompact";

const principais: Project[] = [
  {
    title: "ScoreIt",
    summary:
      "ScoreIt é uma plataforma web para avaliar filmes, séries e músicas, ver opiniões de amigos e descobrir novos conteúdos.",
    tags: ["Next.js", "TypeScript", "Tailwind", "API"],
    cover: "/covers/scoreit.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Nutrivo",
    summary:
      "Nutrivo é uma plataforma de nutrição com interface moderna que cria planos alimentares personalizados conforme os hábitos, objetivos e restrições do usuário.",
    tags: ["Next.js 15", "Tailwind v4", "Inteligência Artificial"],
    cover: "/projetos/nutrivo.png", // ✅ arquivo em public/projetos/nutrivo.png
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Carreira FC",
    summary:
      "Página de time de futebol para modo carreira do FIFA, exibindo partidas, calendário e estatísticas de forma prática e organizada.",
    tags: ["Next.js", "UI/UX", "Tailwind"],
    cover: "/covers/carreirafc.png",
    demoUrl: "#",
    repoUrl: "#",
  },
];

const outros: Project[] = [
  {
    title: "UI Components Lab",
    summary: "Biblioteca de componentes com animações e dark mode.",
    tags: ["React", "Framer Motion", "A11y"],
    cover: "/covers/components.png",
    repoUrl: "#",
  },
  {
    title: "Landing Protheus",
    summary: "Landing page de módulos Protheus.",
    tags: ["Next.js", "Tailwind"],
    cover: "/covers/protheus.png",
    repoUrl: "#",
  },
  {
    title: "Movies Client",
    summary: "Cliente de filmes com filtros e autenticação.",
    tags: ["React", "TypeScript"],
    cover: "/covers/movies.png",
    repoUrl: "#",
  },
  {
    title: "Design Tokens",
    summary: "Sistema de tokens com Tailwind v4.",
    tags: ["Tailwind", "Design System"],
    cover: "/covers/tokens.png",
    repoUrl: "#",
  },
  {
    title: "Charts Playground",
    summary: "Gráficos interativos para datasets pequenos.",
    tags: ["React", "Charts"],
    cover: "/covers/charts.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Forms & Validations",
    summary: "Padrões de formulários com validação.",
    tags: ["React", "Zod", "RHF"],
    // cover opcional
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
