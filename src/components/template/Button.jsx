import React from "react";
import "./button.css";

const Button = (props) => {
  const buttonClassName = `${props.variant} ${
    props.disableShadow ? "no_shadow text" : ""
  }
  ${props.disabled ? "disable" : ""}
  ${"btn-" + props.size}
  `;

  return <button className={buttonClassName}>{props.children}</button>;
};

export default Button;
