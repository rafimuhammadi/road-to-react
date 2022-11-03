import React from "react";
import TodoList from "./TodoList";
const TodoListItem = (props) => {
  return (
    <div>
      <h1>{props.data}</h1>
      <ul>
        {props.items.map((item, i) => {
          return <li key={i}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default TodoListItem;
