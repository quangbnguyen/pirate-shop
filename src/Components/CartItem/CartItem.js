import React from 'react';
import './CartItem.css';

// Implementation of an item in the Cart

class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveItemFromCart = this.handleRemoveItemFromCart.bind(this);
        this.handleAddMoreItem = this.handleAddMoreItem.bind(this);
        this.handleDecreaseItemNumber = this.handleDecreaseItemNumber.bind(this);
    }

    handleRemoveItemFromCart() {
        this.props.removeItem(this.props.cartItem.id);
    }

    handleAddMoreItem() {
        this.props.addMoreItem(this.props.cartItem.id);
    }

    handleDecreaseItemNumber() {
        this.props.decreaseItemNumber(this.props.cartItem.id);
    }

    render() {
        return (
            <div className="CartItem">
                <div className="image-container">
                    <img src={this.props.cartItem.thumbnailUrl}/>
                </div>
                <div className="item-name">
                    <h4>{this.props.cartItem.name}</h4>
                </div>   
                <div className="quantity">Quantity: {this.props.cartItem.quantity}</div>
                <div className="add-and-decrease">
                    <span className="decrease" onClick={this.handleAddMoreItem}>
                        +
                    </span>
                       |    
                    <span className="add" onClick={this.handleDecreaseItemNumber}>
                        -
                    </span>   
                </div>
                <div className="remove-button" onClick={this.handleRemoveItemFromCart}>
                    <span>X</span>
                </div>
            </div>
        )
    }
}

export default CartItem;
