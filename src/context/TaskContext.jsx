import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask({ title, description }) {
        setTasks([...tasks, { 
            title: title, 
            id: tasks.length,
            description: description
        }]);
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <TaskContext.Provider value={{tasks, createTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}