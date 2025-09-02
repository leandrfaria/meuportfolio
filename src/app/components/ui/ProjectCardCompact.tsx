import Image from "next/image";

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  cover?: string;     // ex.: "/projetos/scoreit.png"
  demoUrl?: string;
  repoUrl?: string;
};

type Props = { p: Project; size?: "md" | "sm" };

export default function ProjectCardCompact({ p, size = "md" }: Props) {
  const isSm = size === "sm";

  const coverSrc =
    typeof p.cover === "string" && p.cover.trim().length > 0
      ? p.cover.startsWith("/") ? p.cover : `/${p.cover}`
      : undefined;

  return (
    <article
      className={[
        "group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] transition hover:shadow-[0_12px_40px_rgba(128,152,72,0.12)]",
        isSm ? "p-3" : "p-4",
      ].join(" ")}
    >
      {/* Capa (só renderiza <Image> se coverSrc existir) */}
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
          <div className="absolute inset-0 grid place-items-center text-[12px] text-white/60">
            sem capa
          </div>
        )}
      </div>

      <h3 className={isSm ? "text-[15px] font-semibold text-brand-white" : "text-base font-semibold text-brand-white"}>
        {p.title}
      </h3>

      <p className={[ "text-white/80", isSm ? "mt-1 line-clamp-2 text-[12px]" : "mt-1.5 line-clamp-3 text-[13px]" ].join(" ")}>
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

      <div className={["flex items-center gap-2", isSm ? "mt-3" : "mt-4"].join(" ")}>
        {p.demoUrl && (
          <a
            href={p.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex items-center justify-center rounded-md bg-brand-green font-semibold text-brand-black transition hover:brightness-110",
              isSm ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-[12px]",
            ].join(" ")}
          >
            demo
          </a>
        )}
        {p.repoUrl && (
          <a
            href={p.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.02] font-semibold text-brand-white transition hover:border-brand-green/70 hover:text-brand-green",
              isSm ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-[12px]",
            ].join(" ")}
          >
            repo
          </a>
        )}
      </div>
    </article>
  );
}
