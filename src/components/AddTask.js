import React from "react";

const AddTask = (props) => {
  return (
    <div>
      <div className="addTask">
        <input onChange={props.handleChange} />
        <button onClick={props.addTask}>Add </button>
      </div>
    </div>
  );
};

export default AddTask;
