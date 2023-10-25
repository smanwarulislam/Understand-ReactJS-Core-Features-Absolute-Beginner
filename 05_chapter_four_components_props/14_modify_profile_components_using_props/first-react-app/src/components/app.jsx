import React, { Component } from "react";

import Profile from "./profile";
import Skills from "./profile/skills";
import Bio from "./profile/bio";
import MyProps from "./props";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Bio name="Test User" title="Test Title" />
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h3>List of Programmers</h3>
          <p>Mr. X</p>
          <Skills skillA="React" skillB="Angular" skillC="Vue.js" />
          <p>Mr. Y</p>
          <Skills skillA="Node.js" skillB="Express.js" skillC="MongoDB" />
          <MyProps name="S M Anwarul Islam Raju" />
          <MyProps name="HM Nayem" />
          <MyProps name="Shegufa Taranjum" />
          <MyProps name="Shayaike Hassan" />
        </div>
      </div>
    );
  }
}

export default App;