import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ShopProvider from '~src/components/ShopProvider';
import MainMenu from '~src/components/MainMenu';

import routes from '~src/routes';

const App = () => (
  <ShopProvider >
    <Router>
      <MainMenu />
      <Switch>
        {
          routes.map((route, index) => (
            <Route {...route} key={index} />
          ))
        }
      </Switch>
    </Router>
  </ShopProvider >
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);