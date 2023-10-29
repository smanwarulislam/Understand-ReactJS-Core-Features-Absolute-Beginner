import React, { Component } from "react";

const MyComponent = () => <h1>My Component</h1>;

class App extends Component {
  render() {
    const obj = {
      title: 'Test Title',
      id: 'myh1'
    };

    const name = 'S M Raju';
    const bio = (
      <div>
        {/* <h3>S M Anwarul Islam Raju</h3> */}
        <h3> {name} </h3>
        <p>An Electrical Engineer turned Full-stack JavaScript Developer</p>
      </div>
    );

    return (
      <div className="App">
        {/* <h1>What is JSX?</h1> */}
        {/* <h1 title="I am h1">What is JSX?</h1> */}
        <h1 {...obj} >What is JSX?</h1>
        <p>JSX is Awesome! JSX means JavaScript Syntax Extension and is occasionally referred to as JavaScript XML.</p>
        <p> {new Date().toISOString()} </p>
        <p>My Name is {name} </p>
        <MyComponent />
        {bio}
      </div>

      // <React.Fragment className="App">
      //   <h1>What is JSX?</h1>
      //   <p>JSX is Awesome! JSX means JavaScript Syntax Extension and is occasionally referred to as JavaScript XML.</p>
      // </React.Fragment>

      // <>
      //   <h1>What is JSX?</h1>
      //   <p>JSX is Awesome! JSX means JavaScript Syntax Extension and is occasionally referred to as JavaScript XML.</p>
      // </>
    );
  }
}

export default App;