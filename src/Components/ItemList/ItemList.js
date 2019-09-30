import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

// Implementation of the list of products

class ItemList extends React.Component {
    render() {
        return (
            <div className="ItemList">
            {
                this.props.items.map( (item, i)  => {
                    return <Item key={i} item={item} addItem={this.props.addItem}/>
                })
            }
            </div>
        )
    }
}

export default ItemList;

