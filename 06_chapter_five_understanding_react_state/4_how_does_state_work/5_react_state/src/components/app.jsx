import React, { Component } from "react";
import "./app.style.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.count = 5;
  //   this.state = {
  //     count: 0
  //   };
  // }

  // count = 10;
  // count = 0;

  state = {
    count: 0,
    lotOfProperties: {}
  };

  render() {
    // console.log(this.count);
    return (
      <div className="App">
        <h1>Why do we need React State?</h1>
        <h1>Count = {this.state.count} </h1>
        {/* implicit return */}
        {/* <button onClick={() => this.count++}>ADD +1</button> */}
        {/* explicit return */}
        <button 
          onClick={() => {
            // this.count++;
            this.setState({ count: this.state.count + 1 });
            console.log('Clicked...', this.state.count);
          }}
        >
          ADD +1
        </button>
      </div>
    );
  }
}

export default App;