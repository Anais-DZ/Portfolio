import { FaGithub, FaLinkedin, FaEnvelope, FaFlickr } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { useLocation } from "react-router-dom";

interface NetworkLinksProps {
  className?: string;
}

function NetworkLinks({ className }: NetworkLinksProps) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const contactLink = isHomePage ? "#contact" : "/#contact";

  return (
    <nav className={`flex flex-row space-x-5 lg:space-x-7 ${className}`}>
      <a
        href="https://github.com/Anais-DZ"
        aria-label="Voir mon profil GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-7 h-7 lg:w-9 lg:h-9" />
      </a>
      <a
        href="https://www.linkedin.com/in/anaïs-diez"
        aria-label="Voir mon profil LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-7 h-7 lg:w-9 lg:h-9" />
      </a>
      <a
        href="https://www.flickr.com/photos/themis_photographie/"
        aria-label="Voir mon profil Flickr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFlickr className="w-7 h-7 lg:w-9 lg:h-9" />
      </a>
      <a
        href={contactLink}
        aria-label="Me contacter"
      >
        <FaEnvelope className="w-7 h-7 lg:w-9 lg:h-9" />
      </a>
      <a
        href="/cv-anais-diez.pdf"
        aria-label="Voir mon CV en PDF"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbFileCv className="w-8 h-8 lg:w-10 lg:h-10" />
      </a>
    </nav>
  );
}

export default NetworkLinks;