import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import ShopProvider from '~src/components/ShopProvider';
import Catalog from '~src/components/Catalog';
import ShoppingCart from '~src/components/ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ShopProvider >
        <Catalog />
        <ShoppingCart />
      </ShopProvider >
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);