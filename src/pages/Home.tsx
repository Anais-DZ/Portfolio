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
        <p>Avant de plonger dans les lignes de code, j’ai passé plus de 13 ans à sillonner les routes en tant que factrice. Un métier qui m’a appris bien plus que trier le courrier : rigueur, autonomie, organisation et travail en équipe — des compétences toujours bien utiles dans le développement web. Et oui, après un voyage solo pour découvrir les rues de New-York (et faire le plein de confiance en moi !), je me suis lancée dans la grande aventure de la reconversion professionnelle.</p>


        <p>Effectivement, je ne suis pas une étudiante « fraîchement sortie du bac », mais ce parcours atypique est une force : choisir de se reconvertir ne se fait pas sur un coup de tête, et l’engagement qui en découle est souvent à la hauteur de la motivation.</p>

        <p>Pour preuve, aujourd’hui, je termine une formation en Développement Web et Web mobile (RNCP niv.5) où j’y ai acquis de sérieuses compétences en front-end et back-end (JavaScript, PHP, SQL…) et j’ai pris goût à l’autonomie en apprenant seule à manier React et Tailwind CSS.</p>

        <p>Au-delà des langages, j’ai également appris à concevoir des interfaces dynamiques, à déboguer, et à optimiser l’expérience utilisateur. J’ai manipulé divers outils comme GitHub, Figma ou Firebase et mis tout ça en pratique lors d’un stage sur un projet web mobile, en équipe et à distance.</p>

        <p>Aujourd’hui, je souhaite aller plus loin avec une formation en alternance en Conception et Développement d'Applications, option Éco-conception, une approche qui m'intéresse particulièrement. Consciente de l’impact environnemental du numérique, je désire approfondir mes compétences techniques dans ce domaine afin de concevoir des solutions plus responsables et durables.</p>

        <p>Sérieuse mais pas rigide, discrète mais impliquée, curieuse et motivée, je suis prête à rejoindre une entreprise pour mettre concrètement en pratique mes connaissances au sein d’une équipe professionnelle, mais aussi élargir mes connaissances autour du déploiement d’applications, de la sécurisation des serveurs et des bases de données, des pratiques DevOps, de la gestion de projet Agile, ainsi que du testing.</p>
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
        <EcoIndexStaticBadge url="https://anaisdiez.vercel.app" theme="light" />

      </div>

      <Footer />
    </>
  );
};

export default Home;
