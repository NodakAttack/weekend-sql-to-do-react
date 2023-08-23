import React, { useState } from "react";

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
            <h1>Add Tasks:</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={task} placeholder="Task" onChange={e => setTask(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
export default PostTask;