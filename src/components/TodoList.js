import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TodoListItem from "./TodoListItem";
import Loader from "../loader/loader.gif";
import style from "../../src/css/TodoListItem.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button/Button";
import propType, { array, number, string } from "prop-types";
const TodoList = () => {
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
  }, [data]);

  const HandleRemove = async (recordsID) => {
    setLoader(true);
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/todoListTable/${recordsID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const message = `Error Occuard Please Check it:
                        ${response.status}`;
        throw new Error(message);
      }
      setLoader(false);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };
  return (
    <>
      <Card className={style.TodoList}>
        <Button type="submit" className={style.btn}>
          <Link to="add-item" className={style.addButton}>
            Add New
          </Link>
        </Button>
        <hr />
        {loader ? (
          <div className={style.loader}>
            <img src={Loader} />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((d, i) => {
                  return (
                    <TodoListItem
                      index={i}
                      key={d.id}
                      data={d}
                      id={d.id}
                      HandleRemove={HandleRemove}
                    />
                  );
                })}
            </tbody>
          </table>
        )}
      </Card>
    </>
  );
};
TodoList.prototype = {
  index: propType.number,
  key: propType.number,
  data: array,
  id: number,
  HandleRemove: string,
};
export default TodoList;
