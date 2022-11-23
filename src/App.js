import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <h1>Todo List.</h1>
      <AddTodoForm />
      <TodoList />
    </Fragment>
  );
}
export default App;
