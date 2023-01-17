import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import ShopContainer from './src/ShopContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ShopContainer />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);