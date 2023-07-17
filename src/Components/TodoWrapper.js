import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoEditForm from "./TodoEditForm";

import { v4 as uuidv4 } from "uuid";
uuidv4();
//import "./TodoWrapper.css";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="wrapper">
      <h1 className="todo-header">Online Notebook</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        <h2>Notes</h2>
      </div>
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <TodoEditForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
