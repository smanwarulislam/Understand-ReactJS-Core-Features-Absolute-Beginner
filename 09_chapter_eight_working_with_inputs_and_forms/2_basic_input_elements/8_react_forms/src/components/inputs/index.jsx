import React from "react";

class Inputs extends React.Component {
  state = {
    name: '',
    country: '',
    birthDay: '',
    bio: ''
  };

  handleChange = event => {
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };
  
  render() {
    const { name, country, birthDay, bio } = this.state;
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
        <button onClick={() => console.log(this.state)}>
          Show Data
        </button>
      </div>
    );
  }
}

export default Inputs;