<<<<<<< HEAD
import React, { Fragment, useEffect, useState } from "react";
const TodoList = () => {
  const [items, setItems] = useState([]);
  const getItemFromLocalStorage = () => {
    const existTitle = localStorage.getItem("savedTodoList");
    setItems(JSON.parse(existTitle));
  };
  useEffect(() => {
    getItemFromLocalStorage();
  }, []);
=======
import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = (props) => {
>>>>>>> a151ce1ba42344b9b467829180d27c4ac0c49f4d
  return (
    <Fragment>
      <ul>
<<<<<<< HEAD
        {items &&
          items.map((d) => {
            return <li key={d.id}>{d.title}</li>;
          })}
=======
        <TodoListItem todo={props.todoList} id={props.id} />
>>>>>>> a151ce1ba42344b9b467829180d27c4ac0c49f4d
      </ul>
    </Fragment>
  );
};
export default TodoList;
