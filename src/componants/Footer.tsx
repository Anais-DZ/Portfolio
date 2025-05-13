import NetworkLinks from "./NetworkLinks";

function Footer() {


    return (

        <footer className="flex flex-col items-center justify-center border-t-1 border-gray-400 pt-5 px-5 p-3">
            <NetworkLinks  className="text-pink-800 my-3"/>
            <p className="text-sm lg:text-lg font-[Orbitron] text-pink-800 text-center">©2025 Anaïs DIEZ. Tous droits réservés.</p>
        </footer>

    );
}

export default Footer;