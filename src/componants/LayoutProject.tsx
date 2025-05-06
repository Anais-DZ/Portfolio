import { Project } from "../types/models";

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
        <div className="flex flex-col items-center my-6">
            <img src={Image[0]} alt="image 1" className="w-3/5" />
            <img src={Image[1]} alt="image 2" className="w-3/5" />
        </div>
        </>


    );
}

export default LayoutProject;