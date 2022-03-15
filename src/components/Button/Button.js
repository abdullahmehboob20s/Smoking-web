import React from "react";

function Button({
  title,
  onClick,
  style,
  className = "fs-16px uppercase weight-7",
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-btn-gradient white pointer`}
      style={style}
    >
      {title}
    </button>
  );
}

export default Button;
