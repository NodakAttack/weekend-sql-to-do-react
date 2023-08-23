function GetTasks ({ taskList, toggleTask }) {
    return(
        <div>
            {taskList.map(item => (
                <div key={item.id}>
                    <p>{item.task}
                    {item.completed ? 
                    (<button onClick={() => toggleTask(item.id)}>Done</button>)
                     : 
                    (<button onClick={() => toggleTask(item.id)}>Not Finished</button>)}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default GetTasks;