import { bebasNeue } from "../font";
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
    <section id={id} className="mx-auto max-w-5xl px-5 py-14 md:py-16 lg:py-20">
      <h2 className={`${bebasNeue.className} text-3xl sm:text-4xl tracking-wide text-brand-white`}>
        <span className="inline-block border-b-4 border-brand-green pb-1">
          {title}
        </span>
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProjectCardCompact key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
