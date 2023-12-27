import React from "react";
import Form from './form';

class SplitForm extends React.Component {
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
    return (
      <div>
        {/* <h1>Basic Form</h1> */}
        <Form 
          values={this.state} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
        />
      </div>
    );
  }
}

export default SplitForm;

/**
 * Index -> State and Logic (submit handler, change handler, blur handler, validation)
 * Form -> Form JSX
 */