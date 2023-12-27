import React from "react";

class UnControlledForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    // console.dir(event.target);
    // console.log(event.target.name);
    // console.log(event.target.name.value);
    const data = {};
    data.name = event.target.name.value;
    data.email = event.target.email.value;
    data.password = event.target.password.value;

    console.log(data);
    event.target.reset();
  };

  render() {
    return (
      <div>
        {/* <h1>Basic Form</h1> */}
        <form onSubmit={this.handleSubmit}>
          <input 
            className="form-control my-2" 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
          />
          <input 
            className="form-control my-2" 
            type="email" 
            name="email" 
            placeholder="Email" 
          />
          <input 
            className="form-control my-2" 
            type="password" 
            name="password" 
            placeholder="Password" 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UnControlledForm;