import React from "react";

function InputSelect(props) {
  return (
    <div className="col-6">
      <select class="form-select py-3 rounded-3" name={props.name}>
        <option selected>{props.titulo}</option>
        {props.options.map(([content, value]) => (
          <option value={value}>{content}</option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
