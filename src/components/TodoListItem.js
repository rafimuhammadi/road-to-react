import React from "react";
const TodoListItem = ({ title, HandleRemove }) => {
  return title.map((t) => {
    return (
      <>
        <li key={t.id}>
          {t.name}
          &nbsp;
          <button onClick={() => HandleRemove(t.id)}>Remove</button>
        </li>
      </>
    );
  });
};
export default TodoListItem;
