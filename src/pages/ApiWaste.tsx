import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";
import { SiPhp } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";


function ApiWaste() {
    // Liste des icônes spécifiques pour ce projet
  const techItems = [
    { icon: <SiPhp  className="lg:w-8 lg:h-8 w-7 h-7" />, label: "PHP" },
    { icon: <BiLogoJavascript className="lg:w-8 lg:h-8 w-7 h-7" />, label: "JS" },
  ];

    return (
        <>
            <Header />

            <LayoutProject
                Image={["apiWaste.webp"]}
                Title={["🔗 API Waste"]}
                Description={["Cette API est conçue pour alimenter le site web dédié au compostage et au lombricompostage, Ver'ify Compost.", "Elle permet de récupérer des informations détaillées sur les déchets compostables, en fournissant la liste des déchets et le type de conteneur dans lequel chaque déchet doit être trié (composteur, lombricomposteur, autres).", "Ne trouvant pas d'API publique adaptée pour ce besoin spécifique, cette API a été créée pour combler cette lacune et offrir un accès simple aux données relatives aux déchets compostables. Elle offre un point d'accès principal via la méthode GET à l'endpoint /, qui retourne une liste des déchets compostables et le type de conteneur associé à chacun.", "Le site a été réalisé en PHP et JavaScript. Les données proviennent de ma propre base de données, alimentée et interrogée via une API que j’ai développée spécifiquement pour ce projet."]}
                Link={["https://api-waste.onrender.com/"]}
                ButtonHref="https://github.com/Anais-DZ/api-waste"
                TitleButton="Github d'API Waste"
                techItems={techItems}
            />

            <Footer />
        </>

    );
}

export default ApiWaste;
