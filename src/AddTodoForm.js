<<<<<<< HEAD
import React, { useState, useEffect } from "react";
const AddTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoTitle == null) {
      return;
    }
    const data = {
      id: Date.now(),
      title: todoTitle,
    };
    const existTitle = localStorage.getItem("savedTodoList");
    const previousTitle = existTitle ? JSON.parse(existTitle) : [];
    const NewTitle = previousTitle.filter((it) => it !== todoTitle);
    const AddTitle = JSON.stringify([...NewTitle, data]);
    localStorage.setItem("savedTodoList", AddTitle);
    setTodoTitle("");
  };
=======
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
>>>>>>> a151ce1ba42344b9b467829180d27c4ac0c49f4d

  return (
    <form name="AddTodoForm" onSubmit={handleAddTodo}>
      <div>
<<<<<<< HEAD
        <label htmlFor="TodoTitle">Title:</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={todoTitle}
        />
=======
        <label htmlFor="TodoTitle">Todo Title</label>
        <input
          type="text"
          id="todoTitle"
          onChange={handleTitleChange}
          value={todoTitle}
        />

>>>>>>> a151ce1ba42344b9b467829180d27c4ac0c49f4d
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default AddTodoForm;
