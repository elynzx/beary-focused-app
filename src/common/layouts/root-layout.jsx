import { Outlet } from "react-router";
import { Sidebar } from "../components/sidebar/sidebar.jsx";
import { Header } from "../../features/board/components/header/header";
import { useTasks } from "../../features/board/hooks/useTasks";

export function RootLayout() {
    const { tasks, addTask, deleteTask, updateStatus, updateTask } = useTasks();

    return (
        <div className="h-screen w-full bg-bgLightPink text-bgGray flex items-center justify-center p-4 md:p-12">
            <div className="flex h-full w-full max-w-7xl flex-col bg-bgPink/20 rounded-4xl overflow-hidden border border-bgDarkGray/50 shadow-lg">
                <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                    <Sidebar />
                    <main className="flex-1 flex flex-col overflow-hidden">
                        <Outlet
                            context={{
                                tasks,
                                addTask,
                                deleteTask,
                                updateStatus,
                                updateTask,
                            }}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
}
