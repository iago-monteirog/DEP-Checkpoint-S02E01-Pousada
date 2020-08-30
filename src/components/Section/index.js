import React from "react";

export default function Section({ title, children }) {
  return (
    <div className="Section">
      <div className="container">
        <div className="Section__inside">
          <h1>{title}</h1>
          <div className="Section__body">{children}</div>
        </div>
      </div>
    </div>
  );
}
