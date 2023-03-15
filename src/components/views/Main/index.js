import React, { Component } from 'react';

import request from 'superagent';

import Slideshow from '~src/components/Slideshow';
import ProductCard from '~src/components/ProductCard';

import './Main.css';

const url = 'https://cdn.contentful.com/';
const spaceId = 'v441z4n7clri';
const environmentId = 'master';
const accessToken = 'R4FhPbGLGH4OrEfOi4RDTw-19pCcDYV6hLcZZxbMNX4';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    request
      .get(`${url}spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`)
      .query({'content_type': 'product'})
      .set('Authorization', `Bearer: ${accessToken}`)
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