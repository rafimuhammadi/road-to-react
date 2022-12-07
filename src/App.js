import "./App.css";
import { Fragment } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
const App = () => {
  const [data, setdata] = useState([]);
  return (
    <Fragment>
      <h3>This is my Assigment of 1.6</h3>
      <AddTodoForm onSetData={setdata} />
      <TodoList data={data} />
    </Fragment>
  );
};
export default App;
