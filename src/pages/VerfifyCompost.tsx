import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";


function VerifyCompost() {
    // Liste des icônes spécifiques pour ce projet
  const techItems = [
    { icon: <FaHtml5 className="lg:w-8 lg:h-8 w-7 h-7" />, label: "HTML" },
    { icon: <FaCss3Alt className="lg:w-8 lg:h-8 w-7 h-7" />, label: "CSS" },
    { icon: <BiLogoJavascript className="lg:w-8 lg:h-8 w-7 h-7" />, label: "JS" },
  ];

    return (
        <>
            <Header />

            <LayoutProject
                Image={["/verifScreenShot.webp", "/verifScreenShot2.webp"]}
                Title={["🔗 Ver'ify Compost"]}
                Description={["Ver'ify Compost est un site web mobile que j’ai développée pour accompagner les utilisateurs de composteurs et de lombricomposteurs dans le tri de leurs déchets compostables.", "L'utilisateur entre un nom de déchet dans la barre de recherche, clique, et obtient instantanément une réponse affichée dans un overlay simple et lisible. L’interface est conçue pour être intuitive et accessible, quel que soit le niveau de familiarité avec le compostage ou les outils numériques.", "Au-delà de l’aspect fonctionnel, le site vise à sensibiliser à une gestion durable des biodéchets et à promouvoir des pratiques respectueuses de l’environnement.", "Le site a été réalisé en HTML, CSS et JavaScript. Les données proviennent de ma propre base de données, alimentée et interrogée via une API que j’ai développée spécifiquement pour ce projet. Il peut y avoir un léger délai initial, le temps que le serveur de la base de données se lance."]}
                Link="https://verify-compost.vercel.app/"
                ButtonHref="https://github.com/Anais-DZ/Verify-compost"
                TitleButton="Github de Ver'ify Compost"
                techItems={techItems}
            />

            <Footer />
        </>

    );
}

export default VerifyCompost;
