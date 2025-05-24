import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import { RiDatabase2Fill } from "react-icons/ri";


function Languages() {

    return (

        <div>
            <h3 className="text-lg lg:text-2xl text-center">
                Langages
            </h3>

            <div className="flex flex-row w-full max-w-lg justify-evenly">

                {/*ligne des icones avec leurs noms*/}
                <div className="flex ">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <FaHtml5 className="w-8 h-8" />
                        <p className="cursor-default">
                            HTML
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <FaCss3Alt className="w-8 h-8" />
                        <p className="cursor-default">
                            CSS
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <BiLogoJavascript className="w-8 h-8" />
                        <p className="cursor-default">
                            JS
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <SiPhp className="w-8 h-8" />
                        <p className="cursor-default">
                            PHP
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center lg:hover:scale-120 lg:transition-all lg:duration-300">
                        <RiDatabase2Fill  className="w-8 h-8" />
                        <p className="cursor-default">
                            SQL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Languages;