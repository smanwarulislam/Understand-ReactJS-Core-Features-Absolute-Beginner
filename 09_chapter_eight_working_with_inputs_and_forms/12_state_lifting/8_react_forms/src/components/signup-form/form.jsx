import React from "react";
import PropTypes from 'prop-types'; // ES6
import TextInput from './text-input';

const Form = ({ values, agreement, errors, handleChange, handleAgreement, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput 
        name="name"
        label="Name"
        placeholder="Enter your name"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />
      <TextInput 
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={values.email}
        error={errors.email}
        onChange={handleChange}
      />
      <TextInput 
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={values.password}
        error={errors.password}
        onChange={handleChange}
      />
      <TextInput 
        name="birthDay"
        type="date"
        label="Birthday"
        value={values.birthDay}
        error={errors.birthDay}
        onChange={handleChange}
      />
      <div className="form-group">
        Gender <br />
        <label className="me-4">
          <input 
            className="form-group me-2"
            type="radio" 
            name="gender" 
            value="Male" 
            onChange={handleChange} 
          />
          Male
        </label>
        <label className="me-4">
          <input 
            className="form-group me-2"
            type="radio" 
            name="gender" 
            value="Female" 
            onChange={handleChange} 
          />
          Female
        </label>
        <label className="me-4">
          <input 
            className="form-group me-2"
            type="radio" 
            name="gender" 
            value="Other" 
            onChange={handleChange} 
          />
          Other
        </label>
        {errors.gender && (
          <div className="invalid-feedback">{errors.gender}</div>
        )}
      </div>
      <div className="form-group">
        <label>
          <input 
            className="form-group me-2 mt-4" 
            type="checkbox" 
            name="agreement" 
            checked={agreement} 
            onChange={handleAgreement} 
          />
          I agree
        </label>
      </div>
      <button 
        className="btn btn-primary mt-4" 
        type="submit" 
        disabled={!agreement}
      >
        Create User
      </button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form;