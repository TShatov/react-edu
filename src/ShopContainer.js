import React, { Component } from 'react';

import Catalog from './Catalog';
import ShoppingCart from './ShoppingCart';
import ShoppingCartContext from './ShoppingCartContext';

class ShopContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { productsInCart: [] };
  }

  render() {
    return (
      <ShoppingCartContext.Provider value={{
        productsInCart: this.state.productsInCart,
        addProduct: this.addProduct
      }}>
        <div>
          <Catalog />
          <ShoppingCart />
        </div>
      </ShoppingCartContext.Provider>
    );
  }
}

export default ShopContainer;