import React, { Component } from 'react';
import products from '../../../constants/Products';
import ShoppingCartContext from '../../ShoppingCartContext';

class AddToCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0
    };

    this.setQuantity = this.setQuantity.bind(this);
  }

  setQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  render() {
    return (
      <ShoppingCartContext.Consumer>
        {
          ({addProduct, quantity}) => {
            return (
              <div className='add-to-card__container'>
                <label>Quantity</label>
                <input 
                  type='number'
                  value={this.state.quantity}
                  onChange={this.setQuantity}
                />
                <button onClick={() => addProduct(products, quantity)}>Add to Cart</button>
              </div>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

export default AddToCart;