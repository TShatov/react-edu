import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import ShopProvider from './components/ShopProvider';
import Catalog from './components/Catalog';
import ShoppingCart from './components/ShoppingCart';

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