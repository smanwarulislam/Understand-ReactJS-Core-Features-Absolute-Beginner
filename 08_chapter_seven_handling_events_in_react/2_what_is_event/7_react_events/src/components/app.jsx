import React, { Component } from "react";
import classes from "./app.module.css";

class App extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Events in React</h1>
      </div>
    );
  }
}

export default App;

/**
 * What is an Event?
 * - An Event is an object that only triggers when something special happens and returns an object to the listener
 * that contains information related to that event.
 * Events Examples: Button Click, Input Element, Form Submission, Mouse Enter, Mouse Leave
 * 
 * Note: An Event is the only way to interact with users and get users feedback.
 * 
 * Every Event has -
 * - Name
 * - Listener Function
 */