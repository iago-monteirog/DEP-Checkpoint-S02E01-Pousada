import React from "react";
import { Link } from "react-router-dom";

export default function ImageBox({ img, name, linkTo }) {
  return (
    <Link to={linkTo} className="ImageBox">
      <img src={img} alt={name} />
      <article>
        <p>{name}</p>
      </article>
    </Link>
  );
}
