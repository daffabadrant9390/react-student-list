import React from "react";

const StdShow = (props) => {
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>Major: {props.major}</li>
      <li>Email: {props.email}</li>
    </ul>
  );
};
export default StdShow;
