import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Fragment, useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState();
  return (
    <Fragment>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
    </Fragment>
  );
}
export default App;
