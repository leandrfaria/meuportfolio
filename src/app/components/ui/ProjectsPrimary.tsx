import { bebasNeue } from "../../font";
import ProjectCardCompact, { Project } from "./ProjectCardCompact";

type Props = {
  id?: string;
  title?: string;
  items: Project[];
};

export default function ProjectsPrimary({
  id = "projetos",
  title = "projetos principais",
  items,
}: Props) {
  return (
    <section
      id={id}
      // antes: py-20 md:py-24 lg:py-28
      // agora: mantém topo grande, encurta base para reduzir o gap com a próxima seção
      className="mx-auto max-w-5xl px-5 pt-20 md:pt-24 lg:pt-28 pb-10 md:pb-12 lg:pb-14"
    >
      <h2 className={`${bebasNeue.className} text-3xl sm:text-4xl tracking-wide text-brand-white mb-8`}>
        <span className="inline-block border-b-4 border-brand-green pb-1">
          {title}
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((p) => (
          <div key={p.title} className="h-full">
            <ProjectCardCompact p={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
