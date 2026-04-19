import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { QUADRANTS } from "../../../features/board/utils/constants";

export const Dropdown = ({ selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = QUADRANTS.find((q) => q.id === selected);

    const handleClick = (quadrant) => {
        onSelect(quadrant.id);
        setIsOpen(false);
    };

    return (
        <div className="relative text-xs">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-80 h-9 px-5 text-bgDarkGray font-bold bg-bgDarkPink border border-bgDarkGray rounded-full flex items-center justify-between hover:opacity-90 transition-all"
            >
                <span className="truncate">
                    {selectedOption ? selectedOption.label : "Select priority"}
                </span>
                <LuChevronDown
                    className={`ml-2 shrink-0 text-bgDarkGray text-2xl transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </button>
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-full min-w-40 bg-bgLightPink text-bgGray rounded-xl shadow-lg z-10 overflow-hidden border-2 border-bgDarkGray ">
                    {QUADRANTS.map((quadrant) => (
                        <li
                            key={quadrant.id}
                            onClick={() => handleClick(quadrant)}
                            className="px-4 py-2 hover:bg-bgGray hover:text-white cursor-pointer transition-colors text-sm"
                        >
                            {quadrant.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
