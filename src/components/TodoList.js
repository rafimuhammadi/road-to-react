import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoListItem from "./TodoListItem";
const TodoList = ({ data }) => {
  return (
    <ul>
      {
        data &&
          data.map((d) => {
            return (
              <TodoListItem
                key={d.id}
                title={d.fields.title}
                details={d.fields.details}
                id={d.id}
              />
            );
          })
        // <TodoListItem data={data} HandleRemove={HandleRemove} />
      }
    </ul>
  );
};

export default TodoList;
