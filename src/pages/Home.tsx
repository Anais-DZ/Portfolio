import Header from '../componants/Header';
import Introduction from '../componants/Introduction';
import HardSkills from '../componants/HardSkills';
import Portfolio from '../componants/Portfolio';
import PromoOverlay from '../componants/PromoOverlay';
import ContactForm from '../componants/ContactForm';
import { useRef, useState } from "react";
import Footer from '../componants/Footer';

function Home() {
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
    <>
      <Header />

      <Introduction />

      <h2 id="about" className="scroll-mt-24 flex items-center justify-center lg:justify-end border-b-1 border-gray-400 pt-5 px-5 p-3 font-[Orbitron] font-normal text-xl mt-12 lg:text-2xl lg:mt-18">
        À propos de moi
      </h2>

      <section className='text-justify m-4 space-y-4 py-6 lg:py-10'>
        <img
          src="/nyc.webp"
          alt="New York"
          className="w-42 h-auto float-right ml-6 mt-2 mb-1 lg:mt-1 lg:mb-0 lg:w-54"
        />
        <p>Avant de plonger dans les lignes de code, j’ai passé plus de 13 ans à sillonner les routes de campagne en tant que factrice. Un métier qui m’a appris bien plus que trier le courrier : rigueur, autonomie, sens de l’organisation et travail en équipe — des compétences toujours bien utiles dans le développement web. Et oui, après un voyage solo pour découvrir les rues de New-York (et faire le plein de confiance en moi !), je me suis lancée dans la grande aventure de la reconversion professionnelle.</p>


        <p>Effectivement, je ne suis pas une étudiante « fraîchement sortie du bac », mais ce parcours atypique est une force : choisir de se reconvertir ne se fait pas sur un coup de tête, et l’engagement qui en découle est souvent à la hauteur de la motivation.</p>

        <p>Pour preuve, aujourd’hui, je termine une formation en Développement Web et Web mobile (titre pro niveau Bac+2). J’y ai acquis des compétences sérieuses en front-end et back-end, de JavaScript à PHP, en passant par l’intégration d’API REST. Et pour pimenter le tout, j’ai apprivoisé React et Tailwind CSS en autodidacte.</p>

        <p>Au-delà des langages, j’ai appris à concevoir des interfaces dynamiques, rechercher et corriger des bugs, optimiser l’expérience utilisateur et m’adapter à des outils variés comme GitHub ou Figma.</p>

        <p>Après un récent stage sur des projets d’application web et mobile, en collaborant à distance avec une équipe de développeurs, je souhaite continuer avec une alternance en Conception et Développement d’Applications option Éco-conception, une approche qui m'intéresse particulièrement. En effet, je suis soucieuse de l'empreinte carbone générée par les sites que je développe et je désire approfondir mes compétences dans ce domaine pour trouver des solutions plus responsables et durables.</p>

        <p>Sérieuse mais pas rigide, discrète mais impliquée, curieuse et motivée, je suis prête à rejoindre une entreprise qui serait pour moi l’opportunité de continuer à apprendre aux côtés de développeurs expérimentés, tout en contribuant à leurs projets grâce aux connaissances que j’ai déjà acquises.</p>
      </section>

      <HardSkills />

      <h2 id="portfolio" className="scroll-mt-24 flex items-center justify-center lg:justify-end border-b-1 border-gray-400 pt-5 px-5 p-3 font-[Orbitron] font-normal text-xl mt-12 lg:text-2xl lg:mt-22">
        Portfolio
      </h2>


      <Portfolio />

      <div className="flex flex-col justify-center items-center lg:mt-20">
        <a
          href="/?promo=true"
          title="cliquez ici !"
          className="flex flex-col items-center font-[Orbitron] text-sm lg:text-base"
        >
          <img
            src="/qrcode.png"
            alt="qr code"
            className="w-40 h-auto lg:w-54"
          />
          <p className="m-1 ml-2">Scannez ou cliquez !</p>
        </a>
      </div>

      <PromoOverlay />

      <h2 id="contact" className="scroll-mt-24 flex items-center justify-center lg:justify-end border-b-1 border-gray-400 pt-5 px-5 p-3 font-[Orbitron] font-normal text-xl mt-10 lg:text-2xl lg:mt-18">
        Contact
      </h2>

      <ContactForm />

      {/* Bouton de partage */}
      <div className="pt-4 text-center mb-6 lg:pt-18">
        <button
          onClick={handleShare}
          className="bg-pink-800 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-sm transition cursor-pointer"
        >
          Partager ce portfolio
        </button>
        {shareError && (
          <p className="mt-2 text-sm text-red-400">Une erreur est survenue lors du partage ou de la copie.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
