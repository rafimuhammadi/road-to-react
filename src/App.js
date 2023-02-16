import "./App.css";
import { Fragment } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from "./css/TodoListItem.module.css";
const App = () => {
  return (
    <Fragment>
      <div className={style.header}>
        <h3>This is my Assigment of 4.1</h3>
      </div>
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
