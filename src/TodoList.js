import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = (props) => {
  return (
    <>
      <ul>
        <TodoListItem todo={props.todoList} id={props.id} />
      </ul>
    </>
  );
};
export default TodoList;
