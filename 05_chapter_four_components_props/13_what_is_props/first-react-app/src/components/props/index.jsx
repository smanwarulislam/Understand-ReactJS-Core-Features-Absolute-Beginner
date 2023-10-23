import React from "react";

const MyProps = (props) => {
  // console.log('MyProps - ', props);
  // console.log('MyProps - ', props.name);
  // console.log('MyProps - ', props);
  // return <h1>My Name is S M Anwarul Islam Raju</h1>;
  return <h1>My Name is {props.name} </h1>;
};

export default MyProps;