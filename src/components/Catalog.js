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
        {
          products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    );
  }
}

export default Catalog;