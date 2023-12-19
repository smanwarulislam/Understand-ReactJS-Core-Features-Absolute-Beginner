import React from "react";
import classes from "./app.module.css";

// import Inputs from "./inputs";
// import UnControlledForm from "./forms/uncontrolled-form";
import ControlledForm from "./forms/controlled-form";

const App = () => {
  return (
    <div className={classes.Wrapper}>
      <h1 className={classes.Heading}>Working with Forms in React</h1>
      <hr />
      {/* <Inputs /> */}
      {/* <UnControlledForm /> */}
      <ControlledForm />
    </div>
  );
};

export default App;