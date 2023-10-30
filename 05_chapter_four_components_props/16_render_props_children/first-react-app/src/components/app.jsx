import React, { Component } from "react";

class Child extends Component {
  render() {
    this.props.func(this);
    return <h1>I am child</h1>;
  }
}

const ChildComponent = props => (
  <div>
    <h3>I am a Child Component</h3>
    <p>I don't know what to do</p>
    {props.children}
  </div>
);

class App extends Component {
  getContext(context) {
    console.log(context);
  }

  render() {
    // this.getContext(this);
    return (
      <div className="App">
        <h1>Pass Function as Props</h1>
        {/* <Child func={this.getContext} /> */}
        <ChildComponent>
          <h2>Hello, I am from Parent</h2>
          <h4>I am a child of the Child Component</h4>
        </ChildComponent>
      </div>
    );
  }
}

export default App;