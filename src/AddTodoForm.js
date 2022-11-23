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

  return (
    <form name="AddTodoForm" onSubmit={handleAddTodo}>
      <div>
        <label htmlFor="TodoTitle">Title:</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={todoTitle}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default AddTodoForm;
