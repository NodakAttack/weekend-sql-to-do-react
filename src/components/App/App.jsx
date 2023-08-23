import {useEffect, useState} from 'react';

import GetTasks from '../GetTasks/GetTasks';
import PostTask from '../PostTask/PostTask';

import axios from "axios";


import './App.css';

function App () {
  let [taskList, setTaskList] = useState([]);

  const getTasks = () => {
    axios  
        .get('/tasks')
        .then((response) => { 
            console.log(response.data);
            setTaskList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

const addTask = (newTask) => {
  axios
  .post("/tasks", {
    task:newTask.task
  })
  .then(response => {
    console.log(response);
    getTasks();
  })
  .catch(error => {
    console.log(error);
  })
}

useEffect(() => {
  getTasks()
}, [])
  
  return (
    <div>
      <h1>TO DO APP</h1>
      <GetTasks taskList={taskList} />
      <PostTask addTask={addTask} />
    </div>
  );

}

export default App
