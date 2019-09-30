import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';

// Implementation of the Cart

class Cart extends React.Component {
    render() {
        console.log('cartItems: ');
        console.log(this.props.cartItems);
        return (
            <div className="Cart">
            {
                this.props.cartItems.map( (cartItem, i) => {
                    return <CartItem key={i} 
                                     cartItem={cartItem} 
                                     removeItem={this.props.removeItem}
                                     addMoreItem={this.props.addMoreItem}
                                     decreaseItemNumber={this.props.decreaseItemNumber}/>
                })
            }
            </div>
        )
    }
}

export default Cart;