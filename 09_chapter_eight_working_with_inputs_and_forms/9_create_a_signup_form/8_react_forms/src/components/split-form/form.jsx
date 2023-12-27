import React from "react";
import PropTypes from 'prop-types'; // ES6
import TextInput from './text-input';

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <TextInput 
      name="name" 
      label="Name" 
      placeholder="Enter your name" 
      value={props.values.name} 
      onChange={props.handleChange} 
    />
    <TextInput 
      name="email" 
      type="email" 
      label="Email"
      placeholder="Enter your email" 
      value={props.values.email}
      onChange={props.handleChange}
    />
    <TextInput 
      name="password" 
      type="password" 
      label="Password"
      placeholder="Enter your password" 
      value={props.values.password}
      onChange={props.handleChange}
    />
    <button type="submit">Submit</button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form;