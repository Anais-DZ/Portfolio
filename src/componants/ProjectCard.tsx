import { Project } from "../types/models";
import MoreInfos from "./MoreInfos";
import { IoIosLink } from "react-icons/io";

interface ProjectCardProps extends Project { } //mettre cette ligne de code pour récupérer les props de Project

const ProjectCard = ({
    Image,
    Title,
    Description,
    Link,
    ButtonHref,
    TitleButton
}: ProjectCardProps) => {

    return (
        <>
            <div className="w-full bg-gradient p-2">
                <div className="flex flex-col bg-stone-900/30 backdrop-blur-md p-2 h-full">

                    {/* Image avec taille contrôlée */}
                    <img
                        src={Image[0]}
                        alt=""
                        className="w-full h-54 lg:h-58 object-cover mb-4"
                    />

                    {/* Contenu */}
                    <div className="flex flex-col flex-grow justify-between text-center text-white space-y-4">
                        <div>
                            <h3>
                                {Link ? (
                                    <a
                                        href={Link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" text-xl font-semibold lg:hover:scale-115 lg:transition-all lg:duration-300 flex items-center justify-center gap-2"
                                    >
                                        <IoIosLink />
                                        {Title}
                                    </a>
                                ) : (
                                    <span className="block text-xl font-semibold">{Title}</span>
                                )}
                            </h3>

                            <p className="text-base leading-relaxed">
                                {Description}
                            </p>
                        </div>

                        {/* Bouton avec largeur auto */}
                        <div className="mt-2 flex justify-center">
                            <MoreInfos
                                href={ButtonHref}
                                label={TitleButton}
                                className="px-4 py-2"
                                disabled={!ButtonHref}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard