<<<<<<< HEAD
=======
import React, { useState } from "react";
import logo from "./logo.svg";
>>>>>>> a151ce1ba42344b9b467829180d27c4ac0c49f4d
import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Fragment } from "react";
<<<<<<< HEAD
function App() {
  return (
    <Fragment>
      <h1>Todo List.</h1>
      <AddTodoForm />
      <TodoList />
=======

function App() {
  const [newTodo, setNewTodo] = useState();
  const id = Date.now();
  return (
    <Fragment>
      <AddTodoForm onAddTodo={setNewTodo} />
      <TodoList todoList={newTodo} id={id} />
>>>>>>> a151ce1ba42344b9b467829180d27c4ac0c49f4d
    </Fragment>
  );
}
export default App;
