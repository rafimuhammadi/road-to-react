import "./App.css";
import react, { Fragment, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
import ImageLoading from "./components/ImageLoading";
const App = () => {
  const [Loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTitle")),
          },
        });
      }, 2000);
    }).then((res) => {
      setdata(res.data.todoList);
      setLoading(false);
    });
  }, [Loading]);
  const HandleRemove = (id) => {
    setLoading(true);
    let elements = data;
    elements = elements.filter((element) => element.id !== id);
    localStorage.setItem("savedTitle", JSON.stringify(elements));
  };
  return (
    <Fragment>
      <h3>This is my Assigment of 1.7</h3>
      <AddTodoForm onSetLoading={setLoading} />
      {Loading ? (
        <p>
          <ImageLoading />
        </p>
      ) : (
        <TodoList data={data} HandleRemove={HandleRemove} />
      )}
    </Fragment>
  );
};
export default App;
