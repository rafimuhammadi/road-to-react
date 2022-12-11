import React from "react";
const TodoListItem = ({ title, HandleRemove }) => {
  return title.map((t, i) => {
    return (
      <>
        <li key={i}>
          {t.name}
          &nbsp;
          <button onClick={() => HandleRemove(t.id)}>Remove</button>
        </li>
      </>
    );
  });
};
export default TodoListItem;
