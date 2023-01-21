import "./App.css";
import { Fragment } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  const [data, setdata] = useState([]);
  return (
    <Fragment>
      <h3>This is my Assigment of 1.9</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="add-item" element={<AddTodoForm />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
