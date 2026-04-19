import { TaskCard } from "../../components/taskCard/taskCard";
import { QUADRANTS } from "../../utils/constants";
import { useTasks } from "../../hooks/useTasks";
import { Header } from "../../../../common/components/header/header";

export function BoardPage() {
    const { tasks, addTask, deleteTask, updateStatus, updateTask } = useTasks();

    return (
        <div className="flex flex-col w-full h-full">
            <Header onAdd={addTask} tasks={tasks} />
            <div className="grid grid-cols-2 grid-rows-2 gap-6 p-6 flex-1 overflow-auto">
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
    );
}
