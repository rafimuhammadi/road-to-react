<<<<<<< Updated upstream
import React, { useState } from "react";
import TodoList from "./TodoList";

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => {
    const newTodoTiele = event.target.value;
    setTodoTitle(newTodoTiele);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo(todoTitle);
    setTodoTitle("");
  };
  return (
    <form name="AddTodoForm" onSubmit={handleAddTodo}>
      <div>
        <label htmlFor="TodoTitle">Todo Title</label>
        <input
          type="text"
          id="todoTitle"
          onChange={handleTitleChange}
          value={todoTitle}
        />
=======
import React from "react";

const AddTodoForm = () => {
  return (
    <form name="AddTodoForm">
      <h1>Welcome to our Todo Form</h1>
      <div>
        <label htmlFor="TodoTitle">Todo Title</label>
        <input type="text" id="TodoTitle" />
>>>>>>> Stashed changes
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default AddTodoForm;
