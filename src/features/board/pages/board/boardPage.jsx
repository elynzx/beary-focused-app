import { TaskCard } from "../../components/taskCard/taskCard";
import { QUADRANTS } from "../../utils/constants";
import { Header } from "../../components/header/header";
import { useOutletContext } from "react-router";

export function BoardPage() {
    const { tasks, addTask, deleteTask, updateStatus, updateTask } =
        useOutletContext();

    return (
        <div className="flex flex-col w-full h-full overflow-hidden">
            <Header onAdd={addTask} tasks={tasks} />
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-fit lg:p-5">
                    {QUADRANTS.map((quadrant) => (
                        <TaskCard
                            key={quadrant.id}
                            quadrant={quadrant}
                            subtitle={quadrant.description}
                            tasks={tasks.filter(
                                (task) => task.quadrant === quadrant.id,
                            )}
                            onDelete={deleteTask}
                            onUpdateStatus={updateStatus}
                            onUpdatetask={updateTask}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
