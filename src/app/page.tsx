import Presentation from "./components/Presentation";
import About from "./components/About";

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
    </main>
  );
}
