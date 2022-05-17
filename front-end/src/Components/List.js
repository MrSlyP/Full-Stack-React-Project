import React from "react";

function List(props) {
  const taskList = props.view;

  return (
    <ul className="list-group">
      {taskList.map((task) => (
        <li className="input-group-text list-group-item bg-white mb-3 border border-dark">
          <input class="form-check-input mt-1" type="checkbox" value={task} />
          <label class="form-check-label">{task}</label>
        </li>
      ))}
    </ul>
  );
}

export default List;
