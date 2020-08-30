import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function Button({ isFullWidth, theme, text, onClick, linkTo }) {
  if (linkTo) {
    return (
      <Link
        to={linkTo}
        className={classNames("Button", {
          [`Button--${theme}`]: theme,
          ["Button--fullwidth"]: isFullWidth,
        })}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classNames("Button", {
        [`Button--${theme}`]: theme,
        ["Button--fullwidth"]: isFullWidth,
      })}
    >
      {text}
    </button>
  );
}
