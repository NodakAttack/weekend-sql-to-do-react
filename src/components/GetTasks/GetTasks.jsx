import './GetTasks.css';

function GetTasks({ taskList, toggleTask, removeTask }) {
    return (
        <div>
            {taskList.map(item => (
                <div key={item.id}>
                    {/* conditional styling */}
                    <label className={item.completed ? 'completed' : 'notCompleted'}>
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => toggleTask(item.id)}
                        />
                        {item.task}
                    </label> 
                    <button id='remove' onClick={() => removeTask(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default GetTasks;