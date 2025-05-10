import { ReactNode } from "react";

interface TechItem {
    icon: ReactNode;
    label: string;
};

interface TechStackProps {
    items: TechItem[];
};

function TechStack({ items }: TechStackProps) {
    return (
        <>
            <div className="flex flex-wrap items-center">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-8 mr-6">
                        <div className=" text-white">{item.icon}</div>
                        <p className="text-xs text-center mt-1">{item.label}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default TechStack;
