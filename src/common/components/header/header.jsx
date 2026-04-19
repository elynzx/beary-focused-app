import { useState, useEffect } from "react";
import { Dropdown } from "../dropdown/dropdown";
import bear1 from "../../../assets/progress-bar/progress-bear-1.svg";
import bear2 from "../../../assets/progress-bar/progress-bear-2.svg";
import bear3 from "../../../assets/progress-bar/progress-bear-3.svg";
import bear4 from "../../../assets/progress-bar/progress-bear-4.svg";
import { ProgressBar } from "../progress-bar/progressBar";

const BEARS = [bear1, bear2, bear3, bear4];

export function Header({ onAdd, tasks }) {
    const [title, setTitle] = useState("");
    const [quadrantId, setQuadrantId] = useState(null);

    const doNowTasks = tasks.filter((t) => t.quadrant === "DO_NOW");
    const doNowCompleted = doNowTasks.filter(
        (t) => t.status === "COMPLETED",
    ).length;
    const doNowTotal = doNowTasks.length;
    const progress =
        doNowTotal === 0 ? 0 : Math.round((doNowCompleted / doNowTotal) * 100);

    const getBear = () => {
        if (doNowTotal === 0 || progress === 0) return BEARS[0];
        if (progress < 51) return BEARS[1];
        if (progress < 100) return BEARS[2];
        return BEARS[3];
    };

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
            <div className="flex flex-col justify-between gap-4">
                <h2 className="text-xl font-semibold font-title text-bgDarkGray">
                    Beary Focused
                </h2>
                <ProgressBar
                    progress={progress}
                    completed={doNowCompleted}
                    total={doNowTotal}
                    bear={getBear()}
                />
            </div>
            <div className="flex">
                <span className="font-semibold text-bgDarkGray mr-8 mt-2.5">
                    Quick Add Task:
                </span>
                <div className="flex flex-col gap-3 w-80">
                    <input
                        placeholder="I need to..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleClick()}
                        className="bg-white h-9 text-xs px-6 text-bgDarkGray outline-none border border-transparent focus:border-bgDarkGray transition-all rounded-full placeholder:text-bgBrown4/40"
                    />
                    <div className="flex gap-3 justify-between">
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
