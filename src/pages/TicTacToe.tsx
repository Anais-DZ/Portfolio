import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


function TicTacToe() {
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
                Image={["/tictactoe.webp", "/tictactoeDesk.webp"]}
                Title={["🔗 Tic Tac Toe Arena"]}
                Description={["Ce projet est une implémentation du jeu du morpion en React, basée sur le tutoriel officiel de React.", "Il permet à deux joueurs de s'affronter en plaçant des X et des O sur une grille 5x5.", "J'ai réalisé ce tutoriel en autodidacte pour apprendre les bases de React et progresser dans mes compétences en développement. Une phrase dynamique sous le titre, change automatiquement selon le jour de la semaine pour apporter un petit côté convivial", "Le site a été réalisé en React, Tailwind CSS et CSS."]}
                Link="https://xo-arena.vercel.app/"
                ButtonHref="https://github.com/Anais-DZ/Tic_Tac_Toe"
                TitleButton="Github de Tic Tac Toe Arena"
                techItems={techItems}
            />

            <Footer />
        </>

    );
}

export default TicTacToe;
