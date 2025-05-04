import NetworkLinks from "./NetworkLinks";

function Footer() {


    return (

        <footer className="flex flex-col items-center justify-center border-t-1 border-gray-400 pt-5 px-5 p-3">
            <NetworkLinks />
            <p className="text-lg font-[Orbitron] mt-2">©2025 Anaïs DIEZ</p>
        </footer>

    );
}

export default Footer;