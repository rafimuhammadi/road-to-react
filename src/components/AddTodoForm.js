import React from "react";

const AddTodoForm = () => {
  return (
    <form name="AddTodoForm">
      <h1>Welcome to our Todo Form</h1>
      <div>
        <label htmlFor="TodoTitle">Todo Title</label>
        <input type="text" id="TodoTitle" />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default AddTodoForm;
