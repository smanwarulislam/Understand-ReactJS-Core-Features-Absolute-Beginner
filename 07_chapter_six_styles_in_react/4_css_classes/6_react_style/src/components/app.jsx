import React, { Component } from "react";

// import "./button.css";
import "./app.css";
import "./button.css";

import Button from "./button";
import BoxA from "./box_a";
import BoxB from "./box_b";

const myHeader = {
  color: 'blue',
  fontWeight: 300,
  fontFamily: 'Arial',
  fontSize: '36px'
};

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={myHeader}>How to Style React App</h1>
        {/* <h1 style={myHeader}>Another Header Tag</h1> */}
        <h1 
          style={{
            color: 'blue',
            fontWeight: 300,
            fontFamily: 'Arial',
            fontSize: '36px'
          }}
        >
          Another Header Tag
        </h1>
        <Button>Click Me</Button>
        <BoxA />
        <BoxB />
        <button className="buttonA">Another</button>
      </div>
    );
  }
}

export default App;

/**
 * There are four main methods of styling the React app
 * - Inline CSS
 * - CSS Class
 * - CSS Modules
 * - JSS (Styled Components)
 */