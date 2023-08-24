import { useEffect, useState } from 'react';

import GetTasks from '../GetTasks/GetTasks';
import PostTask from '../PostTask/PostTask';

import axios from "axios";

import './App.css';

function App() {
  
  // task list
  let [taskList, setTaskList] = useState([]);

  // Get
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

  // Put
  const addTask = (newTask) => {
    axios
      .post("/tasks", {
        task: newTask.task
      })
      .then(response => {
        console.log(response);
        getTasks();
      })
      .catch(error => {
        console.log(error);
      })
  }

  // Put
  const toggleTask = (id) => {
    axios
      .put(`/tasks/toggle/${id}`)
      .then((response) => {
        console.log(response);
        getTasks();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Put, edit task route
  const editTask = (id, updatedTask) => {
    axios
      .put(`/tasks/edit/${id}`, { task:updatedTask })
      .then((response) => {
        console.log(response);
        getTasks();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Remove function
  const removeTask = (id) => {
    axios.delete(`/tasks/${id}`)
      .then((response) => {
        console.log(response);
        getTasks();
      })
      .catch(error => {
        console.log(error);
      });
  };

  // page start
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div>
      <h1>TO DO APP</h1>
      <GetTasks taskList={taskList} toggleTask={toggleTask} removeTask={removeTask} editTask={editTask} />
      <br />
      <PostTask addTask={addTask} />
    </div>
  );

}

export default App
