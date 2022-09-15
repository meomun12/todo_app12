import React, { useState } from "react";
//import "./App.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };
  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false, important: false };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  let Todos = todos.sort((a, b) => b.important - a.important);
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />

      {Todos.map((todo) => {
        return (
          <TodoItem
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            importantTodo={importantTodo}
            todo={todo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
