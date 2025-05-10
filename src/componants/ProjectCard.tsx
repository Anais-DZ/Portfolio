import { Project } from "../types/models";
import MoreInfos from "./MoreInfos";

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
            <div className="w-full rounded-md bg-gradient p-2 m-0 lg:m-0">

                <div className="overflow-hidden rounded-sm bg-stone-900/30 backdrop-blur-md p-2 lg:p-2 shadow-1 duration-300">

                    <img src={Image[0]} alt="" className="w-full" />

                    <div className="text-center sm:p-4 md:p-4 lg:p-4">
                        <h3>
                            <a
                                href={Link}
                                className="mt-4 block text-xl font-semibold text-white lg:hover:scale-105 lg:transition-all lg:duration-300 lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {Title}
                            </a>
                        </h3>
                        <p className="mb-2 text-base leading-relaxed text-body-color text-white">
                            {Description}
                        </p>

                        <MoreInfos
                            href={ButtonHref}
                            label={TitleButton}
                            className="mt-4"
                            disabled={!ButtonHref}
                        />

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard