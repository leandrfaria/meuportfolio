import About from "./components/sections/About";
import Presentation from "./components/sections/Presentation";

import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Presentation
        name="Leandro Faria"
        role="Desenvolvedor Front-end (Next.js, React, TypeScript)"
        resumeUrl="/curriculo.pdf"
        imageSrc="/cartoon.png"
      />
      <About />
      <Projects />
    </main>
  );
}
