import React from "react";
import classes from "../app.module.css";
import Form from "./form";

const initValues = {
  name: '',
  email: '',
  password: '',
  birthDay: '',
  gender: ''
};

class SignupForm extends React.Component {
  state = {
    values: initValues,
    agreement: false
  };

  handleChange = event => {
    this.setState({
      values: {
        ...this.state.values, 
        [event.target.name]: event.target.value
      }
    });
  };

  handleAgreement = event => {
    this.setState({
      agreement: event.target.checked
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.values);

    event.target.reset();
    this.setState({ values: initValues, agreement: false });
  };

  render() {
    return (
      <div>
        <h1 className={classes.Signup}>Sign up Form</h1>
        <Form 
          values={this.state.values} 
          agreement={this.state.agreement} 
          handleChange={this.handleChange} 
          handleAgreement={this.handleAgreement} 
          handleSubmit={this.handleSubmit} 
        />
      </div>
    );
  }
}

export default SignupForm;

/**
 * Note: We will just discuss a general theory today and apply that theory in the next lecture.
 * This lecture: 10_how_to_validate_this_form
 * Next lecture: 11_implement_form_validation
 */