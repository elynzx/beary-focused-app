import { useState, useEffect } from "react";
import { Dropdown } from "../dropdown/dropdown";
import bearHeader1 from "../../../assets/header-bear-1.svg";
import bearHeader2 from "../../../assets/header-bear-2.svg";

export function Header({ onAdd }) {
    const [bear, setBear] = useState(bearHeader1);
    const [title, setTitle] = useState("");
    const [quadrantId, setQuadrantId] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setBear((image) =>
                image === bearHeader1 ? bearHeader2 : bearHeader1,
            );
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        if (!title || !quadrantId) return;
        if (onAdd) {
            onAdd(title, quadrantId);
        }
        setTitle("");
        setQuadrantId(null);
    };

    return (
        <header className="w-full px-12 py-6 flex items-center justify-between border-b border-black shrink-0">
            <div className="relative group transition-transform duration-500 hover:scale-105">
                <img
                    src={bear}
                    className="h-20 object-contain"
                    alt="Bear mascot"
                />

                <div className="absolute top-13 left-10 w-32 text-center">
                    <p className="text-bgBrown4 font-bold animate-pulse">
                        " Today, I will... "
                    </p>
                </div>
            </div>

            <div className="flex">
                <span className="font-semibold text-bgDarkGray mr-8 mt-2.5">
                    Quick Add Task:
                </span>
                <div className="flex flex-col gap-3">
                    <input
                        placeholder="I need to..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleClick()}
                        className="bg-white h-7 text-xs px-6 text-bgDarkGray w-full outline-none border-2 border-transparent focus:border-bgDarkGray transition-all rounded-full placeholder:text-bgBrown4/40"
                    />
                    <div className="flex gap-3">
                        <Dropdown
                            selected={quadrantId}
                            onSelect={setQuadrantId}
                        />
                        <button
                            className="px-6 h-9 text-xs rounded-full text-bgDarkGray border border-bgDarkGray font-bold hover:brightness-110 active:scale-95 transition-all"
                            onClick={handleClick}
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
