import React from "react";
import "./profile.style.css";

import Bio from "./bio";
import Skills from "./skills";
import Links from "./links";

class Profile extends React.Component {
  me = {
    name: 'S M Anwarul Islam Raju',
    title: 'An electrical engineer turned full-stack JavaScript developer',
    skillA: 'Java',
    skillB: 'JavaScript',
    skillC: 'Python'
  };
  
  render() {
    // console.log('Profile - ', this.props);
    return (
      <div className="Container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills 
        skillA={this.me.skillA} 
        skillB={this.me.skillB} 
        skillC={this.me.skillC} 
        />
        <Links />
      </div>
    );
  }
}

export default Profile;