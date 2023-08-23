import {useEffect, useState} from 'react';

import GetTasks from '../GetTasks/GetTasks';

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

useEffect(() => {
  getTasks()
}, [])
  
  return (
    <div>
      <h1>TO DO APP</h1>
      <GetTasks taskList={taskList}/>
    </div>
  );

}

export default App
