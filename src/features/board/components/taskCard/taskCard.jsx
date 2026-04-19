import { useState } from "react";
import bearDone from "../../../../assets/mini-bear2.svg";
import bearPending from "../../../../assets/mini-bear3.svg";

export function TaskCard({
    title,
    subtitle,
    tasks,
    onDelete,
    onUpdateStatus,
    onUpdatetask,
}) {
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");

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
        <div className="bg-white rounded-3xl flex flex-col shadow-sm border border-bgDarkGray w-full h-full">
            <div className="text-white py-2 rounded-t-3xl flex flex-col items-center justify-center bg-bgDarkPink">
                <span className="text-xs font-bold">{title}</span>
                <span className="text-xs opacity-70">{subtitle}</span>
            </div>
            <div className="flex-1 flex flex-col justify-start p-4 gap-1">
                {tasks.length === 0 && (
                    <p className="text-xs text-bgDarkGray/40 text-center mt-4">
                        No tasks yet
                    </p>
                )}
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex items-center gap-3 px-2"
                    >
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
