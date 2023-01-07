import React from "react";
const TodoListItem = ({ title, HandleRemove }) => {
  return (
    <>
      <li>
        {title.name}
        &nbsp;
        <button onClick={() => HandleRemove(title.id)}>Remove</button>
      </li>
    </>
  );
};
export default TodoListItem;
