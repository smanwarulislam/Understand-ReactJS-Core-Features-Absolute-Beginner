import React, { Component } from "react";

import Button from "./button";
import BoxA from "./box_a";
import BoxB from "./box_b";

class App extends Component {
  render() {
    return (
      <div>
        <h1>How to Style React App</h1>
        <Button>Click Me</Button>
        <BoxA />
        <BoxB />
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