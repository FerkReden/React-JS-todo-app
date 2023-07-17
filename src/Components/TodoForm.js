import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSibmit = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("You don`t add task!");
      return;
    }

    addTodo(value);
    setValue("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSibmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="What do You want to note?"
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" className="todo-submit" value="Add Note" />
      </form>
    </div>
  );
};

export default TodoForm;
