import { Project } from "../types/models";
import ImageGallery from "./ImageGallery";
import MoreInfos from "./MoreInfos";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";

interface LayoutProjectProps extends Project { }

const LayoutProject = ({
    Image,
    Title,
    Description,
    Link,
    ButtonHref,
    TitleButton,
}: LayoutProjectProps) => {

    return (
        <div className="w-full bg-gradient p-2 mt-18 mb-6 lg:my-20 lg:mx-2">

            <div className="bg-stone-900/30 backdrop-blur-md p-2 lg:p-2 shadow-1 ">

                <ImageGallery Image={Image} />

                <h3>
                    <a
                        href={Link[0]}
                        className="mt-10 text-xl text-white font-semibold lg:hover:scale-105 lg:transition-all lg:duration-300 lg:text-2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {Title[0]}
                    </a>
                </h3>

                <div className="px-2 lg:p-10 text-white text-start">

                    <div className="py-6 text-base ">
                        <p className="mb-4">
                            {Description[0]}
                        </p>

                        <p className="mb-2">
                            {Description[1]}
                        </p>

                        <p className="mb-2">
                            {Description[2]}
                        </p>
                    </div>

                    {/*ligne des icones avec leurs noms*/}
                    <p className=" mb-2 mt-4 text-lg text-justify">
                        Développé avec :
                    </p>
                    <div className="flex justify-start items-center">

                        <div className="flex flex-col items-center mr-4">
                            <FaHtml5 className="lg:w-8 lg:h-8 w-7 h-7 " />
                            <p className=" text-sm">
                                HTML
                            </p>
                        </div>
                        <div className="flex flex-col items-center mr-4">
                            <FaCss3Alt className="lg:w-8 lg:h-8 w-7 h-7 " />
                            <p className=" text-sm">
                                CSS
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <BiLogoJavascript className="lg:w-8 lg:h-8 w-7 h-7 " />
                            <p className=" text-sm">
                                JS
                            </p>
                        </div>
                    </div>
                    <p className="mt-4">
                        {Description[3]}
                    </p>
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
    );
}

export default LayoutProject;
