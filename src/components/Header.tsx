import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#prototipos", text: "Prototipos" },
    { href: "#tecnologias", text: "Tecnología" },
    { href: "#portafolio", text: "Portafolio" },
    { href: "#proceso", text: "Servicios" },
    { href: "#sobre-mi", text: "Quién Soy" },
    { href: "#contacto", text: "Contacto" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--background)]/90 backdrop-blur border-b border-[var(--primaryContainer)]">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[var(--primary)]">Fastsites.jm</h1>

        <nav className="hidden md:flex space-x-8 text-sm text-[var(--secondary)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--primary)] transition"
            >
              {link.text}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[var(--secondary)] hover:text-[var(--primary)] p-2 rounded-md"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-[var(--background)] border-t border-[var(--primaryContainer)] transition-all ease-in-out duration-300`}
      >
        <div className="flex flex-col p-4 space-y-3 text-[var(--secondary)] text-base">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="mobile-nav-link hover:text-[var(--primary)] py-1"
            >
              {link.text}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
