import React from "react";
import classes from "./app.module.css";

import Inputs from "./inputs";

const App = () => {
  return (
    <div className={classes.Wrapper}>
      <h1 className={classes.Heading}>Working with Forms in React</h1>
      <hr />
      <Inputs />
    </div>
  );
};

export default App;