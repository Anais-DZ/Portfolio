import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";


function CV() {
    // Liste des icônes spécifiques pour ce projet
  const techItems = [
    { icon: <FaHtml5 className="lg:w-8 lg:h-8 w-7 h-7" />, label: "HTML" },
    { icon: <FaCss3Alt className="lg:w-8 lg:h-8 w-7 h-7" />, label: "CSS" },
  ];

    return (
        <>
            <Header />

            <LayoutProject
                Image={["/cv.webp", "/cvMobile.webp"]}
                Title={["Mon ancien CV en ligne"]}
                Description={["Ce CV en ligne est l’un de mes tout premiers projets web. Je l’ai conçu pour présenter mon parcours, mes compétences et offrir un moyen de contact simple et direct aux recruteurs.", "Le site propose une navigation claire et responsive, pensée pour s’adapter à tous les supports : ordinateur, tablette ou mobile. Le design est épuré, avec des liens interactifs qui facilitent la prise de contact.", "Au-delà de l’aspect pratique, ce projet m’a permis de mettre en application mes premières connaissances en développement web, tout en soignant l’esthétique et l’accessibilité du contenu.", "Le site a été réalisé en HTML et CSS."]}
                Link="https://cv-adiez.vercel.app/"
                ButtonHref="https://github.com/Anais-DZ/Curriculum-Vitae-en-ligne"
                TitleButton="Github de mon CV en ligne"
                techItems={techItems}
            />

            <Footer />
        </>

    );
}

export default CV;
