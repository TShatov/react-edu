import React, { Component } from 'react';
import ShoppingCartContext from '~src/contexts/ShoppingCartContext';

import { Link } from 'react-router-dom';

import { cartPath } from '~src/helpers/routes';

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
                    productsInCart.map((cartItem, amount) => (
                      <li key={cartItem.product.id}>{cartItem.product.title}<span> {amount+1}</span></li>
                    ))
                  }
                </ul>
                <Link
                  to={cartPath()}
                  className='shopping-bag__buy-button'>
                  Buy
                </Link>
              </div>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

export default ShoppingCart;