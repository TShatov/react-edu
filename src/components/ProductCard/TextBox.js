import React, { Component } from 'react';

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <span>{this.props.title}</span>
    );
  }
}

export default TextBox;