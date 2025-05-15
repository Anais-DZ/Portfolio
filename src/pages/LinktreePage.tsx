import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";


function LinktreePage() {
    // Liste des icônes spécifiques pour ce projet
  const techItems = [
    { icon: <FaHtml5 className="lg:w-8 lg:h-8 w-7 h-7" />, label: "HTML" },
    { icon: <FaCss3Alt className="lg:w-8 lg:h-8 w-7 h-7" />, label: "CSS" },
  ];

    return (
        <>
            <Header />

            <LayoutProject
                Image={["/firstpage.webp"]}
                Title={["Mon premier portfolio"]}
                Description={["Ce premier portfolio est l’un de mes tout premiers projets web. Je l’ai conçu au moment où je cherchais un stage de fin d'études, pour présenter mes projets, mes compétences et offrir un moyen de contact simple et direct aux recruteurs.", "Le site propose une navigation claire et responsive, pensée pour s’adapter à tous les supports : ordinateur, tablette ou mobile. Le design est épuré, avec des liens interactifs qui facilitent la prise de contact.", "Au-delà de l’aspect pratique, ce projet m’a permis de mettre en application mes premières connaissances en développement web.", "Le site a été réalisé uniquement en HTML et CSS, qui étaient mes seules compétences techniques à ce moment-là (novembre 2024)."]}
                Link="https://anais-diez.vercel.app/"
                ButtonHref="https://github.com/Anais-DZ/Page-personnelle"
                TitleButton="Github de mon premier portfolio"
                techItems={techItems}
            />

            <Footer />
        </>

    );
}

export default LinktreePage;
