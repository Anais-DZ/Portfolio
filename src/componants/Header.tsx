import { useEffect, useRef, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // seuil de scroll pour changer le texte
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Fonction pour gérer le retour
  const handleBack = () => {
    if (window.history.length <= 2) {
      navigate("/#portfolio");
    } else {
      navigate(-1);
    }
  };

  // Fonction pour gérer le retour
  const handleGoHome = () => {
    navigate("/");
  };

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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 border-b border-gray-400 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-5 py-3 lg:px-0 lg:py-5">

        {/* changement du nom du bouton accueil lors du scroll */}
          <a
            href="#intro"
            onClick={handleGoHome}
            className="font-[Orbitron] text-xl hover:text-pink-600 relative inline-block w-[130px] h-6 text-center"
          >
            <span
              className={`absolute left-0 top-0 w-full transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"
                }`}
            >
              Anaïs DIEZ
            </span>
            <span
              className={`absolute left-0 top-0 w-full transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"
                }`}
            >
              Accueil
            </span>
          </a>

        {/* Menu Desktop */}
        {isHomePage ? (
          <nav className="hidden lg:flex font-[Orbitron]">
            <ul className="flex space-x-8 text-xl">
              <li><a href="#about">À propos de moi</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        ) : (
          <nav className="hidden lg:flex font-[Orbitron]">
            <ul className="flex space-x-8 text-xl">
              <li>
                <button onClick={handleBack} className="text-xl cursor-pointer">Retour</button>
              </li>
            </ul>
          </nav>
        )}

        {/* Menu Mobile */}
        <div className="lg:hidden">
          {!isHomePage ? (
            <button onClick={handleBack} className="text-xl font-[Orbitron]">
              Retour
            </button>
          ) : (
            <button onClick={() => setIsNavOpen(true)} aria-label="Ouvrir le menu">
              <MenuIcon className="w-8 h-8 text-gray-900" />
            </button>
          )}

          {/* Overlay */}
          <div
            className={`fixed top-0 left-0 w-full h-full z-40 bg-black/50 transition-opacity duration-300 ${isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
          >
            <div
              ref={overlayRef}
              className={`fixed top-0 left-0 w-full h-[80vh] bg-gray-800 backdrop-blur-md flex flex-col items-center justify-center z-50 transition-transform duration-500 ease-out ${isNavOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
              <button
                className="absolute top-6 right-6"
                onClick={() => setIsNavOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg className="h-8 w-8 text-slate-100" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <nav className="flex flex-col items-center gap-10 text-lg font-semibold font-[Orbitron]">
                <a href="#about" className="uppercase border-b border-slate-100 text-slate-100" onClick={() => setIsNavOpen(false)}>À propos de moi</a>
                <a href="#portfolio" className="uppercase border-b border-slate-100 text-slate-100" onClick={() => setIsNavOpen(false)}>Portfolio</a>
                <a href="#contact" className="uppercase border-b border-slate-100 text-slate-100" onClick={() => setIsNavOpen(false)}>Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
