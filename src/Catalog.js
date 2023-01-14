import React, { Component } from "react";

import { ProductCard } from "./ProductCard";

import products from "../constants/Products"

export class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const productsList = products;
    return (
      <div>
        {
          products.map(product => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              src={product.image}
            />
          ))
        }
      </div>
    )
  }
}