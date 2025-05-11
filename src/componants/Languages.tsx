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
                    <div className="flex flex-col items-center">
                        <FaHtml5 className="w-8 h-8" />
                        <p>
                            HTML
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <FaCss3Alt className="w-8 h-8" />
                        <p>
                            CSS
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <BiLogoJavascript className="w-8 h-8" />
                        <p>
                            JS
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <SiPhp className="w-8 h-8" />
                        <p>
                            PHP
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <RiDatabase2Fill  className="w-8 h-8" />
                        <p>
                            SQL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Languages;