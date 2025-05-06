import { Project } from "../types/models";
import MoreInfos from "./MoreInfos";

interface LayoutProjectProps extends Project { }


const LayoutProject = ({
    Image,
    Title,
    Description,
    Link,
    ButtonHref
}: LayoutProjectProps) => {

    return (
        <>
            <h3>
                <a
                    href={Link[0]}
                    className="mt-10 underline underline-offset-3 block text-xl font-semibold lg:hover:scale-105 lg:transition-all lg:duration-300 lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {Title[0]}
                </a>
            </h3>
            <div className="flex flex-col items-center my-6">
                <img src={Image[0]} alt="image 1" className="w-3/5" />
                <img src={Image[1]} alt="image 2" className="w-3/5" />
            </div>
            <h3>
                <a
                    href={Link[1]}
                    className="mt-4 block text-xl font-semibold lg:hover:scale-105 lg:transition-all lg:duration-300 lg:text-[22px] xl:text-xl 2xl:text-[22px]"
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
        </>


    );
}

export default LayoutProject;