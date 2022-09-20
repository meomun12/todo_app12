import React, { useState } from "react";
import AddTask from "./AddTask";
function TaskList() {
  const [toTask, setToTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    const task = {
      id: toTask.length === 0 ? 1 : toTask[toTask.length - 1].id + 1,
      taskName: newTask,
    };
    const newToTask = [...toTask, newTask];
    setToTask(newToTask);
  };
  const deleteTask = (taskName) => {
    setToTask(toTask.filter((task) => task !== taskName));
  };
  return (
    <div className="App">
      <div className="List">
        {toTask.map((task) => {
          return (
            <AddTask handleChange={task.handleChange} addTask={task.addTask} />
          );
        })}
      </div>
    </div>
  );
}
export default TaskList;
