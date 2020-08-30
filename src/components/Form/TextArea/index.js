import React from "react";
import classNames from "classnames";

const TextArea = ({
  onChange,
  placeholder,
  label,
  feedback,
  type,
  name,
  value,
}) => {
  return (
    <div className={classNames("TextArea", { ["TextArea--error"]: feedback })}>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        rows="8"
      />
      <p>{feedback}</p>
    </div>
  );
};

export default TextArea;
