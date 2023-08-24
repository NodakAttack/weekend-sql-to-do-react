
import './GetTasks.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function GetTasks({ taskList, toggleTask, removeTask , editTask }) {

        // edit task button
    const handleEditClick = (taskId, task) => {
        const editedTask = prompt('Edit task?', task);

        const newTask = {
            task: editedTask
        }

        if (editedTask !== null) {
            editTask(taskId, newTask);
        }
    }

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
                    <button id='edit' onClick={() => handleEditClick(item.id, item.task)}><FontAwesomeIcon icon={faPen} /></button>
                </div>
            ))}
        </div>
    );
}

export default GetTasks;