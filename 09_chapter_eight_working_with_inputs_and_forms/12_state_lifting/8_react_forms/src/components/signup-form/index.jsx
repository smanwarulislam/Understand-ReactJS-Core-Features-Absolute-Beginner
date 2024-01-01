import React from "react";
import classes from "../app.module.css";
import Form from "./form";
import PropTypes from 'prop-types'; // ES6

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
    agreement: false,
    errors: {}
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
    const { isValid, errors } = this.validate();

    if (isValid) {
      // console.log(this.state.values);
      this.props.createUser(this.state.values);
      event.target.reset();
      this.setState({ values: initValues, agreement: false, errors: {} });
    } else {
      // console.log(errors);
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const { values: {name, email, password, birthDay, gender} } = this.state;

    if (!name) {
      errors.name = 'Please provide your name';
    }

    if (!email) {
      errors.email = 'Please provide your email';
    }

    if (!password) {
      errors.password = 'Please provide your password';
    }

    if (!birthDay) {
      errors.birthDay = 'Please provide your birthday';
    }

    if (!gender) {
      errors.gender = 'Please select your gender';
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };

  render() {
    return (
      <div>
        <h1 className={classes.Signup}>Sign up Form</h1>
        <Form 
          values={this.state.values} 
          agreement={this.state.agreement} 
          errors={this.state.errors}
          handleChange={this.handleChange} 
          handleAgreement={this.handleAgreement} 
          handleSubmit={this.handleSubmit} 
        />
      </div>
    );
  }
}

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default SignupForm;