"use client";

import { bebasNeue } from "@/app/font";
import { useEffect, useMemo, useState } from "react";
import ProjectCardMini from "../ui/ProjectCardMini";
import { Project } from "../ui/ProjectCardCompact";

type Props = { title?: string; items: Project[] };

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function OtherProjectsCarousel({ title = "outros projetos", items }: Props) {
  const [perView, setPerView] = useState(2);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setPerView(4);
      else if (window.innerWidth >= 768) setPerView(3);
      else setPerView(2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slides = useMemo(() => chunk(items, perView), [items, perView]);
  const max = Math.max(0, slides.length - 1);

  useEffect(() => {
    setSlide((s) => Math.min(s, max));
  }, [max]);

  return (
    // antes: py-20 md:py-24 lg:py-28
    // agora: sem padding-top para colar melhor na seção anterior
    <section className="mx-auto max-w-5xl px-5 pt-0 pb-20 md:pb-24 lg:pb-28">
      <div className="mb-8 flex items-center justify-between">
        <h2 className={`${bebasNeue.className} text-3xl sm:text-4xl tracking-wide text-brand-white`}>
          <span className="inline-block border-b-4 border-brand-green pb-1">{title}</span>
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSlide((s) => Math.max(0, s - 1))}
            disabled={slide === 0}
            className="h-8 w-8 rounded-md border border-white/10 bg-white/[0.06] text-sm text-white/85 transition hover:text-brand-green disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={() => setSlide((s) => Math.min(max, s + 1))}
            disabled={slide === max}
            className="h-8 w-8 rounded-md border border-white/10 bg-white/[0.06] text-sm text-white/85 transition hover:text-brand-green disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ width: `${slides.length * 100}%`, transform: `translateX(-${slide * (100 / slides.length)}%)` }}
        >
          {slides.map((group, i) => (
            <div key={i} className="w-full flex-shrink-0 px-1">
              <div className="flex items-stretch justify-start gap-3 sm:gap-4">
                {group.map((p) => (
                  <ProjectCardMini key={p.title} p={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
