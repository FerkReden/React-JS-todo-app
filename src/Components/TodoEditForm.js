import React, { useState } from "react";


const TodoEditForm = ({ editTodo, deleteTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSibmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form onSubmit={handleSibmit}>
      <div id="todos">
        <div className="todo">
          <div className="content">
            <input type="text" className="text" value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div className="action">
            <button type="submit" className="edit">Save</button>
            <button className="delete" onClick={() => deleteTodo(task.id)}>Delete</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoEditForm;
