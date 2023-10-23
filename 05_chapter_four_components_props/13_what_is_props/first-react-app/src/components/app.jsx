import React, { Component } from "react";

import Profile from "./profile";
// import Skills from "./profile/skills";
import MyProps from "./props";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Create Simple Profile Apps</h1> */}
        <Profile />
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h3>List of Programmers</h3>
          {/* <p>Mr. X</p>
          <Skills />
          <p>Mr. Y</p>
          <Skills /> */}
          {/* <MyProps /> */}
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