import React, { useState, useRef } from "react";
import Button from "./Button";
import InputWithLabel from "./InputWithLabel";
const AddTodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const onChangeValueTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeValueDetails = (e) => {
    setDetails(e.target.value);
  };
  const StoreTodoTitle = async () => {
    props.onSetLoader(true);
    try {
      const dataToPost = {
        fields: {
          title: title,
          details: details,
        },
      };
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/todoListTable`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
          body: JSON.stringify(dataToPost),
        }
      );
      if (!response.ok) {
        const message = `Error Occuard Please Check it:
                        ${response.status}`;
        throw new Error(message);
      }
      const result = await response.json();
      props.onSetData(result.records);
      props.onSetLoader(false);
      setTitle("");
      setDetails("");
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };
  return (
    <>
      <InputWithLabel
        labelTitle={"Title"}
        type={"text"}
        autoFocus={"autoFocus"}
        onChange={onChangeValueTitle}
        value={title}
      />
      <InputWithLabel
        labelTitle={"Details"}
        type={"text"}
        autoFocus={""}
        onChange={onChangeValueDetails}
        value={details}
      />
      <Button title={"Create"} onClick={StoreTodoTitle} />
    </>
  );
};
export default AddTodoForm;
