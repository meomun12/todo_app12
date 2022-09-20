import React from "react";
//import "./style.css";
import "./App.css";
import "./components/TaskList";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div>
      <TaskList />
      <AddTask />
    </div>
  );
}

export default App;
