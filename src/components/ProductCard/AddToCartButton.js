import React, { Component } from 'react';
import { products } from '~src/constants/Products';
import ShoppingCartContext from '~src/contexts/ShoppingCartContext';

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
          ({addProduct, amount}) => {
            return (
              <div className='add-to-card__container'>
                <label>Quantity</label>
                <input 
                  type='number'
                  value={this.state.quantity}
                  onChange={this.setQuantity}
                />
                <button onClick={() => addProduct(products, amount)}>Add to Cart</button>
              </div>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

export default AddToCart;