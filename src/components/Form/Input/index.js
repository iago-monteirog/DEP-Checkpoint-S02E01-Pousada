import React from "react";
import classNames from "classnames";

const Input = ({
  onChange,
  placeholder,
  label,
  feedback,
  type,
  name,
  value,
}) => {
  return (
    <div className={classNames("Input", { ["Input--error"]: feedback })}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
      <p>{feedback}</p>
    </div>
  );
};

export default Input;
