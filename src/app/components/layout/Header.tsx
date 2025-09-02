"use client";

import { useState } from "react";
import Link from "next/link";
import LogoSvg from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/80 backdrop-blur">
      {/* aumentei para h-20 */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-1 h-20">
        {/* Logo maior, agora h-18 */}
        <div className="flex items-center h-full">
          <LogoSvg className="h-18 w-auto" />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-sm">
          {[
            { href: "#sobre", label: "Sobre" },
            { href: "#projetos", label: "Projetos" },
            { href: "#tecnologias", label: "Tecnologias" },
            { href: "#contatos", label: "Contatos" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="transition-all hover:text-brand-green hover:drop-shadow-[0_0_4px_rgba(0,255,140,0.4)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão Mobile */}
        <button
          className="block md:hidden text-brand-white hover:text-brand-green transition-colors"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-brand-black/95 backdrop-blur">
          <ul className="flex flex-col gap-4 px-5 py-3 text-sm">
            {[
              { href: "#sobre", label: "Sobre" },
              { href: "#projetos", label: "Projetos" },
              { href: "#tecnologias", label: "Tecnologias" },
              { href: "#contatos", label: "Contatos" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={toggleMenu}
                  className="transition-all hover:text-brand-green hover:drop-shadow-[0_0_4px_rgba(0,255,140,0.4)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
