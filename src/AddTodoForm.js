import React, { useState, useEffect } from "react";
const AddTodoForm = (props) => {
  const [title, setTitle] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (title == null) {
      return;
    }
    const data = {
      id: Date.now(),
      title: title,
    };
    const existTitle = localStorage.getItem("savedTodoList");
    const previousTitle = existTitle ? JSON.parse(existTitle) : [];
    const NewTitle = previousTitle.filter((it) => it !== title);
    const AddTitle = JSON.stringify([...NewTitle, data]);
    localStorage.setItem("savedTodoList", AddTitle);
    setTitle("");
  };
  return (
    <form name="AddTodoForm" onSubmit={submitHandler}>
      <div>
        <label htmlFor="TodoTitle">Title:</label>
        <input
          type="text"
          name="title"
          onChange={titleChangeHandler}
          value={title}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default AddTodoForm;
