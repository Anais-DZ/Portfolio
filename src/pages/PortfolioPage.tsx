import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


function PortfolioPage() {
     // Liste des icônes spécifiques pour ce projet
      const techItems = [
        { icon: <FaReact className="lg:w-8 lg:h-8 w-7 h-7" />, label: "React" },
        { icon: <RiTailwindCssFill className="lg:w-8 lg:h-8 w-7 h-7" />, label: "Tailwinds" },
        { icon: <FaCss3Alt className="lg:w-8 lg:h-8 w-7 h-7" />, label: "CSS" },
      ];

    return (
        <>
            <Header />

            <LayoutProject
                Image={["/portfolio.webp", "/portfolio2.webp"]}
                Title={["🔗 Portfolio"]}
                Description={["Ce second portfolio a été conçu comme une refonte complète de mon premier portfolio afin de refléter au mieux l’évolution de mes compétences techniques, ma maturité en développement web, et mon envie constante de progresser.", "Avec une approche plus moderne, des animations fluides, une architecture plus soignée, et des technologies plus récentes, ce portfolio met en avant mon parcours et ma progression.", "Il regroupe une sélection de projets réalisés dans le cadre de ma reconversion professionnelle en développement web mais aussi des projets personnels que je code par plaisir, illustrant mes compétences en création de sites web et web mobile, en développement frontend et backend avec des technologies comme React, PHP, ou encore JavaScript", "Le site a été réalisé en React, Tailwind CSS et CSS."]}
                Link={["https://anaisdiez.vercel.app/"]}
                ButtonHref="https://github.com/Anais-DZ/Portfolio"
                TitleButton="Github de mon portfolio"
                techItems={techItems}
            />

            <Footer />
        </>

    );
}

export default PortfolioPage;
