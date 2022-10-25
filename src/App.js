import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <TodoList />
      <AddTodoForm />
    </Fragment>
  );
}
export default App;
