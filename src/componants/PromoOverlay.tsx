import { useEffect, useState, useRef } from "react";

const PromoOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("promo") === "true") {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 50);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        closeOverlay();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible]);

  const closeOverlay = () => {
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 300);
  };

  const handleContactClick = () => {
    closeOverlay();
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "#contact";
      }
    }, 300); // attendre la fermeture avant de scroller
  };

  if (!shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        ref={overlayRef}
        className={`bg-white text-black rounded-2xl relative mx-4 w-full max-w-sm p-6 text-center shadow-xl transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
      >
        <button
          className="absolute top-3 right-4 text-4xl font-bold text-pink-600 hover:text-gray-500"
          onClick={closeOverlay}
          aria-label="Fermer l'overlay"
        >
          ×
        </button>
        <p className="text-xl text-gray-900 mt-10 mb-3">Faites le bon choix</p>
        <p className="text-lg font-semibold mb-4">
        ...recrutez-moi !
        </p>
        <button
          onClick={handleContactClick}
          className="mt-4 inline-block rounded-full bg-pink-600 px-6 py-2 text-white font-medium hover:bg-pink-700 transition cursor-pointer"
        >
          Par ici !
        </button>
      </div>
    </div>
  );
};

export default PromoOverlay;
