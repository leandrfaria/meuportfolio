"use client";

import { bebasNeue } from "@/app/font";
import { useEffect, useMemo, useRef, useState } from "react";
import ProjectCardMini from "../ui/ProjectCardMini";
import { Project } from "../ui/ProjectCardCompact";

type Props = { title?: string; items: Project[] };

/* --- Dropdown compacto --- */
function useClickOutside<T extends HTMLElement>(onOutside: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) onOutside();
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onOutside();
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [onOutside]);
  return ref;
}

const CATEGORIES = ["Todas", "Frontend", "Java", "Python", "Kotlin"] as const;
type Category = (typeof CATEGORIES)[number];

function FilterDropdown({
  value,
  onChange,
}: { value: Category; onChange: (v: Category) => void }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useClickOutside<HTMLDivElement>(() => setOpen(false));
  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center justify-between gap-2 rounded-md border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/90 hover:border-brand-green/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60 min-w-[140px]"
      >
        <span className="truncate">{value}</span>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className={`transition ${open ? "rotate-180" : ""}`} aria-hidden>
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.127l3.71-3.896a.75.75 0 111.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={0}
          className="absolute right-0 z-10 mt-2 w-[180px] overflow-hidden rounded-md border border-white/12 bg-brand-black/95 backdrop-blur shadow-[0_12px_30px_rgba(0,0,0,.35)]"
        >
          {CATEGORIES.map((opt) => {
            const active = opt === value;
            return (
              <li key={opt}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => { onChange(opt); setOpen(false); }}
                  className={`w-full px-3 py-2 text-left text-[13px] transition ${active ? "bg-brand-green/15 text-brand-green" : "text-white/90 hover:bg-white/[0.06]"}`}
                >
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* --- Componente principal (carrossel contínuo com step 2) --- */
export default function OtherProjectsCarousel({ title = "outros projetos", items }: Props) {
  // responsivo: quantos cabem, largura do card, gap e step em cards
  const [perView, setPerView] = useState(2);
  const [cardW, setCardW] = useState(170);
  const [gapPx, setGapPx] = useState(12);
  const [stepCards, setStepCards] = useState(1); // mobile = 1, md+ = 2

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) { setPerView(4); setCardW(220); setGapPx(16); setStepCards(2); }
      else if (w >= 768) { setPerView(3); setCardW(200); setGapPx(16); setStepCards(2); }
      else if (w >= 640) { setPerView(2); setCardW(180); setGapPx(16); setStepCards(1); }
      else { setPerView(2); setCardW(170); setGapPx(12); setStepCards(1); }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // filtro
  const [cat, setCat] = useState<Category>("Todas");
  const FRONTEND_TAGS = useMemo(
    () =>
      new Set(
        ["next.js", "next.js 15", "react", "typescript", "javascript", "tailwind", "tailwind v4", "ui/ux", "api", "inteligência artificial"]
          .map((s) => s.toLowerCase())
      ),
    []
  );
  const isFrontend = (p: Project) => p.tags.some((t) => FRONTEND_TAGS.has(t.toLowerCase()));

  const filtered = useMemo(() => {
    switch (cat) {
      case "Frontend": return items.filter(isFrontend);
      case "Java":     return items.filter((p) => p.tags.some((t) => t.toLowerCase() === "java"));
      case "Python":   return items.filter((p) => p.tags.some((t) => t.toLowerCase() === "python"));
      case "Kotlin":   return items.filter((p) => p.tags.some((t) => t.toLowerCase() === "kotlin"));
      default:         return items;
    }
  }, [cat, items]);

  // índice do 1º card visível; move N cards por clique (N = stepCards)
  const [i, setI] = useState(0);
  const stepPx = (cardW + gapPx);
  const maxI = Math.max(0, filtered.length - perView);

  useEffect(() => setI(0), [cat, perView, filtered.length]);

  const goPrev = () => setI((s) => Math.max(0, s - stepCards));
  const goNext = () => setI((s) => Math.min(maxI, s + stepCards));

  return (
    <section className="mx-auto max-w-5xl px-5 pt-0 pb-20 md:pb-24 lg:pb-28">
      <div className="mb-4">
        <h2 className={`${bebasNeue.className} text-3xl sm:text-4xl tracking-wide text-brand-white`}>
          <span className="inline-block border-b-4 border-brand-green pb-1">{title}</span>
        </h2>
      </div>

      {/* filtro + setas */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <FilterDropdown value={cat} onChange={setCat} />
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            disabled={i === 0}
            className="h-8 w-8 rounded-md border border-white/10 bg-white/[0.06] text-sm text-white/85 transition hover:text-brand-green disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            disabled={i >= maxI}
            className="h-8 w-8 rounded-md border border-white/10 bg-white/[0.06] text-sm text-white/85 transition hover:text-brand-green disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </div>

      {/* trilho contínuo */}
      {filtered.length === 0 ? (
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
          Nenhum projeto nesta categoria.
        </div>
      ) : (
        <div className="overflow-hidden">
          <div
            className="flex gap-3 sm:gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${i * stepPx}px)` }}
          >
            {filtered.map((p, idx) => (
              <div key={`${p.title}-${idx}`} className="shrink-0">
                <ProjectCardMini p={p} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
