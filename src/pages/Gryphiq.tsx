import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";


function Gryphiq() {
     // Liste des icônes spécifiques pour ce projet
      const techItems = [
        { icon: <FaReact className="lg:w-8 lg:h-8 w-7 h-7" />, label: "React" },
        { icon: <RiTailwindCssFill className="lg:w-8 lg:h-8 w-7 h-7" />, label: "Tailwinds" },
        { icon: <FaCss3Alt className="lg:w-8 lg:h-8 w-7 h-7" />, label: "CSS" },
        { icon: <SiFirebase className="lg:w-8 lg:h-8 w-7 h-7" />, label: "Firebase" },
      ];

    return (
        <>
            <Header />

            <LayoutProject
                Image={["/gryphiq.webp"]}
                Title={["Gryphiq"]}
                Description={["Ce projet, Gryphiq, a été réalisé durant mon stage pour un client souhaitant développer une application mobile dédiée à la mise en relation d'acheteurs et de vendeurs de startups. Grâce à l'intelligence artificielle, l'application facilite la recherche d'acquéreurs en analysant les besoins et les offres.", "J'ai conçu ce site depuis le maquettage (Figma) jusqu'au développement du code avec un second stagiaire, en collaborant à distance.",  "Ce travail m'a permis d'apprendre à travailler en équipe, notamment grâce à l'utilisation de GitHub pour la gestion du code et la collaboration. De plus, une API a été codée spécifiquement pour la recherche d'acquéreurs, afin d'optimiser l'efficacité et la pertinence des résultats. Le projet utilise Firebase comme base de données et l'authentification se fait soit par email, soit par Google, grâce à Firestore pour la gestion des utilisateurs et des sessions", "Le site a été réalisé en React, Tailwind CSS, CSS et Firebase pour la base de données."]}
                techItems={techItems}
            />

            <Footer />
        </>

    );
}

export default Gryphiq;
