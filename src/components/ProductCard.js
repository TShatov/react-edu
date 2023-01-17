import TextBox from './TextBox';
import Price from './Price';
import Image from './Image';
import AddToCart from './AddToCartButton';

import React, { Component } from 'react';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='product-card'>
        <TextBox title={this.props.title}/>
        <Price price={this.props.price}/>
        <Image
          src={this.props.src}
          width={200}
          height={200}
          alt={this.props.title}/>
        <AddToCart key={this.props.id}/>
      </div>
    );
  }
}

export default ProductCard;