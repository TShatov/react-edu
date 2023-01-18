import React, { Component } from 'react';

import TextBox from './TextBox';
import Price from './Price';
import Image from './Image';
import AddToCart from './AddToCartButton';

import './ProductCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='product-card'>
        <div className='left'>
          <Image
            src={this.props.src}
            width={330}
            height={383}
            alt={this.props.title}
          />
        </div>
        <div className='right'>
          <TextBox title={this.props.title}/>
          <Price price={this.props.price}/>
          <AddToCart key={this.props.id}/>
        </div>
      </div>
    );
  }
}

export default ProductCard;