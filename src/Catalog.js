import React, { Component } from 'react';

import ProductCard from './components/ProductCard';

import products from '../constants/Products';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='product-catalog'>
        {
          products.map(product => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              src={product.image}
            />
          ))
        }
      </div>
    );
  }
}

export default Catalog;