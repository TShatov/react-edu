import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Catalog from './src/Catalog';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Catalog />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)