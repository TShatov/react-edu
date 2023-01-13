import React, { Component } from "react";

import { ProductCard } from "./ProductCard";

export class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          <ProductCard />
        }
      </div>
    )
  }
}