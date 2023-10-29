import React, { Component } from "react";

class Child extends Component {
  render() {
    this.props.func(this);
    return <h1>I am child</h1>;
  }
}

class App extends Component {
  getContext(context) {
    console.log(context);
  }

  render() {
    this.getContext(this);
    return (
      <div className="App">
        <h1>Pass Function as Props</h1>
        <Child func={this.getContext} />
      </div>
    );
  }
}

export default App;