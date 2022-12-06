import React from "react";
import TodoList from "./TodoList";
export default function TodoListItem(props) {
  return <li key={props.id}>{props.todo}</li>;
}
