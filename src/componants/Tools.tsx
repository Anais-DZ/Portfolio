import { GrMysql } from "react-icons/gr";
import { IoLogoFigma } from "react-icons/io5";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

function Tools() {

    return (

        <div>
            <h3 className="text-lg text-center mt-6 lg:text-2xl lg:mt-0">
                Outils
            </h3>

            <div className="flex flex-row w-full max-w-lg justify-evenly">

                {/*ligne des icones avec leurs noms*/}
                <div className="flex ">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <GrMysql className="w-8 h-8" />
                        <p className="cursor-default">
                            MySQL
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <IoLogoFigma className="w-8 h-8" />
                        <p className="cursor-default">
                            Figma
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <VscVscodeInsiders className="w-8 h-8" />
                        <p className="cursor-default">
                            VS Code
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <FaGithub className="w-8 h-8" />
                        <p className="cursor-default">
                            GitHub
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <SiFirebase className="w-8 h-8" />
                        <p className="cursor-default">
                            Firebase
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Tools;