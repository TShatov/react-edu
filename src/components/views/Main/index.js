import React from 'react';

import ProductCard from '~src/components/ProductCard';
import products from '~src/constants/Products';

import './Catalog.css';

const MainPage = () => (
  <main>
    <div className='shopping-header__title'>Main</div>
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
  </main>
);

export default MainPage;