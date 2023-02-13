import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ShoppingCartContext from '~src/contexts/ShoppingCartContext';

import { mainPath, cartPath, contactsPath} from '~src/helpers/routes';

import './MainMenu.css';

class MainMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    function calculateSum(productsInCart) {

      const sum = productsInCart.reduce( (acc, curObj) => {
        return acc + curObj.amount;}, 0);
    }
    return (
      <ShoppingCartContext.Consumer>
        {
          ({productsInCart}) => {
            return (
              <header className='shopping-header'>
                <nav>
                  <ul>
                    <div>
                      <li><NavLink exact to={mainPath()}>Main</NavLink></li>
                      <li><NavLink to={contactsPath()}>Contacts</NavLink></li>
                    </div>
                    <li><NavLink to={cartPath()}>Cart ({calculateSum(productsInCart)})</NavLink></li>
                  </ul>
                </nav>
              </header>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

export default MainMenu;