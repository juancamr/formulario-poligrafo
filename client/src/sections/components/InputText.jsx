import React from "react";

function InputText(props) {
  return (
    <div className={!props.lg && "col-6"}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name={props.name}
          id="floatingInput"
          placeholder={props.placeholder}
        />
        <label for="floatingInput">{props.placeholder}</label>
      </div>
    </div>
  );
}

export default InputText;
