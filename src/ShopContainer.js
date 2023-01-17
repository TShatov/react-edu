import React, { Component } from 'react';

import Catalog from './Catalog';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartContext from './ShoppingCartContext';

class ShopContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { productsInCart: [] };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product, quantity) {
    const productsInCart = this.state.productsInCart;
    productsInCart.push({ ...product, quantity });
    this.setState({ productsInCart });
  }

  render() {
    return (
      <ShoppingCartContext.Provider value={{
        productsInCart: this.state.productsInCart,
        addProduct: this.addProduct
      }}>
        <div className='catalog-section'>
          <Catalog />
          <ShoppingCart />
        </div>
      </ShoppingCartContext.Provider>
    );
  }
}

export default ShopContainer;