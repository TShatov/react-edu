import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import ShopProvider from '~src/components/ShopProvider';
import Catalog from '~src/components/Catalog';
import ShoppingCart from '~src/components/ShoppingCart';
import MainMenu from '~src/components/MainMenu';

const App = () => (
  <ShopProvider >
    <Router>
      <MainMenu />
      <Catalog />
      <ShoppingCart />
    </Router>
  </ShopProvider >
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);