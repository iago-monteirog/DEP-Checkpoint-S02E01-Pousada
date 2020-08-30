import React from "react";

export default function Select({ label, placeholder, onChange, options = [] }) {
  return (
    <div className="Select">
      <label>{label}</label>
      <select placeholder={placeholder} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
}
