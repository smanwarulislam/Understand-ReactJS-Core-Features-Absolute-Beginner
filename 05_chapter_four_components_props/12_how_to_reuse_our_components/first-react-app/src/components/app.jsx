import React, { Component } from "react";

import Profile from "./profile";
import Skills from "./profile/skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Create Simple Profile Apps</h1> */}
        <Profile />
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h3>List of Programmers</h3>
          <p>Mr. X</p>
          <Skills />
          <p>Mr. Y</p>
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;