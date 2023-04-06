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
            src={product.fields.gallery[0].url}
            width={330}
            height={383}
            alt={product.title}
          />
        </div>
        <div className='right'>
          <NavLink to={productPath(product.sys.id)}><TextBox title={product.fields.title} /></NavLink>
          <Price price={product.fields.price} />
          <AddToCart product={product} />
        </div>
      </div>
    );
  }
}

export default ProductCard;