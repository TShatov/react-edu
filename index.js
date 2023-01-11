import { MathOperations } from "./src/mathoperations";

import React, { Component } from "react";

import ReactDOM from "react-dom";

class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello, World!</div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

const result = MathOperations.multiply(2,3);
console.log(result);

const result2 = MathOperations.sum(2,5);
console.log(result2);

const result3 = MathOperations.divide(5,2);
console.log(result3);

const result4 = MathOperations.subtract(2,5);
console.log(result4);