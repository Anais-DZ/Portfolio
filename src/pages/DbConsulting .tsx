import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";
import { FaWordpress } from "react-icons/fa";


function DbConsulting() {
     // Liste des icônes spécifiques pour ce projet
      const techItems = [
        { icon: <FaWordpress className="lg:w-8 lg:h-8 w-7 h-7" />, label: "Wordpress" },
      ];

    return (
        <>
            <Header />

            <LayoutProject
                Image={["/dbcScreenShot.webp", "/dbcScreenShot2.webp"]}
                Title={["Dream Big Consulting"]}
                Description={["Ce projet, Dream Big Consulting, a été réalisé durant mon stage pour un client souhaitant une refonte complète d'un site vitrine pour sa société de consulting dédiée aux entrepreneurs souhaitant vendre leur entreprise.", "J'ai utilisé WordPress afin de transformer un site initialement en one-page en un site structuré et professionnel, réparti sur plusieurs pages. L’objectif principal était d’offrir une navigation plus claire, de mieux valoriser le parcours du fondateur et de présenter les services de manière plus accessible.",  "J’ai choisi un starter template comme base graphique, que j’ai adapté à l’aide d’un thème enfant. Cela m’a permis de modifier le design, la typographie, la mise en page et certains éléments HTML/CSS sans risquer de perdre les changements lors de futures mises à jour du thème principal. L’éditeur Gutenberg a été utilisé pour construire et organiser le contenu de chaque page, avec des ajustements personnalisés pour répondre aux attentes du client. Chaque service dispose désormais d'une page dédiée, avec un bouton de redirection vers un autre site que le client utilise pour le service concerné. J’ai également intégré un formulaire de contact natif, permettant aux visiteurs de laisser facilement leurs coordonnées et une map pour indiquer où se trouve la société. Enfin, le site a été optimisé pour être entièrement responsive, assurant une bonne expérience utilisateur sur tous types d’écrans."]}
                techItems={techItems}
            />

            <Footer />
        </>

    );
}

export default DbConsulting;
