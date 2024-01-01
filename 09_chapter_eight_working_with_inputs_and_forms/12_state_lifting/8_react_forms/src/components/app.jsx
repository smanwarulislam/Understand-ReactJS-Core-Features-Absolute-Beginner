import React from "react";
import classes from "./app.module.css";

// import Inputs from "./inputs";
// import UnControlledForm from "./forms/uncontrolled-form";
// import ControlledForm from "./forms/controlled-form";
// import SplitForm from "./split-form";
import SignupForm from "./signup-form";

// const App = () => {
//   return (
//     <div className={classes.Wrapper}>
//       <h1 className={classes.Heading}>Working with Forms in React</h1>
//       <hr />
//       {/* <Inputs /> */}
//       {/* <UnControlledForm /> */}
//       {/* <ControlledForm /> */}
//       {/* <SplitForm /> */}
//       <SignupForm />
//     </div>
//   );
// };

class App extends React.Component {
  state = {
    users: []
  };

  createUser = user => {
    user.id = new Date().getTime().toString;
    this.setState({ 
      users: [...this.state.users, user] 
    });
  };
  
  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Working with Forms in React</h1>
        <hr />
        {/* <Inputs /> */}
        {/* <UnControlledForm /> */}
        {/* <ControlledForm /> */}
        {/* <SplitForm /> */}
        {/* <SignupForm /> */}
        <SignupForm createUser={this.createUser} />

        <div>
          <h3 className="mt-5 mb-3">All Registered Users</h3>
          <ul className="list-group">
            {this.state.users.map(user => (
              <li key={user.id} className="list-group-item">
                {user.name} -> {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;