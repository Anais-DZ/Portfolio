import NetworkLinks from "./NetworkLinks";

function Introduction() {

    return (
        <>

            <section className="flex items-center justify-center  bg-presentation mt-8 lg:mx-0">

                {/* Fond flou rectangulaire */}
                <div className="relative w-full max-w-5xl p-4 m-2 mt-16 mb-12 lg:p-16  lg:mt-22 bg-stone-900/50 backdrop-blur-md">

                    {/* Photo de profil*/}
                    <img src="/pictureProfil.webp" alt="photo de profil" loading="lazy" className="w-36 h-auto absolute -top-14 right-1 lg:w-66 lg:h-auto lg:-top-14 lg:-right-7"/>

                    {/* Contenu au-dessus du blur */}
                    <div className="relative z-10 text-white space-y-7">
                        <h1 className="text-xl lg:text-4xl font-semibold text-left font-[Orbitron]">
                            Bonjour 👋
                        </h1>
                        <p className="text-left lg:text-2xl font-[Orbitron]">
                            Je suis Anaïs,
                            <br />
                            Développeuse Web et Web mobile.
                        </p>

                        <p className="text-left lg:text-lg">
                            Actuellement en fin de formation en Développement Web et Web mobile, je souhaite poursuivre mon parcours en préparant un Titre Professionnel de niveau 6 (équivalent Bac +3/4) en Conception et Développement d'Applications. Je suis donc activement à la recherche d'une alternance sur 12 mois dès septembre 2025 à Toulouse et sa périphérie.
                        </p>
                        <p className="text-left lg:text-lg">
                            Vous pouvez découvrir mon portfolio ci-dessous, ainsi qu’en apprendre un peu plus sur moi et mon parcours.
                        </p>

                        <NetworkLinks />
                    </div>

                </div>
            </section>


        </>
    );
}

export default Introduction;