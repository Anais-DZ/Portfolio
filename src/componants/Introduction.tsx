import { useEffect } from "react";
import NetworkLinks from "./NetworkLinks";

function Introduction() {

    // Pré-chargement de l'image de fond
    useEffect(() => {
        const img = new Image();
        img.src = "/pink.webp"; // chemin vers image de fond
    }, []);

    return (
        <>
            <section id="intro" className="flex items-center justify-center bg-presentation mt-24 lg:mt-26 lg:mx-0">
                {/* Fond flou rectangulaire */}
                <div className="relative w-full max-w-6xl p-4 m-2 mt-16 mb-12 lg:p-8 lg:mt-22 bg-stone-900/50 backdrop-blur-md">

                    {/* Photo de profil */}
                    <img
                        src="/pictureProfil.webp"
                        alt="photo de profil"
                        loading="lazy"
                        className="w-36 h-auto absolute -top-14 right-1 lg:w-58 lg:h-auto lg:-top-14 lg:-right-5"
                    />

                    {/* Contenu au-dessus du blur */}
                    <div className="relative z-10 text-white space-y-7">
                        <h1 className="text-xl lg:text-4xl font-semibold text-left font-[Orbitron]">
                            Bonjour 👩‍💻
                        </h1>
                        <p className="text-left lg:text-2xl font-[Orbitron]">
                            Je suis Anaïs DIEZ,
                            <br />
                            Développeuse Web Full Stack.
                        </p>
                        <p className="lg:text-justify lg:text-lg">
                            Actuellement en formation en{" "}
                            <a
                                href="/cda_devops_alternance.pdf"
                                title="cliquez ici pour + d'info"
                                target="_blank"
                                className="underline lg:hover:text-pink-500 transition-all duration-300 ease-in-out font-bold"
                            >
                                Conception et Développement d'Applications - DevOps
                            </a>
                            {" "}avec Simplon et déjà engagée dans un contrat d’alternance jusqu’en octobre 2027 (1 semaine en formation / 3 semaines en entreprise), je suis à la recherche d’une nouvelle entreprise afin de poursuivre ma formation dans un cadre plus structuré et en adéquation avec les compétences visées.
                        </p>
                        <p className="text-left lg:text-lg">
                            Vous pouvez découvrir mon{" "}
                            <a
                                href="#portfolio"
                                aria-label="lien pour voir directement le portfolio"
                                rel="noopener noreferrer"
                                title="Direction le portfolio !"
                                className="underline lg:hover:text-pink-500 transition-all duration-300 ease-in-out"
                            >
                                portfolio
                            </a>
                            {" "}ci-dessous, ainsi qu’en apprendre un peu plus sur moi et mon parcours.
                        </p>

                        <NetworkLinks />

                    </div>
                </div>
            </section>
        </>
    );
}

export default Introduction;
