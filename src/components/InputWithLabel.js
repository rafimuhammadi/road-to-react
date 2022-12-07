import React from "react";
const InputWithLabel = (props) => {
  return (
    <>
      <label>
        <b>{props.labelTitle}</b>
      </label>
      &nbsp;
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        autoFocus={props.autoFocus}
      />
    </>
  );
};
export default InputWithLabel;
