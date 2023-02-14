import React from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartContext from '~src/contexts/ShoppingCartContext';

import { cartPath } from '~src/helpers/routes';

import './Cart.css';

const CartPage = () => (
  <main>
    <div className='shopping-header__title'>Cart</div>
    <ShoppingCartContext.Consumer>
      {
        ({ productsInCart }) => {
          return (
            <div className='shopping-bag'>
              <div className='shopping-list-wrapper'>
                <p>Shopping Bag:</p>
                <ul>
                  {
                    productsInCart.map((cartItem) => (
                      <li key={cartItem.product.id}>{cartItem.product.title}<span>Amount: {cartItem.amount}</span></li>
                    ))
                  }
                </ul>
              </div>
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
  </main>
);

export default CartPage;