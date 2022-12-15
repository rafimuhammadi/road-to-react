import React, { useState, useRef } from "react";
import Button from "./Button";
import InputWithLabel from "./InputWithLabel";
const AddTodoForm = (props) => {
  const [title, setTitle] = useState("");
  const onChangeValue = (e) => {
    setTitle(e.target.value);
  };
  const StoreTodoTitle = () => {
    const data = localStorage.getItem("savedTitle");
    const previusTitle = data ? JSON.parse(data) : [];
    const filtered = previusTitle.filter((it) => it !== title);
    const updateTitle = [...filtered, { id: Date.now(), name: title }];
    localStorage.setItem("savedTitle", JSON.stringify(updateTitle));
    props.onSetLoading(true);
    setTitle("");
  };
  return (
    <>
      <InputWithLabel
        labelTitle={"Title"}
        type={"text"}
        autoFocus={"autoFocus"}
        onChange={onChangeValue}
        value={title}
      />
      <Button title={"Create"} onClick={StoreTodoTitle} />
    </>
  );
};
export default AddTodoForm;
