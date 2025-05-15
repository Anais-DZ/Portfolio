import { FaGithub, FaLinkedin, FaFlickr } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { BsEnvelopeAtFill } from "react-icons/bs";

interface NetworkLinksProps {
  className?: string;
}

function NetworkLinks({ className }: NetworkLinksProps) {

  return (
    <nav className={`flex flex-row space-x-5 lg:space-x-7 ${className}`}>
      <a
        href="https://github.com/Anais-DZ"
        aria-label="Voir mon profil GitHub"
        target="_blank"
        rel="noopener noreferrer"
        title="Découvrir mon profil GitHub"
      >
        <FaGithub className="w-7 h-7 lg:w-9 lg:h-9" />
      </a>
      <a
        href="https://www.linkedin.com/in/anaïs-diez"
        aria-label="Voir mon profil LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        title="Voir mon profil LinkedIn"
      >
        <FaLinkedin className="w-7 h-7 lg:w-9 lg:h-9" />
      </a>
      <a
        href="https://www.flickr.com/photos/themis_photographie/"
        aria-label="Voir mon profil Flickr"
        target="_blank"
        rel="noopener noreferrer"
        title="Découvrir mon profil Flickr"
      >
        <FaFlickr className="w-7 h-7 lg:w-9 lg:h-9" />
      </a>
      <a
        href="mailto:diez.anais@gmail.com"
        aria-label="Me contacter par mail"
        target="_blank"
        rel="noopener noreferrer"
        title="Me contacter par mail"
      >
        <BsEnvelopeAtFill className="w-7 h-7 lg:w-9 lg:h-9" />
      </a>
      <a
        href="/cv-anais-diez.pdf"
        aria-label="Voir mon CV en PDF"
        target="_blank"
        rel="noopener noreferrer"
        title="Voir mon CV en PDF"
      >
        <TbFileCv className="w-8 h-8 lg:w-10 lg:h-10" />
      </a>
    </nav>
  );
}

export default NetworkLinks;