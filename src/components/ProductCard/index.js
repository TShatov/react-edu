import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { productPath } from '~src/helpers/routes';

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
          <NavLink to={productPath(product.id)}><TextBox title={product.title} /></NavLink>
          <Price price={product.price} />
          <AddToCart product={product} />
        </div>
      </div>
    );
  }
}

export default ProductCard;