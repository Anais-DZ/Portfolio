import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <section className="py-10 px-2 flex flex-col items-center lg:pt-18">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            Image={["verifScreenShot.webp"]}
            Title={["Ver'ify Compost"]}
            Link="http://verify-compost.vercel.app/"
            ButtonHref="/verifycompost"
            Description={["Un site mobile sur l'aide au tri des déchets compostables"]}
            TitleButton="Voir le projet"
          />
          <ProjectCard
            Image={["verifScreenAdmin.webp"]}
            Title={["Ver'ify Admin"]}
            Link="https://verify-admin.onrender.com/"
            ButtonHref="/verifyadmin"
            Description={["Site administrateur de Ver'ify Compost pour l'ajout de données"]}
            TitleButton="Voir le projet"
          />
          <ProjectCard
            Image={["apiWaste.webp"]}
            Title={["API Waste"]}
            Link="https://api-waste.onrender.com/"
            ButtonHref="/apiwaste"
            Description={["API pour le fonctionnement du site Ver'ify Compost"]}
            TitleButton="Voir le projet"
          />
          <ProjectCard
            Image={["portfolio.webp"]}
            Title={["Portfolio"]}
            Link="https://anaisdiez.vercel.app/"
            ButtonHref="/portfolio"
            Description={["Refonte moderne de mon portfolio"]}
            TitleButton="Voir le projet"
          />
          <ProjectCard
            Image={["tictactoe.webp"]}
            Title={["Tic Tac Toe Arena"]}
            Link="https://xo-arena.vercel.app/"
            ButtonHref="/tictactoe"
            Description={["Le célèbre jeu du Tic Tac Toe"]}
            TitleButton="Voir le projet"
          />
          <ProjectCard
            Image={["gryphiq.webp"]}
            Link=""
            ButtonHref="/gryphiq"
            Description={["Gryphiq : application web réalisée en collaboration"]}
            TitleButton="Voir le projet"
          />
          <ProjectCard
            Image={["dbcScreenShot.webp"]}
            Link=""
            ButtonHref="/dbconsulting"
            Description={["Dream Big Consulting : refonte complète du site vitrine en WordPress"]}
            TitleButton="Voir le projet"
          />
          <ProjectCard
            Image={["cv.webp"]}
            Title={["Mon ancien CV en ligne"]}
            Link="https://cv-adiez.vercel.app/"
            ButtonHref="/cv"
            Description={["Mon CV en ligne pour tout type d'écran"]}
            TitleButton="Voir le projet"
          />
          <ProjectCard
            Image={["firstpage.webp"]}
            Title={["Mon premier portfolio"]}
            Link="https://anais-diez.vercel.app/"
            ButtonHref=""
            Description={["Mon premier portfolio inspiré de Linktree"]}
            TitleButton="+ d'infos à venir"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
