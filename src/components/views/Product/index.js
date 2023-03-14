import React, { Component } from 'react';

import request from 'superagent';

import './Product.css';

const url = 'https://cdn.contentful.com/';
const spaceId = 'v441z4n7clri';
const environmentId = 'master';
const accessToken = 'R4FhPbGLGH4OrEfOi4RDTw-19pCcDYV6hLcZZxbMNX4';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const id = this.props.id;

    request
      .get(`${url}spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`)
      .query({'content_type': 'product'})
      .then(({ body }) => {
        body.items.forEach( product => {
          if (product.fields.id === Number(id)) {
            this.setState( product.fields );
          }
        });
      });
  }

  render() {
    const product = this.state;
    return (
      <div>
        <div className='shopping-header__title'>Product:</div>
        <div className='product-card__container'>
          <div className='product-cart__column'>
            <div className='product-card__title'>{product.title}</div>
            <div className='product-card__price'>{product.price}</div>
            <img src={product.image} />
            <div className='product-card__gallery'>
              <img src={product.gallery} />
            </div>
          </div>
          <div className='product-cart__column'>
            <div className='product-card__about'>{product.about}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;