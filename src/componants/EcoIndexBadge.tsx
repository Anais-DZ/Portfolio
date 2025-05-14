import { useRef, useState } from "react"; 
import { BsFillShareFill } from "react-icons/bs";

interface EcoIndexStaticBadgeProps {
  url: string;
  theme?: 'light' | 'dark';
}

function EcoIndexStaticBadge({ url, theme = 'light' }: EcoIndexStaticBadgeProps) {
  const ecoIndexUrl = `https://bff.ecoindex.fr/redirect/?url=${url}`;
  const ecoIndexImage = `https://bff.ecoindex.fr/badge/?theme=${theme}&url=${url}`;

  const [shareError, setShareError] = useState(false);
  const errorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleShare = async () => {
    const shareUrl = window.location.href;

    setShareError(false);

    try {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Portfolio | Anaïs DIEZ, Développeuse Web Full Stack",
            text: "Découvrez son portfolio, ses projets et son parcours.",
            url: shareUrl,
          });
          return;
        } catch (shareErr: any) {
          if (shareErr.name === "AbortError") return;
          console.error("Erreur lors du partage :", shareErr);
          try {
            await navigator.clipboard.writeText(shareUrl);
          } catch (clipboardErr) {
            console.error("Erreur lors de la copie :", clipboardErr);
            setShareError(true);
          }
        }
      } else {
        try {
          await navigator.clipboard.writeText(shareUrl);
        } catch (clipboardErr) {
          console.error("Erreur fallback :", clipboardErr);
          setShareError(true);
        }
      }
    } catch (unexpectedErr) {
      console.error("Erreur inattendue :", unexpectedErr);
      setShareError(true);
    }

    if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
    errorTimeoutRef.current = setTimeout(() => setShareError(false), 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="italic text-xs lg:text-sm mb-1">Impact environnemental de ce site :</p>

      <div className="flex justify-around items-center mb-8">
        <a href={ecoIndexUrl} target="_blank" rel="noopener noreferrer">
          <img src={ecoIndexImage} alt="Ecoindex Badge" className="ecoindex-badge lg:hover:scale-110 lg:transition-all lg:duration-300 lg:mr-4 mr-2" />
        </a>

        {/* Bouton de partage */}
          <button
            onClick={handleShare}
            title="Partager ce portfolio"
          >
            <BsFillShareFill className="w-8 lg:w-10 h-auto ml-2 lg:ml-4 text-pink-800 hover:text-pink-600 transition cursor-pointer" />
          </button>
          {shareError && (
            <p className="mt-2 text-sm text-red-400">Une erreur est survenue lors du partage ou de la copie.</p>
          )}
      </div>
    </div>
  );
};

export default EcoIndexStaticBadge;
