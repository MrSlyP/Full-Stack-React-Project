import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import axios from "axios";
const link1 = "http://localhost:3000/";
const link2 = "http://localhost:3000/del";

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(link1);
      setTaskList(response.data);
    })();
  }, []);

  //inspire by https://stackabuse.com/making-asynchronous-http-requests-in-javascript-with-axios/
  const sendPostRequest = async (taskEntered) => {
    let sending = { task: taskEntered };
    try {
      const resp = await axios.post(link1, sending);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  const sendDelRequest = async (idToDel) => {
    let delReq = { id: idToDel };
    try {
      const resp = await axios.post(link2, delReq);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  function addTask(taskEntered) {
    sendPostRequest(taskEntered);
    setTaskList((taskList) => [...taskList, taskEntered]);
  }

  function deleteTask(id) {
    const taskToDelete = taskList[id];
    sendDelRequest(id);
    setTaskList(taskList.filter((task) => task !== taskToDelete));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="card bg-secondary border-light text-black p-5">
          <div className="card-body">
            <Form add={addTask} />
            <List view={taskList} onDelete={deleteTask} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
