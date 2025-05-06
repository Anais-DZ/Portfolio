import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaWordpress } from "react-icons/fa";


function Frameworks() {

    return (

        <div>
            <h3 className="text-lg mt-6 lg:text-2xl lg:mt-0">
                Frameworks
            </h3>

            <div className="flex flex-row w-full max-w-lg justify-evenly">

                {/*ligne des icones avec leurs noms*/}
                <div className="flex ">
                    <div className="flex flex-col items-center">
                        <FaReact className="w-8 h-8" />
                        <p>
                            React
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <RiTailwindCssFill className="w-8 h-8" />
                        <p>
                            Tailwind CSS
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <FaBootstrap className="w-8 h-8" />
                        <p>
                            Bootstrap
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <FaWordpress className="w-8 h-8" />
                        <p>
                            Wordpress
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Frameworks;