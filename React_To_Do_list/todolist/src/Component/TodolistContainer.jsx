// import React from 'react'
import Todo from "./Todo";

function TodolistContainer({ ToDolist, deleteTodo }) {
  return (
    <div className="task-container">
      {ToDolist.map((todo, index) => {
        return <Todo todo={todo} index={index} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default TodolistContainer;
