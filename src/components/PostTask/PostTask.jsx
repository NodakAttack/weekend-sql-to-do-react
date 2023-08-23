import React, { useState } from "react";
import './PostTask.css'

function PostTask ({ addTask }) {
    const [task, setTask] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
        task:task
    }

    addTask(newTask);

    //clear input
    setTask("")
}

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" value={task} placeholder="Add Task" onChange={e => setTask(e.target.value)} />
                <button id="submit" type="submit">Add Task</button>
            </form>
        </div>
    )
}
export default PostTask;