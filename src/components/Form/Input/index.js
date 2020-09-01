import React from "react";
import classNames from "classnames";

const Input = ({
  onChange,
  placeholder,
  label,
  feedback,
  inputType,
  name,
  value,
  disabled,
}) => {
  if (disabled) { 
    return (
      <div className="Input">
        <label htmlFor={name}>{label}</label>
        <input
          disabled
          name={name}
          id={name}
          placeholder={placeholder}
          type={inputType}
          onChange={onChange}
          value={value}
        />
        <p>{feedback}</p>
      </div>
    );
  }

  return (
    <div className={classNames("Input", { ["Input--error"]: feedback })}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        placeholder={placeholder}
        type={inputType}
        onChange={onChange}
        value={value}
      />
      <p>{feedback}</p>
    </div>
  );
};

export default Input;
