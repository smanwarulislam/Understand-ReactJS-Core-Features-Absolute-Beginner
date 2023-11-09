import React, { Component } from "react";
import "./app.style.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.count = 5;
  // }

  // count = 10;
  count = 0;

  render() {
    // console.log(this.count);
    return (
      <div className="App">
        <h1>Why do we need React State?</h1>
        <h1>Count = {this.count} </h1>
        {/* implicit return */}
        {/* <button onClick={() => this.count++}>ADD +1</button> */}
        {/* explicit return */}
        <button 
          onClick={() => {
            this.count++;
            console.log('Clicked...', this.count);
          }}
        >
          ADD +1
        </button>
      </div>
    );
  }
}

export default App;