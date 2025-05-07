interface MoreInfosProps {
    href?: string;
    className?: string;
    label?: string;
    disabled?: boolean;
    target?: string;
    rel?: string;
}

const MoreInfos = ({
    href,
    className = "",
    label = "+ d'infos à venir...",
    disabled = false,
    target,
    rel,
}: MoreInfosProps) => {
    return (
        <a
            href={disabled ? undefined : href}
            className={`
                inline-block rounded-full no-border mb-2 lg:mt-4 lg:mb-0 
                px-7 py-2 text-base font-semibold transition 
                ${disabled
                    ? "bg-gray-400 text-white"
                    : "bg-white text-stone-900 border hover:border-white hover:bg-transparent hover:text-white"
                }
                ${className}
            `}
            onClick={(e) => disabled && e.preventDefault()}
            aria-disabled={disabled}
            target={target}
            rel={rel}
        >
            {label}
        </a>
    );
};

export default MoreInfos;
