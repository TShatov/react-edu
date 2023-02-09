import React, { Component } from 'react';

import ProductCard from './ProductCard';
import products from '~src/constants/Products';

import './Catalog.css';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='product-catalog'>
        <div className='product-catalog__background'></div>
        <div className='product-wrapper'>
          {
            products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
        
      </div>
    );
  }
}

export default Catalog;