import { GrMysql } from "react-icons/gr";
import { IoLogoFigma } from "react-icons/io5";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

function Tools() {

    return (

        <div>
            <h3 className="text-lg mt-6 lg:text-2xl lg:mt-0">
                Outils
            </h3>

            <div className="flex flex-row w-full max-w-lg justify-evenly">

                {/*ligne des icones avec leurs noms*/}
                <div className="flex ">
                    <div className="flex flex-col items-center">
                        <GrMysql className="w-8 h-8" />
                        <p>
                            MySQL
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <IoLogoFigma className="w-8 h-8" />
                        <p>
                            Figma
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <VscVscodeInsiders className="w-8 h-8" />
                        <p>
                            VS Code
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <FaGithub className="w-8 h-8" />
                        <p>
                            GitHub
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <SiFirebase className="w-8 h-8" />
                        <p>
                            Firebase
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Tools;