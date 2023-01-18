import React, { Component } from 'react';
import ShoppingCartContext from '~src/contexts/ShoppingCartContext';

import './ShoppingCart.css';

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
                <ul>
                  {
                    productsInCart.map(products => 
                      <li key={ products.id }>{ products.title }</li>
                    )
                  }
                </ul>
                <button>Buy</button>
              </div>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

export default ShoppingCart;