import React from "react";
const TodoListItem = ({ title, details, id, HandleRemove }) => {
  return (
    <>
      <li>
        {title}
        &nbsp;
        {details}
        &nbsp;
        <button onClick={() => HandleRemove(id)}>Remove</button>
      </li>
    </>
  );
};
export default TodoListItem;
