import React from "react";
import style from "../css/AddTodo.module.css";
const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className={style.AddButton}>
      {title}
    </button>
  );
};
export default Button;
