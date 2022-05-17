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
      <div class="card bg-dark border-primary text-white mb-3">
        <div class="card-body">
          <h5 class="card-title">TO DO LIST</h5>
          <input
            type="text"
            class="form-control my-3"
            placeholder="Enter task"
            value={task}
            onChange={(e) => {setTask(e.target.value)}}
          />
          <button 
          class="btn btn-primary mx-3" 
          type="button"
          onClick={taskHandler}>
            Add
          </button>
          <button class="btn btn-primary mx-3" type="button">
            Modify
          </button>
          <button class="btn btn-primary mx-3" type="button">
            Delete
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
