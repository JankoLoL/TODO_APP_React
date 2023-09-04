import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import NewTask from "./components/NewTask";
import Task from "./components/Task";

import { getTasks } from './api/tasks';

function App() {

    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        getTasks((data) => {
            console.log(data);
            setTasks(data);
        });
    }, []);

    // () addNewTask
    // () removeTask

    return (
        <>
            <NewTask />
            {
                tasks && tasks.map(task => <Task key={task.id} task={task} />)
            }
        </>
    )

}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
