import React from "react";

// import "./button.css";

// const Button = props => <button {...props}>{props.children}</button>;
const Button = props => (
  <button className="buttonB" {...props}>
    {props.children}
  </button>
);

export default Button;