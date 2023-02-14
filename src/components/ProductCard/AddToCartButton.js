import React, { Component } from 'react';
import ShoppingCartContext from '~src/contexts/ShoppingCartContext';

class AddToCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 1
    };

    this.setQuantity = this.setQuantity.bind(this);
  }

  setQuantity(e) {
    this.setState({
      amount: parseInt(e.target.value)
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
                  value={this.state.amount}
                  onChange={this.setQuantity}
                />
                <button onClick={() => addProduct(this.props.product, this.state.amount)}>Add to Cart</button>
              </div>
            );
          }
        }
      </ShoppingCartContext.Consumer>
    );
  }
}

export default AddToCart;