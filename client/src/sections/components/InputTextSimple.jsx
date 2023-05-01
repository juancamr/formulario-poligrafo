import React from "react";

function InputTextSimple(props) {
  return (
    <input
      type="text"
      name={props.name}
      className="form-control"
      placeholder={props.placeholder}
    />
  );
}

export default InputTextSimple;
