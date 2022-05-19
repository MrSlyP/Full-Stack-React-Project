import React, {useEffect, useState} from "react";
import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import axios from 'axios';

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask(taskEntered) {
      return setTaskList((taskList) => [...taskList, taskEntered]);
  };

  useEffect(()=>{
  /*  fetch('http://localhost:3000/tudoList')
    .then(response => response.json())
    .then (({tudoList})=>setTaskList(tudoList))

  },[])*/

  (async()=> {
    const response = await axios.get('http://localhost:3000/tudoList');
    setTaskList(response.data);
  })();
}
,[]) 

  function deleteTask(id) {
    const taskToDelete = taskList[id];
    setTaskList(taskList.filter((task) => task !== taskToDelete))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="card bg-secondary border-light text-black p-5">
        <div className="card-body">
        <Form add={addTask}/>
        <List view={taskList} onDelete={deleteTask}/>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
