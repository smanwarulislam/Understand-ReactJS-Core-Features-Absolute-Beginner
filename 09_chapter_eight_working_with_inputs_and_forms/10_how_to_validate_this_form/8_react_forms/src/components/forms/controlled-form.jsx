import React from "react";

class ControlledForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.dir(event.target);
    // console.log(event.target.name);
    // console.log(event.target.name.value);
    /* const data = {};
    data.name = event.target.name.value;
    data.email = event.target.email.value;
    data.password = event.target.password.value; */

    // console.log(data);
    console.log(this.state);
    event.target.reset();
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        {/* <h1>Basic Form</h1> */}
        <form onSubmit={this.handleSubmit}>
          <input 
            className="form-control my-2" 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={name}
            onChange={this.handleChange}
          />
          <input 
            className="form-control my-2" 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={email}
            onChange={this.handleChange}
          />
          <input 
            className="form-control my-2" 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ControlledForm;

/**
 * Index -> State and Logic (submit handler, change handler, blur handler, validation)
 * Form -> Form JSX
 */