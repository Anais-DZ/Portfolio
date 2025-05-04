import React from 'react';
import Header from '../componants/Header';
import Introduction from '../componants/Introduction';
import HardSkills from '../componants/HardSkills';
import Portfolio from '../componants/Portfolio';
import ContactForm from '../componants/ContactForm';
import Footer from '../componants/Footer';

const Home: React.FC = () => {
  return (
    <>

      <Header />

      <Introduction />

      <h2 className="flex items-center justify-center lg:justify-end border-b-1 border-gray-400 pt-5 px-5 p-3 font-[Orbitron] font-normal text-xl mt-12 lg:text-2xl lg:mt-18">
        À propos de moi
      </h2>

      <section className='text-left m-4 space-y-4 py-6 lg:py-10'>
      <img
          src="/nyc.webp"
          alt="New York"
          className="w-42 h-auto float-right ml-2 mb-0 lg:w-54"
        />
        <p>Avant de plonger dans les lignes de code, j’ai passé plus de 13 ans à sillonner les routes de campagne en tant que factrice. Un métier qui m’a appris bien plus que trier le courrier : rigueur, autonomie, sens de l’organisation et travail en équipe — des compétences toujours bien utiles dans le développement web. Et oui, après un voyage solo pour découvrir les rues de New York (et faire le plein de confiance en moi !), je me suis lancée dans la grande aventure de la reconversion.</p>


        <p>Effectivement, je ne suis pas une étudiante « fraîchement sortie du bac », mais ce parcours atypique est une force : choisir de se reconvertir ne se fait pas sur un coup de tête, et l’engagement qui en découle est souvent à la hauteur de la motivation.</p>

        <p>Pour preuve, aujourd’hui, je termine une formation en Développement Web et Web mobile (titre pro niveau Bac+2). J’y ai acquis des compétences sérieuses en front-end et back-end, de JavaScript à PHP, en passant par l’intégration d’API REST. Et pour pimenter le tout, j’ai apprivoisé React et Tailwind CSS en autodidacte.</p>

        <p>Au-delà des langages, j’ai appris à concevoir des interfaces dynamiques, rechercher et corriger des bugs, optimiser l’expérience utilisateur et m’adapter à des outils variés comme GitHub ou Figma.</p>

        <p>Après un récent stage sur des projets d’application web et mobile, en collaborant à distance avec une équipe de développeurs, je souhaite continuer avec une alternance en Conception et Développement d’Applications (niveau Bac+3/4).</p>

        <p>Sérieuse mais pas rigide, discrète mais impliquée, curieuse et motivée, je suis prête à rejoindre une entreprise qui serait pour moi l’opportunité de continuer à apprendre aux côtés de développeurs expérimentés, tout en contribuant activement à leurs projets grâce aux connaissances que j’ai déjà acquises.</p> 
      </section>

      <HardSkills />

      <h2 className="flex items-center justify-center lg:justify-end border-b-1 border-gray-400 pt-5 px-5 p-3 font-[Orbitron] font-normal text-xl mt-12 lg:text-2xl lg:mt-18">
        Portfolio
      </h2>

      <Portfolio />

      <h2 className="flex items-center justify-center lg:justify-end border-b-1 border-gray-400 pt-5 px-5 p-3 font-[Orbitron] font-normal text-xl mt-12 lg:text-2xl lg:mt-18">
        Contact
      </h2>

      <ContactForm />

      <Footer />
    </>
  );
};

export default Home;
