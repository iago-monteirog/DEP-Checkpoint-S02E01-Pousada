import React from "react";

export default function ImageBox({ img, name }) {
  return (
    <div className="ImageBox">
      <img src={img} alt={name} />
      <article>
        <p>{name}</p>
      </article>
    </div>
  );
}
