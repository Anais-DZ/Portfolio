import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";
import { SiPhp } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";


function VerifyAdmin() {
    // Liste des icônes spécifiques pour ce projet
  const techItems = [
    { icon: <SiPhp  className="lg:w-8 lg:h-8 w-7 h-7" />, label: "PHP" },
    { icon: <BiLogoJavascript className="lg:w-8 lg:h-8 w-7 h-7" />, label: "JS" },
  ];

    return (
        <>
            <Header />

            <LayoutProject
                Image={["verifScreenAdmin.webp","/verifAdmin.webp", "/verifAdmin2.webp"]}
                Title={["Ver'ify Admin"]}
                Description={["Ver'ify Admin est un module complémentaire de Ver'ify Compost. Il offre une interface d'administration sécurisée permettant de gérer la base de données du site Ver'ify Compost.", "Le projet principal, Ver'ify Compost, aide les utilisateurs à trier leurs déchets compostables de manière optimale. Ce module Verify Admin permet à l'administrateur de gérer les données essentielles au bon fonctionnement du site en offrant une interface dédiée.", "L'administrateur peut se connecter via un formulaire sécurisé, accéder à un tableau de bord affichant les déchets contenus dans la base de données, ajouter/modifier des noms de déchets et les associer à leurs conteneurs correspondants grâce à des formulaires, alimenter dynamiquement la base de données utilisée par le site Ver'ify Compost", "Le site a été réalisé en PHP et JavaScript. Les données proviennent de ma propre base de données, alimentée et interrogée via une API que j’ai développée spécifiquement pour ce projet."]}
                Link="https://verify-admin.onrender.com/"
                ButtonHref="https://github.com/Anais-DZ/Verify-admin"
                TitleButton="Github de Ver'ify Admin"
                techItems={techItems}
            />

            <Footer />
        </>

    );
}

export default VerifyAdmin;
