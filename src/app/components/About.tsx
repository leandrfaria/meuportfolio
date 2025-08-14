"use client";

import { oswald, bebasNeue } from "../font"; // já que você adicionou as fontes
import Typewriter from "./Typewriter";

type Props = {
  id?: string;
};

const aboutText =
  "Olá! Eu sou o Leandro e tenho 21 anos, atualmente trabalho como Estagiário de Analista de Sistemas (Protheus) e faço alguns projetos como Desenvolvedor Frontend. Estou no 8° período de Sistemas de Informação, com previsão de formação para jul/2027.";

export default function About({ id = "sobre" }: Props) {
  return (
    <section
      id={id}
      className="mx-auto max-w-5xl px-5 py-14 md:py-16 lg:py-20"
    >
      {/* título da seção */}
      <h2
        className={`${bebasNeue.className} text-3xl sm:text-4xl tracking-wide text-brand-white`}
      >
        <span className="inline-block border-b-4 border-brand-green pb-1">
          sobre mim
        </span>
      </h2>

      {/* grid principal */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr]">
        {/* bloco de texto com efeito de digitação */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
          <p className={`${oswald.className} text-base sm:text-lg text-white/90 leading-relaxed`}>
            <Typewriter text={aboutText} speed={18} startDelay={150} />
          </p>
        </div>

        {/* mini-métricas/infos */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs uppercase tracking-wider text-white/60">função</p>
            <p className="mt-1 font-semibold text-brand-white">Estagiário (Protheus)</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs uppercase tracking-wider text-white/60">stack</p>
            <p className="mt-1 font-semibold text-brand-white">Next.js • React • TS • Tailwind</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs uppercase tracking-wider text-white/60">curso</p>
            <p className="mt-1 font-semibold text-brand-white">SI (8º período)</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs uppercase tracking-wider text-white/60">formação</p>
            <p className="mt-1 font-semibold text-brand-white">jul/2027</p>
          </div>
        </div>
      </div>
    </section>
  );
}
