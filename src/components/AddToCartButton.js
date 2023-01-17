import React, { Component } from 'react';
import products from '../../constants/Products';
import ShoppingCartContext from '../ShoppingCartContext';

class AddToCart extends Component {
  constructor(props) {
    super(props);

    // this.addProduct = this.addProduct.bind(this);
  }

  render() {
    return (
      <ShoppingCartContext.Consumer>
        {
          ({addProduct, amount}) => {
            return (
              <button onClick={() => addProduct(products, amount)}>Add to Cart</button>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

export default AddToCart;