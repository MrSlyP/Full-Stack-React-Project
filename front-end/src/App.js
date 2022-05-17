import React, {useState} from "react";
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask(taskEntered) {
      return setTaskList((taskList) => [...taskList, taskEntered]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="card bg-secondary border-light text-black p-5">
        <div class="card-body">
        <Form add={addTask}/>
        <List view={taskList}/>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
