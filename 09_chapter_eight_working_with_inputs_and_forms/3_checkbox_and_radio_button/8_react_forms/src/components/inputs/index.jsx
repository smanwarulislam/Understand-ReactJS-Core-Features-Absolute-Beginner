import React from "react";

class Inputs extends React.Component {
  state = {
    name: '',
    country: '',
    birthDay: '',
    bio: '',
    gender: '',
    // agree: true,
    agree: false
  };

  handleChange = event => {
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckBox = event => {
    this.setState({ agree: event.target.checked });
  };
  
  render() {
    const { name, country, birthDay, bio, agree } = this.state;
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