import React, {useEffect, useState} from "react";
import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import axios from 'axios';


function App() {
  const [taskList, setTaskList] = useState([]);

  /*useEffect ( ()=>{
    axios.get('http://localhost:3000/')
  .then(response=>setTaskList(response.data));
    },[] )*/

    useEffect ( ()=>{
      fetch('http://localhost:3000/')
      .then((response)=>{
        return response.json() //ceci genere une autre promesse donc un autre .then
    })
    .then(data =>setTaskList(data));
      },[] )

  function addTask(taskEntered) {
      return setTaskList((taskList) => [...taskList, taskEntered]);
  };
  
  

 /* useEffect(()=>{
    (async()=> {
    const response = await axios.get('http://localhost:3000/');
    setTaskList(response.data);
  })();
}
,[]) */

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
