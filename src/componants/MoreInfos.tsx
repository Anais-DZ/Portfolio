interface MoreInfosProps {
    href: string;
    className?: string;
    label?: string;
}

const MoreInfos = ({
    href,
    className = "",
    label = "+ d'infos à venir...",
}: MoreInfosProps) => {
    return (
        <a
            href={href}
            className={`inline-block rounded-full border mb-2 lg:mt-4 lg:mb-0 bg-white px-7 py-2 text-base font-semibold text-body-color transition hover:border-primary hover:bg-transparent hover:text-white hover:border-white text-stone-900 ${className}`}
        >
            {label}
        </a>
    );
};

export default MoreInfos;
