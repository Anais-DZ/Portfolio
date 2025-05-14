interface EcoIndexStaticBadgeProps {
  url: string;
  theme?: 'light' | 'dark';
}

function EcoIndexStaticBadge({ url, theme = 'light' }: EcoIndexStaticBadgeProps) {
  const ecoIndexUrl = `https://bff.ecoindex.fr/redirect/?url=${url}`;
  const ecoIndexImage = `https://bff.ecoindex.fr/badge/?theme=${theme}&url=${url}`;

  return (
    <div>
      <a href={ecoIndexUrl} target="_blank" rel="noopener noreferrer">
        <img src={ecoIndexImage} alt="Ecoindex Badge" />
      </a>
    </div>
  );
};

export default EcoIndexStaticBadge;
