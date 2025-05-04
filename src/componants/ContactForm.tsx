function ContactForm() {

    return (
        <>

            <div className="px-5 py-8 mx-2 lg:mx-auto my-12 bg-stone-400/10 backdrop-blur-md">
                <div className="flex flex-col text-center w-full mb-12">
                    <h3 className="text-2xl font-[Orbitron]">Formulaire de contact</h3>
                    <p className="lg:w-2/3 mx-auto text-lg">
                        Vous pouvez directement me contacter via ce formulaire.
                    </p>
                </div>
                <form
                    action="https://formsubmit.co/4c6d921710bb3c7a8334d74f232d8325"
                    method="POST"
                    className="lg:w-1/2 md:w-2/3 mx-auto"
                >
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-base">
                                    Prénom - Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-700 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    maxLength={30}
                                    minLength={3}
                                    required
                                    placeholder="Entrez votre prénom et votre nom"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-base">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    maxLength={30}
                                    minLength={5}
                                    required
                                    placeholder="Entrez votre adresse mail"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-base">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-700 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    maxLength={600}
                                    minLength={5}
                                    required
                                    placeholder="Entrez votre message"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                type="submit"
                                className="flex mx-auto text-white bg-gradient border-0 py-2 px-8 cursor-pointer rounded-sm text-lg"
                            >
                                Envoyer
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    );
}

export default ContactForm;
