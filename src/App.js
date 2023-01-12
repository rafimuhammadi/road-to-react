import "./App.css";
import { Fragment, useState, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import Loader from "../src/loader/loader.gif";
const App = () => {
  const [data, setdata] = useState([]);
  const [loader, setLoader] = useState(true);
  const getDataFromAPI = async () => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/todoListTable`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const result = await response.json();
      setdata(result.records);
      setLoader(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getDataFromAPI();
  }, [data, loader]);
  return (
    <Fragment>
      <h3>This is my Assigment of 1.8</h3>
      <AddTodoForm onSetData={setdata} onSetLoader={setLoader} />
      {loader ? (
        <p>
          <img src={Loader} />
        </p>
      ) : (
        <TodoList data={data} />
      )}
    </Fragment>
  );
};
export default App;
