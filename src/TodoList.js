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
  return (
    <Fragment>
      <ul>
        {items &&
          items.map((d) => {
            return <li key={d.id}>{d.title}</li>;
          })}
      </ul>
    </Fragment>
  );
};
export default TodoList;
