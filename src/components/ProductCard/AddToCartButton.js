import React, { Component } from 'react';
import ShoppingCartContext from '~src/contexts/ShoppingCartContext';

class AddToCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1
    };

    this.setQuantity = this.setQuantity.bind(this);
  }

  setQuantity(e) {
    this.setState({
      quantity: parseInt(e.target.value)
    });
  }

  render() {
    return (
      <ShoppingCartContext.Consumer>
        {
          ({addProduct}) => {
            return (
              <div className='add-to-card__container'>
                <label>Quantity</label>
                <input 
                  type='number'
                  value={this.state.quantity}
                  onChange={this.setQuantity}
                />
                <button onClick={() => addProduct(this.props, this.quantity)}>Add to Cart</button>
              </div>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

export default AddToCart;