import { useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title, quadrantId) => {
        const newTask = {
            id: Date.now(),
            title: title,
            quadrant: quadrantId,
            status: "PENDING",
        };

        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        const updated = tasks.filter((task) => task.id !== id);
        setTasks(updated);
    };

    const updateTask = (id, changes) => {
        const updated = tasks.map((task) =>
            task.id === id ? { ...task, ...changes } : task,
        );
        setTasks(updated);
    };

    const updateStatus = (id, newStatus) => {
        updateTask(id, { status: newStatus });
    };

    return {
        tasks,
        addTask,
        deleteTask,
        updateTask,
        updateStatus,
    };
};
