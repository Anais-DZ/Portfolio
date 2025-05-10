import { Project } from "../types/models";
import ImageGallery from "./ImageGallery";
import MoreInfos from "./MoreInfos";
import TechStack from "./TechStack";  // Importation du nouveau composant

interface LayoutProjectProps extends Project {
    techItems: { icon: React.ReactNode; label: string }[]; // Nouvelle prop pour les icônes
}

const LayoutProject = ({
    Image,
    Title,
    Description,
    Link,
    ButtonHref,
    TitleButton,
    techItems, // Récupération de la prop
}: LayoutProjectProps) => {

    return (
        <div className="w-full bg-gradient p-2 mt-18 mb-6 lg:mb-8 lg:mx-2 lg:mt-24">
            <div className="bg-stone-900/30 backdrop-blur-md p-2 lg:p-2 shadow-1 ">
                <ImageGallery Image={Image} />

                <div className="flex flex-col items-center">
                    <h3 className="m-6 text-xl text-white font-semibold lg:hover:scale-105 lg:transition-all lg:duration-300 lg:text-2xl">
                        <a
                            href={Link[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {Title[0]}
                        </a>
                    </h3>

                    <div className="px-2 lg:p-10 text-white text-justify">

                        <p className="mb-4">{Description[0]}</p>
                        <p className="mb-2">{Description[1]}</p>
                        <p className="mb-2">{Description[2]}</p>


                        {/* Affichage dynamique des technologies avec TechStack */}
                        <p className="mt-6 text-lg text-justify">Développé avec :</p>
                        <TechStack items={techItems} /> {/* Passer les items au composant */}

                        <p className="mt-4">{Description[3]}</p>
                    </div>

                    {/* Affichage conditionnel du bouton MoreInfos */}
                    {ButtonHref && TitleButton && (
                        <MoreInfos
                            href={ButtonHref}
                            label={TitleButton}
                            className="my-8 lg:mb-12 inline-block rounded-full px-7 py-2 text-base font-semibold transition "
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default LayoutProject;
