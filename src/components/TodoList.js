import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoListItem from "./TodoListItem";
const TodoList = () => {
  const [data, setdata] = useState([]);
  const getData = () => {
    setdata(JSON.parse(localStorage.getItem("savedTitle")));
  };
  const HandleRemove = (id) => {
    let elements = data;
    elements = elements.filter((element) => element.id !== id);
    localStorage.setItem("savedTitle", JSON.stringify(elements));
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ul>{data && <TodoListItem title={data} HandleRemove={HandleRemove} />}</ul>
  );
};

export default TodoList;
