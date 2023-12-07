import React, { Component } from "react";
import classes from "./app.module.css";

class App extends Component {
  state = {
    name: '',
    // name: 'Raju'
  };

  handleButtonClick = event => {
    // console.log(event);
    console.log(event.target);
    // console.log('I am a cute little button');
  };

  handleChange = event => {
    // console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  handleFocus = event => {
    console.log('I am focus Event');
  };

  handleBlur = event => {
    if (!this.state.name) {
      alert('Please Enter Your Name');
    }
    console.log('I am blur Event');
  }

  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Events in React</h1>
        <button 
          className={classes.Btn} 
          onClick={this.handleButtonClick}
        >
          Click Me
        </button>
        <br />
        <input 
          type="text" 
          className={classes.TextField} 
          placeholder="Enter Some Text" 
          value={this.state.name}
          // onChange={this.handleChange}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <br />
        <br />
        {/* <h3>Welcome, {this.state.name}</h3> */}
        {this.state.name && <h3>Welcome, {this.state.name}</h3>}
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