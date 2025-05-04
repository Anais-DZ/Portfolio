import { Project } from "../types/models";

interface ProjectCardProps extends Project {
    Button?: string; // si le texte du bouton est en plus du href
}

const ProjectCard = ({
    Image,
    Title,
    Description,
    TitleHref,
    ButtonHref,
    Button
}: ProjectCardProps) => {


    return (
        <>
            {/*  */}
            <div className="w-full rounded-md bg-gradient p-2 m-0 lg:m-0">

                <div className="overflow-hidden rounded-sm bg-stone-900/30 backdrop-blur-md p-2 lg:p-2 shadow-1 duration-300">

                    <img src={Image} alt="" className="w-full" />

                    <div className="text-center sm:p-4 md:p-4 lg:p-4">
                        <h3>
                            <a
                                href={TitleHref ? TitleHref : "#"}
                                className="my-4 block text-xl font-semibold text-white hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                            >
                                {Title}
                            </a>
                        </h3>
                        <p className="mb-7 text-base leading-relaxed text-body-color text-white">
                            {Description}
                        </p>

                        {Button && (
                            <a
                                href={ButtonHref ? ButtonHref : "#"}
                                className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-pink-800  text-white"
                            >
                                {Button}
                            </a>
                        )}
                    </div>
                </div>
            </div>
            {/*  */}
        </>
    );
};

export default ProjectCard