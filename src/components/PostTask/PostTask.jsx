import React, { useState } from "react";
import './PostTask.css'
import { TextField } from "@mui/material";


function PostTask ({ addTask }) {
    const [task, setTask] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
        task:task
    }
    // add task
    addTask(newTask);

    //clear input
    setTask("")
}

    return (
        <div>

            <form onSubmit={handleSubmit}>
                {/* TODO modify text field */}
                <TextField type="text" value={task} placeholder="Add Task" onChange={e => setTask(e.target.value)} />
                <button id="submit" type="submit">Add Task</button>
            </form>
        </div>
    )
}
export default PostTask;