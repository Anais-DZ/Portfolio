function Portfolio() {

    return (
        <section className="flex items-center justify-center mt-8 lg:mx-0">
            <div className="relative w-full  bg-gradient p-2 m-2 lg:m-0">

                {/* Fond flou rectangulaire */}
                <div className=" bg-stone-900/50 backdrop-blur-md py-6 lg:p-6">

                    {/* Contenu au-dessus du blur */}
                    <div className="relative z-10 text-white space-y-7">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center font-[Orbitron]">
                            Portfolio
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3">

                            {/* première colonne */}
                           
                            
                            {/* deuxième colonne */}
                            

                            {/* troisième colonne */}
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;