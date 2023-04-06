import React, { Component } from 'react';

import makeRequest from '~src/helpers/api';

import Slideshow from '~src/components/Slideshow';
import ProductCard from '~src/components/ProductCard';

import './Main.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    makeRequest({content_type: 'product'})
      .then(({ body: { items } }) => {
        this.setState({ items });
      });
  }

  render() {
    return (
      <main>
        <div className='shopping-header__title'>Main</div>
        <Slideshow />
        <div className='product-catalog'>
          <div className='product-catalog__background'></div>
          <div className='product-wrapper'>
            {
              this.state.items.map((product) => (
                <ProductCard 
                  key={product.fields.id}
                  product={product.fields}
                />
              ))
            }
          </div>      
        </div>
      </main>
    );
  }
}

export default MainPage;