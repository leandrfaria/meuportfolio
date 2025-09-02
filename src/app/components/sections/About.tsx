"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { bebasNeue, oswald } from "@/app/font";
import Typewriter from "../ui/Typewriter";

type Props = { id?: string };

const aboutText =
  "Olá! Eu sou o Leandro e tenho 21 anos, atualmente trabalho como Estagiário de Analista de Sistemas (Protheus) e faço alguns projetos como Desenvolvedor Frontend. Estou no 8° período de Sistemas de Informação, com previsão de formação para jul/2026.";

type Experience = {
  title: string;
  period: string;
  bullets?: string[];
};

const EXPERIENCES: Experience[] = [
  {
    title: "Estagiário de Analista de Sistemas (Protheus)",
    period: "2024 — atual",
    bullets: [
      "Rotina de chamados, permissões e processos de compras no Protheus",
      "Mapeamento de fluxos e suporte aos usuários",
    ],
  },
  {
    title: "Estagiário de Suporte de TI",
    period: "2023 — 2024",
    bullets: [
      "Atendimento local e remoto; configuração de contas e e-mails",
      "Formatação e manutenção (notebooks/PCs)",
    ],
  },
  {
    title: "Monitor/Instrutor de Desenvolvimento Web",
    period: "2022",
    bullets: ["Apoio a alunos em HTML/CSS/JS e Git básico"],
  },
  {
    title: "Aprendiz — Área Administrativa",
    period: "2021 — 2022",
    bullets: ["Rotinas administrativas e contato com sistemas internos"],
  },
];

export default function About({ id = "sobre" }: Props) {
  const [idx, setIdx] = useState(0);
  const go = useCallback(
    (d: 1 | -1) =>
      setIdx((s) => (s + d + EXPERIENCES.length) % EXPERIENCES.length),
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const current = useMemo(() => EXPERIENCES[idx], [idx]);

  return (
    <section
      id={id}
      className="mx-auto max-w-5xl px-5 pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-14 lg:pb-16"
    >
      <h2
        className={`${bebasNeue.className} text-3xl sm:text-4xl tracking-wide text-brand-white mb-10`}
      >
        <span className="inline-block border-b-4 border-brand-green pb-1">
          sobre mim
        </span>
      </h2>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
        {/* ESQUERDA */}
        <div className="grid grid-cols-1 gap-6">
          {/* ↓ metade da altura anterior */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6 h-[180px] md:h-[210px] overflow-y-auto [scrollbar-width:thin]">
            <p
              className={`${oswald.className} text-base sm:text-lg text-white/90 leading-relaxed`}
            >
              <Typewriter text={aboutText} speed={18} startDelay={150} />
            </p>
          </div>

          {/* CURSO + STACK */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5 md:p-6 h-[170px] md:h-[180px]">
              <p className="text-xs uppercase tracking-wider text-white/60">
                curso
              </p>
              <p className="mt-1 font-semibold text-brand-white">
                Sistemas de Informação
              </p>
              <p className="mt-0.5 text-sm text-white/80">Formação em jul/26</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5 md:p-6 h-[170px] md:h-[180px]">
              <p className="text-xs uppercase tracking-wider text-white/60">
                stack
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {["Next.js", "React", "Tailwind"].map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[12px] text-white/85"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* DIREITA: experiência */}
        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5 md:p-6 h-[374px] md:h-[414px] flex flex-col">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs uppercase tracking-wider text-white/60">
              experiência
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Experiência anterior"
                className="h-8 w-8 rounded-md border border-white/10 bg-white/[0.06] text-sm text-white/85 transition hover:text-brand-green"
              >
                ‹
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Próxima experiência"
                className="h-8 w-8 rounded-md border border-white/10 bg-white/[0.06] text-sm text-white/85 transition hover:text-brand-green"
              >
                ›
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 [scrollbar-width:thin]">
            <h3 className="text-lg font-semibold text-brand-white">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">{current.period}</p>
            {current.bullets?.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-white/85">
                {current.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="pt-3 text-xs text-white/60">
            {idx + 1} / {EXPERIENCES.length}
          </div>
        </div>
      </div>
    </section>
  );
}
