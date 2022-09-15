import React, { useState } from "react";
//import "./style.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
