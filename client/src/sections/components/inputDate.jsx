import React from "react";
import "./Input.css"

function inputDate(props) {
  return (
    <div className="col-6">
      <input
        type="date"
        name={props.name}
        className="form-control py-3"
      />
    </div>
  );
}

export default inputDate;
