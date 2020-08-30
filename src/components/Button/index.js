import React from "react";
import classNames from "classnames";

export default function Button({ isFullWidth, theme, text, onClick }) {
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
