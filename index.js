import React, { Component } from "react";

import ReactDOM from "react-dom";

import { Catalog } from "./src/Catalog";

class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello, World!
      </div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

ReactDOM.render(
  <Catalog product={product}/>,
  document.getElementById('product')
)