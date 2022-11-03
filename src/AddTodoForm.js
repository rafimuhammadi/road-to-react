import React, { useState } from "react";
import TodoList from "./TodoList";
const AddTodoForm = (props) => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    props.onAddTodo(todoTitle);
    event.target.title.value = "";
  };
  return (
    <form name="AddTodoForm" onSubmit={handleAddTodo}>
      <div>
        <label htmlFor="TodoTitle">Todo Title</label>
        <input type="text" name="title" id="TodoTitle" />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default AddTodoForm;
