import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";
import {getTasks} from "./api/tasks";
import NewTask from "./NewTask";
import Task from "./Task";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(handleTasks);
    }, []);

    const handleTasks = (data) => {
        setTasks(data);
    };

    const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
    return (
        <>
            <NewTask addTask={addTask}/>
            {tasks.length > 0 && <Task task={tasks[0]} removeTask={removeTask}/>}
        </>
    )
}

export default App;


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
