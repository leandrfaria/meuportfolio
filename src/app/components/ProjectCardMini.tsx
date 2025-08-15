import Image from "next/image";
import type { Project } from "./ProjectCardCompact";

export default function ProjectCardMini({ p }: { p: Project }) {
  return (
    <article className="group relative h-full w-[220px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 transition hover:shadow-[0_10px_30px_rgba(128,152,72,0.12)]">
      {p.cover && (
        <div className="relative mb-2 aspect-[4/3] w-full overflow-hidden rounded-md bg-white/5">
          <Image
            src={p.cover}
            alt={`Capa do projeto ${p.title}`}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="220px"
          />
        </div>
      )}

      <h3 className="text-[15px] font-semibold text-brand-white line-clamp-1">{p.title}</h3>
      <p className="mt-1 text-[12px] text-white/80 line-clamp-2">{p.summary}</p>

      <ul className="mt-2 flex flex-wrap gap-1">
        {p.tags.slice(0, 3).map((t) => (
          <li
            key={t}
            className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-[2px] text-[10px] text-white/85"
          >
            {t}
          </li>
        ))}
        {p.tags.length > 3 && <li className="text-[10px] text-white/60">+{p.tags.length - 3}</li>}
      </ul>

      <div className="mt-3 flex items-center gap-2">
        {p.demoUrl && (
          <a
            href={p.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-brand-green px-2.5 py-1 text-[11px] font-semibold text-brand-black transition hover:brightness-110"
          >
            demo
          </a>
        )}
        {p.repoUrl && (
          <a
            href={p.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.02] px-2.5 py-1 text-[11px] font-semibold text-brand-white transition hover:border-brand-green/70 hover:text-brand-green"
          >
            repo
          </a>
        )}
      </div>
    </article>
  );
}
