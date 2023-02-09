import React, { Component } from 'react';

import {
  Route, Switch, NavLink
} from 'react-router-dom';

import { mainPath, cartPath, contactsPath} from '~src/helpers/routes';
import routes from '~src/routes';

import './MainMenu.css';

class MainMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='shopping-header'>
        <ul>
          <div>
            <li><NavLink exact to={mainPath()}>Main</NavLink></li>
            <li><NavLink to={contactsPath()}>Contacts</NavLink></li>
          </div>
          <li><NavLink to={cartPath()}>Cart</NavLink></li>
        </ul>
        <Switch>
          {
            routes.map((route, index) => (
              <Route {...route} key={index} />
            ))
          }
        </Switch>
      </div>
    );
  }
}

export default MainMenu;