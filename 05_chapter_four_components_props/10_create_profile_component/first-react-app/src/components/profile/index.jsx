import React from "react";
import "./profile.style.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="Container">
        {/* <h1>I am profile</h1> */}
        <div className="Bio">
          <h3>S M Anwarul Islam Raju</h3>
          <p>An electrical engineer turned full-stack JavaScript developer</p>
        </div>
        <div className="Skills">
          <h3>Skills:</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="Links">
          <h3>Social Links:</h3>
          <ul>
            <li>
              <a href="#">Meta</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;