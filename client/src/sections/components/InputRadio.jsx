import React from "react";
import "./Input.css";

function InputRadio(props) {
  if (typeof props.handleShow === "function") {
    return (
      <>
        <input
          type="radio"
          className="radio"
          onClick={props.handleShow}
          value={props.value}
          id={props.id}
          name={props.name}
        />
        <label className="label-radio" htmlFor={props.id}>
          <i class={props.icon}></i>
        </label>
      </>
    );
  } else {
    return (
      <>
        <input
          type="radio"
          className="radio"
          value={props.value}
          id={props.id}
          name={props.name}
        />
        <label className="label-radio" htmlFor={props.id}>
          <i class={props.icon}></i>
        </label>
      </>
    );
  }
}

export default InputRadio;
