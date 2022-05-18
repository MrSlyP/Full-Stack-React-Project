import React, {useState} from "react";

function Form(props) {

let AddTask = props.add

const[task, setTask] = useState("");

function taskHandler() {
    AddTask(task);
    setTask("");
}

const submitHandler = (event) => {
    event.preventDefault();
}


  return (
    <form onSubmit={submitHandler}>
      <div className="card bg-dark border-primary text-white mb-3">
        <div className="card-body">
          <h5 className="card-title">TO DO LIST</h5>
          <input
            type="text"
            className="form-control my-3"
            placeholder="Enter task"
            value={task}
            onChange={(e) => {setTask(e.target.value)}}
          />
          <button 
          className="btn btn-primary mx-3" 
          type="button"
          onClick={taskHandler}>
            Add
          </button>
          <button className="btn btn-primary mx-3" type="button">
            Delete
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
