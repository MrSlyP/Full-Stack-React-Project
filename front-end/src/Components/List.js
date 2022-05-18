import React from "react";
import {FaTimes} from 'react-icons/fa';

function List(props) {
  const taskList = props.view;
  const deleteTask = props.onDelete;

  return (
    <ul className="list-group">
      {taskList.map((task, i) => (
        <li className="input-group-text list-group-item bg-white mb-3 border border-dark" key={task} onClick={deleteTask}>
          <label className="form-check-label"><FaTimes className="mx-2" style={{color: 'red', cursor: 'pointer'}} 
          onClick={() => deleteTask(i)}/>{task}</label>
        </li>
      ))}
    </ul>
  );
}

export default List;
