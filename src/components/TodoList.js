import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = () => {
  const items = [
    {
      id: 1,
      title: "My Third Assignment in CODE THE Dream.",
    },
    {
      id: 2,
      title: "I will be try to create component for the todo list",
    },
    {
      id: 3,
      title:
        "Finally I am created the todo list component and send it using PROPS to TodoListItems component",
    },
    {
      id: 4,
      title: "LOVE YOU ALL CODE THE DREAM.",
    },
  ];
  //const { items, data } = props;
  return (
    <TodoListItem
      items={items}
      data={"Abdul Rafi Working on the Props In React"}
    />
  );
};
export default TodoList;
