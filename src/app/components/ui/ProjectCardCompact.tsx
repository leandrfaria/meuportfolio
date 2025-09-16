"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  cover?: string;
  demoUrl?: string;
  repoUrl?: string;
  images?: string[];
  longDescription?: string;
};

type Props = { p: Project; size?: "md" | "sm" };

function ProjectModal({ open, onClose, p }: { open: boolean; onClose: () => void; p: Project }) {
  const imgs = useMemo(
    () => (p.images?.length ? p.images : p.cover ? [p.cover] : []).map((src) => (src.startsWith("/") ? src : `/${src}`)),
    [p.images, p.cover]
  );
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    setIdx(0);
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-[min(92vw,980px)] max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-brand-black shadow-[0_30px_90px_rgba(0,0,0,.6)]">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 h-9 w-9 rounded-md border border-white/15 bg-white/10 text-white/90 transition hover:text-brand-green"
        >
          ✕
        </button>

        <div className="relative bg-white/[0.03]">
          <div className="aspect-[16/9] w-full overflow-hidden">
            {imgs.length ? (
              <Image
                key={imgs[idx]}
                src={imgs[idx]}
                alt={`Imagem ${idx + 1} de ${p.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 980px"
                priority
              />
            ) : (
              <div className="grid h-full place-items-center text-white/60 text-sm">sem imagens</div>
            )}
          </div>

          {imgs.length > 1 && (
            <>
              <button
                onClick={() => setIdx((s) => (s - 1 + imgs.length) % imgs.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-md border border-white/15 bg-black/40 text-white/90 transition hover:text-brand-green"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                onClick={() => setIdx((s) => (s + 1) % imgs.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-md border border-white/15 bg-black/40 text-white/90 transition hover:text-brand-green"
                aria-label="Próximo"
              >
                ›
              </button>
              <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
                {imgs.map((_, i) => (
                  <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === idx ? "bg-brand-green" : "bg-white/40"}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-5 md:p-6">
          <h3 className="text-xl font-semibold text-brand-white">{p.title}</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-white/85">{p.longDescription ?? p.summary}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {p.demoUrl && (
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-brand-black transition hover:brightness-110"
              >
                Ver Site
              </a>
            )}
            {p.repoUrl && (
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-brand-white transition hover:border-brand-green/70 hover:text-brand-green"
              >
                Ver Repositório
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCardCompact({ p, size = "md" }: Props) {
  const isSm = size === "sm";
  const [open, setOpen] = useState(false);

  const coverSrc =
    typeof p.cover === "string" && p.cover.trim().length > 0 ? (p.cover.startsWith("/") ? p.cover : `/${p.cover}`) : undefined;

  const openModal = () => setOpen(true);
  const handleKey = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        aria-label={`Abrir detalhes do projeto ${p.title}`}
        onClick={openModal}
        onKeyDown={handleKey}
        className={[
          "group relative h-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] transition",
          "hover:border-brand-green/40 hover:shadow-[0_12px_40px_rgba(128,152,72,0.14)] hover:drop-shadow-[0_0_8px_rgba(0,255,140,0.25)]",
          isSm ? "p-3" : "p-4",
        ].join(" ")}
      >
        {/* feixe brilhante */}
        <span
          aria-hidden
          className="
            pointer-events-none absolute top-[-20%] bottom-[-20%] left-[-40%] w-[40%]
            -skew-x-12 rounded-[12px]
            opacity-0 translate-x-[-120%]
            transition duration-[850ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]
            group-hover:opacity-100 group-hover:translate-x-[220%]
            bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_45%,rgba(0,255,140,0.12)_50%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0)_100%)]
          "
        />

        <div
          className={[
            "relative w-full overflow-hidden rounded-lg bg-white/5",
            isSm ? "mb-2 aspect-[4/3] rounded-md" : "mb-3 aspect-[16/9]",
          ].join(" ")}
        >
          {coverSrc ? (
            <Image
              src={coverSrc}
              alt={`Capa do projeto ${p.title}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes={isSm ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 50vw"}
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-[12px] text-white/60">sem capa</div>
          )}
        </div>

        <h3 className={isSm ? "text-[15px] font-semibold text-brand-white" : "text-base font-semibold text-brand-white"}>
          {p.title}
        </h3>

        <p className={["text-white/80", isSm ? "mt-1 line-clamp-2 text-[12px]" : "mt-1.5 line-clamp-3 text-[13px]"].join(" ")}>
          {p.summary}
        </p>

        <ul className={["flex flex-wrap", isSm ? "mt-2 gap-1" : "mt-3 gap-1.5"].join(" ")}>
          {p.tags.map((t) => (
            <li
              key={t}
              className={[
                "rounded-md border border-white/10 bg-white/[0.04] text-white/85",
                isSm ? "px-1.5 py-[2px] text-[10px]" : "px-2 py-0.5 text-[11px]",
              ].join(" ")}
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-4 w-full">
          {p.demoUrl && p.repoUrl ? (
            <div className="flex w-full items-center justify-between gap-2">
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={[
                  "inline-flex items-center justify-center rounded-md bg-brand-green font-semibold text-brand-black transition hover:brightness-110",
                  isSm ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-[12px]",
                ].join(" ")}
              >
                Site
              </a>
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={[
                  "inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.02] font-semibold text-brand-white transition hover:border-brand-green/70 hover:text-brand-green",
                  isSm ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-[12px]",
                ].join(" ")}
              >
                Github
              </a>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={[
                    "inline-flex items-center justify-center rounded-md bg-brand-green font-semibold text-brand-black transition hover:brightness-110",
                    isSm ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-[12px]",
                  ].join(" ")}
                >
                  Site
                </a>
              )}
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={[
                    "inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.02] font-semibold text-brand-white transition hover:border-brand-green/70 hover:text-brand-green",
                    isSm ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-[12px]",
                  ].join(" ")}
                >
                  Github
                </a>
              )}
            </div>
          )}
        </div>
      </article>

      <ProjectModal open={open} onClose={() => setOpen(false)} p={p} />
    </>
  );
}
