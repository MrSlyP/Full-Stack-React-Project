import React from "react";
import {FaTimes} from 'react-icons/fa';

function List(props) {
  const taskList = props.view;

  return (
    <ul className="list-group">
      {taskList.map((task) => (
        <li className="input-group-text list-group-item bg-white mb-3 border border-dark">
          <label class="form-check-label"><FaTimes className="mx-2" style={{color: 'red'}}/>{task}</label>
        </li>
      ))}
    </ul>
  );
}

export default List;
