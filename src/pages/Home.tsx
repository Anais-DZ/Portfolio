import Header from '../componants/Header';
import Introduction from '../componants/Introduction';
import HardSkills from '../componants/HardSkills';
import Portfolio from '../componants/Portfolio';
import PromoOverlay from '../componants/PromoOverlay';
import ContactForm from '../componants/ContactForm';
import EcoIndexStaticBadge from '../componants/EcoIndexBadge';
import Footer from '../componants/Footer';

function Home() {


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
        <p>Avant de plonger dans l’univers du code, j’ai passé plus de treize ans à sillonner les routes en tant que factrice. Un métier qui m’a appris la rigueur, l’autonomie et le travail en équipe — des compétences que je mobilise aujourd’hui pleinement dans le développement web.
        Après un voyage solo à New York, véritable déclencheur personnel, j’ai choisi de me reconvertir pour bâtir un projet professionnel qui me correspond.</p>

        <p>J'ai récemment terminé une formation en Développement Web et Web Mobile (RNCP niveau 5), où j’ai acquis les bases en front-end et back-end (JavaScript, PHP POO, SQL…). Curieuse de nature, j’ai aussi appris à utiliser React et Tailwind CSS en autonomie.</p>

        <p>J’aime concevoir des interfaces dynamiques, chercher des solutions, déboguer et améliorer l’expérience utilisateur. J’ai travaillé avec GitHub, Figma et Firebase, et mis tout cela en pratique lors d’un stage sur un projet web mobile, réalisé en équipe et à distance.</p>

        <p>Aujourd’hui, je poursuis mon parcours en alternance en Conception et Développement d’Applications - DevOps (RNCP niveau 6) avec l’envie de continuer à apprendre, de progresser techniquement et de m’investir pleinement au sein d’une équipe.</p>
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
            src="/qrcode.webp"
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

      {/* Bouton Ecoindex */}
      <div className="flex justify-center mb-2 lg:mt-12 lg:mb-0">
        <EcoIndexStaticBadge url="https://anaisdiez.vercel.app/" theme="light" />

      </div>

      <Footer />
    </>
  );
};

export default Home;
