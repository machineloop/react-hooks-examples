import React from "react";

console.log("hello dynamic import");

const StateComponent = props => {
  const color = props.color;
  return <h1 style={{ color }}>dynamic module example</h1>;
};

export default StateComponent;
