import { useParams, useNavigate, useOutletContext } from "react-router";
import { LuChevronLeft } from "react-icons/lu";
import { QUADRANTS } from "../../utils/constants";
import { FocusHeader } from "../../components/focus-header/focus-header";
import { FocusProgressBar } from "../../components/focus-progress-bar/focus-progress-bar";

export function FocusPage() {
    const { quadrant: quadrantId } = useParams();
    const { tasks, updateStatus, updateTask } = useOutletContext();
    const navigate = useNavigate();

    const quadrant = QUADRANTS.find((q) => q.id === quadrantId);

    if (!quadrant) {
        navigate("/");
        return null;
    }

    const quadrantTasks = tasks.filter((t) => t.quadrant === quadrantId);
    const completed = quadrantTasks.filter(
        (t) => t.status === "COMPLETED",
    ).length;
    const total = quadrantTasks.length;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <div className="flex flex-col w-full h-full px-4 py-10 lg:p-8 gap-6 ">
            <FocusHeader
                title={quadrant.label}
                description={quadrant.description}
                onBack={() => navigate(-1)}
            />

            <div className="flex flex-col gap-12 lg:flex-1 overflow-hidden px-6">
                <div className="flex flex-col flex-1 gap-3">
                    <FocusProgressBar
                        completed={completed}
                        total={total}
                        progress={progress}
                        colorClass={quadrant.headerBg}
                    />

                    <div className="flex flex-col gap-2 overflow-auto mt-6 font-item font-semibold">
                        {quadrantTasks.length === 0 && (
                            <p className="text-xs text-bgDarkGray text-center mt-8">
                                No tasks in this quadrant
                            </p>
                        )}
                        {quadrantTasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex items-center gap-3 px-2 py-2 border-b-2 border-dotted border-bgDarkGray/20"
                            >
                                <input
                                    type="checkbox"
                                    checked={task.status === "COMPLETED"}
                                    onChange={() =>
                                        updateStatus(
                                            task.id,
                                            task.status === "COMPLETED"
                                                ? "PENDING"
                                                : "COMPLETED",
                                        )
                                    }
                                    className="w-4 h-4 accent-bgDarkGray cursor-pointer"
                                />
                                <span
                                    className={`text-xs text-bgDarkGray flex-1 ${
                                        task.status === "COMPLETED"
                                            ? "line-through opacity-50"
                                            : ""
                                    }`}
                                >
                                    {task.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-64 bg-white rounded-3xl border border-bgDarkGray/20 flex flex-col items-center justify-center gap-2 py-12 lg:p-6 shrink-0">
                    <span className="text-xs text-bgDarkGray/40 font-semibold uppercase tracking-wide">
                        Pomodoro
                    </span>
                    <span className="text-4xl font-bold text-bgDarkGray">
                        25:00
                    </span>
                </div>
            </div>
        </div>
    );
}
