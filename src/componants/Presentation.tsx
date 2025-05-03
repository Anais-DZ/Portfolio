function Presentation() {




    return (
        <>

            <section className="flex items-center justify-center lg:justify-start bg-presentation mt-8 lg:mx-0">
                <div className="relative w-full max-w-3xl p-4 m-2 mt-12 mb-12  lg:p-16 lg:m-10 lg:mt-14">

                    {/* Fond flou rectangulaire */}
                    <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-md"></div>

                    {/* Photo de profil*/}
                    <img src="/pictureProfil.webp" alt="photo de profil" className="hidden lg:absolute lg:block lg:w-70 lg:h-auto lg:-top-8 lg:-right-11"/>

                    {/* Contenu au-dessus du blur */}
                    <div className="relative z-10 text-white space-y-6">
                        <h1 className="text-xl lg:text-4xl font-semibold text-left">
                            Bonjour 👋
                        </h1>
                        <p className="text-left lg:text-2xl">
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
                    </div>

                </div>
            </section>


        </>
    );
}

export default Presentation;