import React, { Component } from 'react';

import request from 'superagent';

import './Product.css';

const url = 'https://cdn.contentful.com/';
const spaceId = 'v441z4n7clri';
const environmentId = 'master';
const accessToken = 'R4FhPbGLGH4OrEfOi4RDTw-19pCcDYV6hLcZZxbMNX4';
let imageCount = 0;

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = 
      { 
        currentImage: {},
      };
  }

  imageUpdate(url) {
    this.setState({ currentImage: url});
  }

  prevImage() {
    if (imageCount == 0) {
      return;
    } else {
      imageCount--;
    }
    this.setState({ currentImage: this.state.product.gallery[imageCount].url});
  }

  nextImage() {
    if (imageCount == this.state.product.gallery.length - 1) {
      return;
    } else {
      imageCount++;
    }
    this.setState({ currentImage: this.state.product.gallery[imageCount].url});
  }

  componentDidMount() {
    const id = this.props.id;

    request
      .get(`${url}spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`)
      .query({'content_type': 'product'})
      .then(({ body }) => {
        body.items.forEach( product => {
          if (product.fields.id === Number(id)) {
            this.setState({ product: product.fields });
            this.setState({ currentImage: product.fields.gallery[0].url });
          }
        });
      });
  }

  render() {
    const product = this.state.product;
    if (this.state.product) {
      return (
        <div>
          <div className='shopping-header__title'>Product:</div>
          <div className='product-card__container'>
            <div className='product-cart__column'>
              <h2 className='product-card__title'>{product.title}</h2>
              <div className='product-card__price'>{product.price}</div>
              <div className='slider-container'>
                <div className='slider-icons'>
                  <button onClick={() => this.prevImage()} className='slide-prev slider-icon'></button>
                  <button onClick={() => this.nextImage()} className='slide-next slider-icon'></button>
                </div>
                <img className='product-card__main-image' src={this.state.currentImage} />
              </div>
              <div className='product-card__gallery'>
                {
                  product.gallery.map((item) => (
                    <img onClick={() => this.imageUpdate(item.url)} src={item.url} key={item.id}></img>
                  ))
                }
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
}

export default ProductPage;