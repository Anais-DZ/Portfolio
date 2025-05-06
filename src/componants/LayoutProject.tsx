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
    ButtonHref
}: LayoutProjectProps) => {

    return (
        <div className="w-full bg-gradient p-2 m-2 lg:my-8">

            <div className="overflow-hidden  bg-stone-900/30 backdrop-blur-md p-2 lg:p-2 shadow-1 duration-300">
                <h3>
                    <a
                        href={Link[0]}
                        className="mt-10 underline underline-offset-3 block text-xl text-white font-semibold lg:hover:scale-105 lg:transition-all lg:duration-300 lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {Title[0]}
                    </a>
                </h3>

                <ImageGallery Image={Image} />


                {/*ligne des icones avec leurs noms*/}
                <p className="text-white lg:ml-6 mb-2 mt-4 lg:mt-10 text-lg text-start">
                    Développé avec :
                </p>
                <div className="flex justify-start items-center lg:ml-6">

                    <div className="flex flex-col items-center mr-4">
                        <FaHtml5 className="lg:w-8 lg:h-8 w-7 h-7 text-white" />
                        <p className="text-white text-sm">
                            HTML
                        </p>
                    </div>
                    <div className="flex flex-col items-center mr-4">
                        <FaCss3Alt className="lg:w-8 lg:h-8 w-7 h-7 text-white" />
                        <p className="text-white text-sm">
                            CSS
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <BiLogoJavascript className="lg:w-8 lg:h-8 w-7 h-7 text-white" />
                        <p className="text-white text-sm">
                            JS
                        </p>
                    </div>
                </div>

                <h3 className="text-start lg:ml-6 lg:mt-10">
                    <a
                        href={Link[1]}
                        className="mt-4 block text-xl font-semibold text-white lg:hover:scale-105 lg:transition-all lg:duration-300 lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {Title[1]}
                    </a>
                </h3>
                <p className="mb-2 text-base leading-relaxed text-body-color">
                    {Description}
                </p>

                <MoreInfos href={ButtonHref} className="mt-20 mb-10 lg:mb-8 lg:mt-20" />
            </div>
        </div>


    );
}

export default LayoutProject;