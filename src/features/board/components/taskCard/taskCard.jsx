import { useState } from "react";
import bearDone from "../../../../assets/mini-bear2.svg";
import bearPending from "../../../../assets/mini-bear.svg";
import { useNavigate } from "react-router";
import { LuChevronRight } from "react-icons/lu";

export function TaskCard({
    quadrant,
    tasks,
    onDelete,
    onUpdateStatus,
    onUpdatetask,
}) {
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");
    const navigate = useNavigate();

    const completed = tasks.filter(
        (task) => task.status === "COMPLETED",
    ).length;
    const total = tasks.length;

    const startEditing = (task) => {
        setEditingId(task.id);
        setEditingText(task.title);
    };

    const saveEdit = () => {
        if (editingText.trim()) {
            onUpdatetask(editingId, { title: editingText.trim() });
        }
        setEditingId(null);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") saveEdit();
        if (e.key === "Escape") setEditingId(null);
    };

    return (
        <div className="col-span-1 bg-white rounded-2xl flex flex-col border border-bgDarkGray/50 w-full h-full">
            <div
                onClick={() => navigate(`/focus/${quadrant.id}`)}
                className={`
                    group py-2.5 px-6 rounded-t-2xl flex items-center justify-between
                    cursor-pointer transition-all duration-200
                    ${quadrant.headerBg} ${quadrant.headerText} ${quadrant.hoverBg}
                `}
            >
                <div className="flex flex-col">
                    <span className="text-2xs font-bold">{quadrant.label}</span>
                    <span className="text-xs">{quadrant.description}</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold ">
                        {completed}/{total}
                    </span>
                    <LuChevronRight className="text-lg transition-all duration-200 group-hover:translate-x-1" />
                </div>
            </div>

            <div className="flex-1 font-item flex flex-col justify-start px-4 py-6 gap-1">
                {total === 0 && (
                    <p className="text-xs text-bgDarkGray text-center mt-4">
                        No tasks yet
                    </p>
                )}
                {tasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-4 px-2">
                        <img
                            src={
                                task.status === "COMPLETED"
                                    ? bearDone
                                    : bearPending
                            }
                            onClick={() =>
                                onUpdateStatus(
                                    task.id,
                                    task.status === "COMPLETED"
                                        ? "PENDING"
                                        : "COMPLETED",
                                )
                            }
                            alt="status"
                            className="w-5 h-5 shrink-0 cursor-pointer transition-transform active:scale-90"
                        />

                        {editingId === task.id ? (
                            <input
                                autoFocus
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                                onBlur={saveEdit}
                                onKeyDown={handleKeyDown}
                                className="text-xs text-bgDarkGray font-semibold outline-none flex-1 bg-transparent border-b border-bgDarkGra"
                            />
                        ) : (
                            <span
                                onClick={() => startEditing(task)}
                                className={`text-xs text-bgDarkGray font-semibold  flex-1 cursor-text border-b border-dotted pb-1 border-bgDarkGray ${
                                    task.status === "COMPLETED"
                                        ? "line-through opacity-50"
                                        : ""
                                }`}
                            >
                                {task.title}
                            </span>
                        )}

                        <button
                            onClick={() => onDelete(task.id)}
                            className="text-bgDarkGray/40 hover:text-bgDarkGray text-xs transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
