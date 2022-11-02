import React, { useState } from "react";
import TodoList from "./TodoList";

const AddTodoForm = () => {
  const [TodoItem, setTodoItem] = useState("");
  // By Bellow code we take the value of input feild and set it back to TodoItem using useState.
  const handelChange = (event) => {
    setTodoItem(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
    event.target.title.value = "";
  };
  return (
    <form name="AddTodoForm" onSubmit={handleAddTodo}>
      <div>
        <label htmlFor="TodoTitle">Todo Title</label>
        <input type="text" name="title" id="TodoTitle" />
        {/* By Bellow Code We can get Value of input feild trugh OnChange and set value. */}
        {/* <input
          type="text"
          name="title"
          id="TodoTitle"
          onChange={handelChange}
          value={TodoItems}
        /> */}
        <button type="submit">Search</button>
      </div>
      {/* By bellow code we can get TodoItem Value and show to this place. */}
      <p>{TodoItem}</p>
    </form>
  );
};
export default AddTodoForm;
