import React from "react";

const Todo = ({task, deleteTodo, editTodo}) => {
  return (
    <div id="todos">
      <div className="todo">
        <div className="content">
          <input type="text" className="text" value={task.task} readOnly/>
        </div>
        <div className="action">
          <button className="edit" onClick={() => editTodo(task.id)}>Edit</button>
          <button className="delete" onClick={() => deleteTodo(task.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
