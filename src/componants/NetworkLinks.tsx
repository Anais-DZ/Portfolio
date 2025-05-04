import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


interface NetworkLinksProps {
  className?: string;
}


function NetworkLinks({ className }: NetworkLinksProps) {
    return (
        <>
            <nav className="flex flex-row space-x-4 lg:space-x-6">
                <a
                    href="https://github.com/Anais-DZ"
                    aria-label="Voir mon profil GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className={`w-7 h-7 ${className}`} />
                </a>
                <a
                    href="https://www.linkedin.com/in/anaïs-diez"
                    aria-label="Voir mon profil LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className={`w-7 h-7 ${className}`} />
                </a>
                <a
                    href="#contact"
                    aria-label="Me contacter"
                >
                    <FaEnvelope className={`w-7 h-7 ${className}`} />
                </a>
            </nav>
        </>

    );
}

export default NetworkLinks;