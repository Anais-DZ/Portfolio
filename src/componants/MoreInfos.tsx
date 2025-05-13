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
    label = "",
    disabled = false,
    target,
    rel,
}: MoreInfosProps) => {
    return (
        <a
            href={disabled ? undefined : href}
            className={`
        inline-block rounded-full no-border mb-1 lg:mt-4 lg:mb-2 
        px-7 py-2 text-base font-semibold transition-all duration-500 ease-in-out
        ${disabled
                    ? "bg-gray-400 text-white cursor-not-allowed"
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
