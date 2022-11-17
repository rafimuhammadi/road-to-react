import React from "react";
<<<<<<< Updated upstream
import TodoListItem from "./TodoListItem";
const TodoList = (props) => {
  return (
    <>
      <ul>
        <TodoListItem todo={props.todoList} id={props.id} />
      </ul>
    </>
=======
const TodoList = () => {
  const items = [
    {
      id: 1,
      title: "My Second Assignment in CODE THE Dream.",
    },
    {
      id: 2,
      title: "I will be try to create component for the todo list",
    },
    {
      id: 3,
      title:
        "Finally I am created the todo list component and show it in to browser",
    },
    {
      id: 4,
      title: "LOVE YOU ALL CODE THE DREAM.",
    },
  ];
  return (
    <div>
      <h1>My Second Assigment on CODE THE DREAM</h1>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
>>>>>>> Stashed changes
  );
};
export default TodoList;
