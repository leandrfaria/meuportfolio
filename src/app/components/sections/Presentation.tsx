import Image from "next/image";
import { anton } from "../../font";

type Props = {
  name: string;
  role: string;
  resumeUrl?: string;
  imageSrc?: string;
};

export default function Presentation({
  name,
  role,
  resumeUrl = "#",
  imageSrc,
}: Props) {
  return (
    <section
      id="apresentacao"
      className="mx-auto max-w-5xl px-5 py-20 md:py-24 lg:py-28 grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_0.9fr]"
    >
      {/* Texto */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-green" />
          disponível para projetos
        </div>

        <h1
          className={`${anton.className} mt-4 text-4xl sm:text-5xl lg:text-[52px] leading-tight text-brand-white`}
        >
          {name}
        </h1>

        <p className="mt-3 max-w-[52ch] text-base text-white/85 sm:text-lg">
          {role}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={resumeUrl}
            target={resumeUrl?.startsWith("http") ? "_blank" : undefined}
            rel={resumeUrl?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-brand-black transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(128,152,72,0.25)]"
            aria-label="Abrir meu currículo"
            download={resumeUrl?.endsWith(".pdf") ? "" : undefined}
          >
            Meu Currículo
          </a>

          <a
            href="#projetos"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-semibold text-brand-white transition hover:border-brand-green/70 hover:text-brand-green"
          >
            Ver Projetos
          </a>
        </div>
      </div>

      {/* Imagem */}
      <div className="relative flex items-center justify-center">
        <div
          aria-hidden
          className="absolute -z-10 hidden h-3/4 w-3/4 rounded-full bg-brand-green/12 blur-3xl md:block"
        />
        <div className="relative w-full max-w-[380px] sm:max-w-[420px] md:max-w-[440px]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`Foto de ${name}`}
              width={720}
              height={720}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 35vw, 440px"
            />
          ) : (
            <div className="flex aspect-[4/5] w-full items-center justify-center text-sm text-white/60">
              adicione sua imagem em <code className="mx-1 rounded bg-black/40 px-1">/public</code>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
