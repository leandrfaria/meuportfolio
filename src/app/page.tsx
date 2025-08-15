import Presentation from "./components/Presentation";
import About from "./components/About";
import Projects from "./components/Projects";

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
