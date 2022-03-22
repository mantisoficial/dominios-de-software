import React from "react";
import "./InputField.css";

const InputField = ({ name, onChange, value, placeholder, inputStyle, inputLength}) => {
  return (
    <input
      name={name}
      className="text-input"
      type="text"
      placeholder={placeholder ? placeholder : null}
      onChange={onChange}
      value={value}
      style={inputStyle}
      maxLength={inputLength}
    ></input>
  );
};

export default InputField;
