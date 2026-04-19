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
        <div className="col-span-1 bg-white rounded-2xl flex flex-col shadow-sm border border-bgDarkGray w-full h-56">
            
            <div
                onClick={() => navigate(`/focus/${quadrant.id}`)}
                className={`
                    group py-3 px-6 rounded-t-2xl flex items-center justify-between
                    cursor-pointer transition-all duration-200
                    ${quadrant.headerBg} ${quadrant.headerText} ${quadrant.hoverBg}
                `}
            >
                <div className="flex flex-col">
                    <span className="text-xs font-bold">{quadrant.label}</span>
                    <span className="text-xs opacity-70">
                        {quadrant.description}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold opacity-80">
                        {completed}/{total}
                    </span>
                    <LuChevronRight
                        className="text-lg opacity-0 group-hover:opacity-100 
                                   transition-all duration-200 group-hover:translate-x-1"
                    />
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-start p-4 gap-1">
                {tasks.length === 0 && (
                    <p className="text-xs text-bgDarkGray/40 text-center mt-4">
                        No tasks yet
                    </p>
                )}
                {tasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-3 px-2">
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
                            className="w-6 h-6 shrink-0 cursor-pointer transition-transform active:scale-90"
                        />

                        {editingId === task.id ? (
                            <input
                                autoFocus
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                                onBlur={saveEdit}
                                onKeyDown={handleKeyDown}
                                className="text-xs text-bgDarkGray font-bold outline-none flex-1 bg-transparent border-b border-bgDarkGra"
                            />
                        ) : (
                            <span
                                onClick={() => startEditing(task)}
                                className={`text-xs text-bgDarkGray font-bold  flex-1 cursor-text border-b border-dotted border-bgDarkGray ${
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
