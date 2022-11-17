import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { Fragment } from "react";

function App() {
<<<<<<< Updated upstream
  return (
    <Fragment>
      <TodoList />
      <AddTodoForm />
=======
  const [newTodo, setNewTodo] = useState();
  const id = Date.now();
  return (
    <Fragment>
      <AddTodoForm onAddTodo={setNewTodo} />
      <TodoList todoList={newTodo} id={id} />
>>>>>>> Stashed changes
    </Fragment>
  );
}
export default App;
