import React from 'react';
import './Item.css';

// Implementation of an item in the list of products

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart() {
        this.props.addItem({...this.props.item, quantity: 1});
    }

    render() {
        return (
            <div className="Item"> 
                <div className="image-container">
                    <img src={this.props.item.thumbnailUrl} alt=''/>
                </div>
                <div className="Item-information">
                    <h2>{this.props.item.name}</h2>
                    <h3>{this.props.item.category}</h3> 
                    <h3>${this.props.item.price}.00</h3>
                </div>
                <div className="add-button" onClick={this.handleAddToCart}>
                    <a >Add to Cart</a>
                </div>
            </div>

        )
    }
}

export default Item;