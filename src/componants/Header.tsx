import { useState } from "react";
import { Menu as MenuIcon } from 'lucide-react';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="flex items-center justify-between border-b-1 border-gray-400 pt-5 px-5 p-3 relative z-50">
            <p className="text-gray-900 font-bold text-xl"></p>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex">
                <ul className="flex space-x-8 text-xl text-gray-900">
                    <li><a href="/about" >À propos de moi</a></li>
                    <li><a href="/portfolio" >Portfolio</a></li>
                    <li><a href="/contact" >Contact</a></li>
                </ul>
            </nav>

            {/* Menu Mobile */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsNavOpen(true)}
                    aria-label="Ouvrir le menu"
                >
                    <MenuIcon className="w-8 h-8 text-gray-900" />
                </button>

                {/* Overlay mobile menu */}
                <div className={`
          fixed top-0 left-0 w-full h-[85vh] backdrop-blur-md  bg-gray-800 flex flex-col items-center justify-center
          transition-transform duration-500 ease-out
          ${isNavOpen ? 'translate-y-0' : '-translate-y-full'}
        `}>
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

                    <nav className="flex flex-col items-center gap-10 text-lg font-semibold">
                        <a href="/about" className="uppercase border-b border-slate-100  text-slate-100 ">À propos de moi</a>
                        <a href="/portfolio" className="uppercase border-b border-slate-100  text-slate-100 ">Portfolio</a>
                        <a href="/contact" className="uppercase border-b border-slate-100  text-slate-100 ">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
