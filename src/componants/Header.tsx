import { useEffect, useRef, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique à l’extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isNavOpen &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNavOpen]);

  return (
    <header className="flex items-center justify-between border-b-1 border-gray-400 pt-5 px-5 p-3 relative z-50">
      <p className="font-[Orbitron] text-xl">Anaïs DIEZ</p>

      {/* Menu Desktop */}
      <nav className="hidden lg:flex font-[Orbitron]">
        <ul className="flex space-x-8 text-xl text-gray-900">
          <li><a href="#about">À propos de moi</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsNavOpen(true)} aria-label="Ouvrir le menu">
          <MenuIcon className="w-8 h-8 text-gray-900" />
        </button>

        {/* Overlay mobile */}
        <div
          className={`fixed top-0 left-0 w-full h-full z-40 bg-black/50 transition-opacity duration-300 ${
            isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            ref={overlayRef}
            className={`fixed top-0 left-0 w-full h-[80vh] bg-gray-800 backdrop-blur-md flex flex-col items-center justify-center z-50 transition-transform duration-500 ease-out ${
              isNavOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {/* Bouton Fermer */}
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsNavOpen(false)}
              aria-label="Fermer le menu"
            >
              <svg
                className="h-8 w-8 text-slate-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Liens de navigation */}
            <nav className="flex flex-col items-center gap-10 text-lg font-semibold font-[Orbitron]">
              <a href="#about" className="uppercase border-b border-slate-100 text-slate-100" onClick={() => setIsNavOpen(false)}>À propos de moi</a>
              <a href="#portfolio" className="uppercase border-b border-slate-100 text-slate-100" onClick={() => setIsNavOpen(false)}>Portfolio</a>
              <a href="#contact" className="uppercase border-b border-slate-100 text-slate-100" onClick={() => setIsNavOpen(false)}>Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
