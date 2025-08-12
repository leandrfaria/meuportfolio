import Presentation from "./components/Presentation";

export default function Home() {
  return (
    <main>
      <Presentation
        name="Leandro Faria"
        role="Desenvolvedor Front-end (Next.js, React, TypeScript)"
        resumeUrl="/curriculo.pdf"   // arquivo real no public
        imageSrc="/cartoon.png"      // imagem real no public
      />
      {/* Aqui depois vão entrar as seções: Sobre, Projetos, Tecnologias, Contatos */}
    </main>
  );
}
