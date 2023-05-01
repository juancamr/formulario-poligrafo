import React from "react";
import "./Input.css"

function inputDate(props) {
  return (
    <div className="col-6">
      <input
        type="date"
        placeholder={props.placeholder}
        name={props.name}
        className="form-control"
      />
    </div>
  );
}

export default inputDate;
