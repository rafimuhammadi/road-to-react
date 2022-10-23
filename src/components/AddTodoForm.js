import React from "react";

const AddTodoForm = () => {
  return (
    <form name="AddTodoForm">
      <center>
        <h1>Welcome to our Todo Form</h1>
      </center>
      <div className="todoForm">
        <label htmlFor="TodoTitle">Todo Title</label>
        <input type="text" className="input" id="TodoTitle" />
        <label htmlFor="TodoName">Todo Name</label>
        <input type="text" className="input" id="TodoName" />
        <button type="submit">Save Todo Data</button>
      </div>
    </form>
  );
};
export default AddTodoForm;
