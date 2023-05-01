import React from "react";

function TextArea(props) {
  return (
    <textarea
      name={props.name}
      id={props.name}
      cols="30"
      rows="2"
      style={{ resize: "none" }}
      className="form-control"
      placeholder={props.placeholder}
    ></textarea>
  );
}

export default TextArea;
