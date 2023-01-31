import React from "react";
import style from "../css/AddTodo.module.css";
const TodoListItem = ({ data, id, HandleRemove }) => {
  return (
    <>
      <li>
        {data.fields.title}
        &nbsp;
        <button onClick={() => HandleRemove(id)} className={style.removeButton}>
          Remove
        </button>
      </li>
    </>
  );
};
export default TodoListItem;
