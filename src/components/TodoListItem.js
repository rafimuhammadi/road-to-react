import React from "react";
import style from "../css/AddTodo.module.css";
import Button from "./UI/Button/Button";
const TodoListItem = ({ index, data, id, HandleRemove }) => {
  return (
    <tr key={index}>
      <td>{index}</td>
      <td> {data.fields.title}</td>
      <td> {data.fields.description}</td>
      <td>
        <Button onClick={() => HandleRemove(id)} className={style.btn}>
          X
        </Button>
      </td>
    </tr>
  );
};
export default TodoListItem;
