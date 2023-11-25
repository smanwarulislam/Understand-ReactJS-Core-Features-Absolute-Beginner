import React from "react";

// import "./button.css";
import classes from "./button.module.css";

// const Button = props => <button {...props}>{props.children}</button>;
const Button = props => (
  // <button className="buttonB" {...props}>
  //   {props.children}
  // </button>
  // <button className="button" {...props}>
  //   {props.children}
  // </button>
  <button className={classes.button} {...props}>
    {props.children}
  </button>
);

export default Button;