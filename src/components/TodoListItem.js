import React from "react";
const TodoListItem = ({ data, id, HandleRemove }) => {
  return (
    <>
      <li>
        {data.fields.title}
        &nbsp;
        <button onClick={() => HandleRemove(id)}>Remove</button>
      </li>
    </>
  );
};
export default TodoListItem;
