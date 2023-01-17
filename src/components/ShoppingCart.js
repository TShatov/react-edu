import React, { Component } from 'react';
import ShoppingCartContext from '../ShoppingCartContext';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ShoppingCartContext.Consumer>
        {
          ({ productsInCart }) => {
            return (
              <div className='shopping-bag'>
                <p>Shopping Bag: ({productsInCart.length})</p>
                <button>Buy</button>
              </div>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

ShoppingCart.defaultProps = {
  value: 0
};

export default ShoppingCart;