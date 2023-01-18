import React, { Component } from 'react';

import ShoppingCartContext from '~src/contexts/ShoppingCartContext';

class ShopProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { productsInCart: [] };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product, amount = 1) {
    const productsInCart = this.state.productsInCart;
    productsInCart.push({ ...product, amount });
    this.setState({ productsInCart });
  }

  render() {
    return (
      <ShoppingCartContext.Provider value={{
        productsInCart: this.state.productsInCart,
        addProduct: this.addProduct
      }}>
        <div className='catalog-section'>
          {this.props.children}
        </div>
      </ShoppingCartContext.Provider>
    );
  }
}

export default ShopProvider;