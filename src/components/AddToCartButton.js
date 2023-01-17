import React, { Component } from 'react';
import ShoppingCartContext from '../ShoppingCartContext';

class AddToCart extends Component {
  constructor(props) {
    super(props);

    this.state = { productAmount: 0 };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct() {
    this.setState((prevState) => ({ productAmount: prevState.productAmount + 1}));
  }

  render() {
    return (
      <ShoppingCartContext.Consumer>
        {
          (addProduct) => {
            return (
              <button onClick={this.addProduct}>Add to Cart ({this.state.productAmount})</button>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

AddToCart.defaultProps = {
  productAmount: 0
};

export default AddToCart;