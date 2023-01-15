import TextBox from './TextBox';
import Price from './Price';
import Image from './Image';

import React, { Component } from 'react';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TextBox title={this.props.title}/>
        <Price price={this.props.price}/>
        <Image src={this.props.src}
          width={200}
          height={200}
          alt={this.props.title}/>
      </div>
    );
  }
}

export default ProductCard;