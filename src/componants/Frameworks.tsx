import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaWordpress } from "react-icons/fa";


function Frameworks() {

    return (

        <div>
            <h3 className="text-lg mt-6 lg:text-2xl lg:mt-0 text-center">
                Frameworks
            </h3>

            <div className="flex flex-row w-full max-w-lg justify-evenly">

                {/*ligne des icones avec leurs noms*/}
                <div className="flex ">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <FaReact className="w-8 h-8" />
                        <p className="cursor-default">
                            React
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <RiTailwindCssFill className="w-8 h-8" />
                        <p className="cursor-default">
                            Tailwind CSS
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <FaBootstrap className="w-8 h-8" />
                        <p className="cursor-default">
                            Bootstrap
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <FaWordpress className="w-8 h-8" />
                        <p className="cursor-default">
                            Wordpress
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Frameworks;