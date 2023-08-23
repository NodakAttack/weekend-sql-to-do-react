function GetTasks ({ taskList }) {
    return(
        <div>
            {taskList.map(item => (
                <div key={item.id}>
                    <p>{item.task}</p>

                </div>
            ))}
        </div>
    )
}
export default GetTasks;