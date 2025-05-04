import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <section className="py-10 px-2 flex flex-col items-center lg:pt-18">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            Image="verifScreenShot.webp"
            Title="🔗 Ver'ify Compost"
            TitleHref="http://verify-compost.vercel.app/"
            ButtonHref="/#"
            Description="Un site mobile sur le compostage"
            Button="+ d'infos à venir..."
          />
          <ProjectCard
            Image="verifScreenAdmin.webp"
            Title="🔗 Ver'ify Admin"
            TitleHref="https://verify-admin.onrender.com/"
            ButtonHref="/#"
            Description="Site Admin de Ver'ify Compost"
            Button="+ d'infos à venir..."
          />
          <ProjectCard
            Image="apiWaste.webp"
            Title="🔗 API Waste"
            TitleHref="https://api-waste.onrender.com/"
            ButtonHref="/#"
            Description="API pour le fonctionnement du site Ver'ify Compost"
            Button="+ d'infos à venir..."
          />
          <ProjectCard
            Image="tictactoe.webp"
            Title="🔗 Tic Tac Toe Arena"
            TitleHref="https://xo-arena.vercel.app/"
            ButtonHref="/#"
            Description="Le jeu Tic Tac Toe sur mobile"
            Button="+ d'infos à venir..."
          />
          <ProjectCard
            Image="cv.webp"
            Title="🔗 CV en ligne"
            TitleHref="https://cv-adiez.vercel.app/"
            ButtonHref="/#"
            Description="Mon CV en ligne pour tout type d'écran"
            Button="+ d'infos à venir..."
          />
          <ProjectCard
            Image="firstpage.webp"
            Title="🔗 Mon premier portfolio"
            TitleHref="https://anais-diez.vercel.app/"
            ButtonHref="/#"
            Description="Mon premier portfolio inspiré de Linktree"
            Button="+ d'infos à venir..."
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
