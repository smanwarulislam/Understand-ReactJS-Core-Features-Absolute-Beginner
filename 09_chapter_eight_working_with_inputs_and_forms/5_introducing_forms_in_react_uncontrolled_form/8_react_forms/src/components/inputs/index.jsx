import React from "react";

class Inputs extends React.Component {
  state = {
    name: '',
    country: '',
    birthDay: '',
    bio: '',
    gender: '',
    // agree: true,
    agree: false,
    skills: []
  };

  handleChange = event => {
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckBox = event => {
    this.setState({ agree: event.target.checked });
  };

  handleSkillChange = event => {
    if (event.target.checked) {
      this.setState({ skills: [...this.state.skills, event.target.value] });
    } else {
      const skills = this.state.skills.filter(skill => skill !== event.target.value);
      this.setState({ skills });
    }
  }
  
  render() {
    const { name, country, birthDay, bio, agree, skills } = this.state;
    return (
      <div>
        {/* <h1>Inputs</h1> */}
        <input 
          className="form-control my-2" 
          type="text" 
          name="name" 
          placeholder="Enter your name" 
          value={name}
          onChange={this.handleChange}
        />
        <select 
          className="form-control my-2" 
          name="country"
          value={country}
          onChange={this.handleChange}
        >
          <option>Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="China">China</option>
        </select>
        <input 
          className="form-control my-2" 
          type="date" 
          name="birthDay" 
          value={birthDay}
          onChange={this.handleChange}
        />
        <textarea 
          className="form-control my-2" 
          name="bio" 
          placeholder="Tell me about yourself"
          value={bio}
          onChange={this.handleChange}
        ></textarea>
        <div>
          <input 
            type="radio" 
            name="gender" 
            value="Male" 
            onChange={this.handleChange} 
          />
          Male
          <input 
            type="radio" 
            name="gender" 
            value="Female" 
            onChange={this.handleChange} 
          />
          Female
          <input 
            type="radio" 
            name="gender" 
            value="Other" 
            onChange={this.handleChange} 
          />
          Other
        </div>
        <div>
          Skills: <br />
          <input 
            type="checkbox" 
            name="skills" 
            value="Java" 
            checked={skills.includes('Java')} 
            onChange={this.handleSkillChange} 
          />
          Java
          <input 
            type="checkbox" 
            name="skills" 
            value="JavaScript" 
            checked={skills.includes('JavaScript')} 
            onChange={this.handleSkillChange} 
          />
          JavaScript
          <input 
            type="checkbox" 
            name="skills" 
            value="Python" 
            checked={skills.includes('Python')} 
            onChange={this.handleSkillChange} 
          />
          Python
          <input 
            type="checkbox" 
            name="skills" 
            value="Golang" 
            checked={skills.includes('Golang')} 
            onChange={this.handleSkillChange} 
          />
          Golang
        </div>
        <div>
          <input 
            type="checkbox" 
            name="agree" 
            checked={agree} 
            onChange={this.handleCheckBox} 
          />
          I agree to all the terms and conditions
        </div>
        <button onClick={() => console.log(this.state)}>
          Show Data
        </button>
      </div>
    );
  }
}

export default Inputs;