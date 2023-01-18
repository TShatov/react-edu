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
    const product = this.props.product;
    return (
      <div className='product-card'>
        <div className='left'>
          <Image
            src={product.image}
            width={330}
            height={383}
            alt={product.title}
          />
        </div>
        <div className='right'>
          <TextBox title={product.title} />
          <Price price={product.price} />
          <AddToCart product={product} />
        </div>
      </div>
    );
  }
}

export default ProductCard;