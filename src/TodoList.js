import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = () => {
  const items = [
    {
      title: "My Third Assignment in CODE THE Dream.",
    },
    {
      title: "I will be try to create component for the todo list",
    },
    {
      title:
        "Finally I am created the todo list component and send it using PROPS to TodoListItems component",
    },
    {
      title: "LOVE YOU ALL CODE THE DREAM.",
    },
  ];
  return (
    <TodoListItem items={items} data={"I am Working on the Props In React"} />
  );
};
export default TodoList;
