// import React from "react";

// class App extends React.Component {

// }

import React, { Component } from "react";

class App extends Component {
  // Data and Logic Layer (Optional)
  /**
   * 1. State
   * 2. Variable or Properties
   * 3. Functions or Methods
   * 4. Lifecycle Methods
   */

  // Representation Layer (Required)
  /**
   * 5. JSX (JavaScript Syntax Extension and occasionally referred to as JavaScript XML)
   */
  render() {
    return <h1>Hello React, You are Awesome! That's Great, It is Working!</h1>;
  }
}

export default App;

/**
 * There are Two Different Ways to Create React Component
 * 1. Class-based Component / Stateful Component / Smart Component
 * 2. Functional Component / Stateless Component / Dumb Component
 */

function MyFunctionalComponent() {
  const name = 'S M Anwarul Islam Raju';
  return <h1>I am a functional component</h1>;
}

// using an arrow function
/* const AnotherFunctionalComponent = () => {
  return <h1>I am another functional component</h1>;
}; */

// or
const AnotherFunctionalComponent = () => (
  <h1>I am another functional component</h1>
);