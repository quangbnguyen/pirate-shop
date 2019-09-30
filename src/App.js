import React from 'react';
import './App.css';
import dataOfItems from '../src/Data/item-data';
import ItemList from './Components/ItemList/ItemList';
import Cart from './Components/Cart/Cart';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.addMoreItem = this.addMoreItem.bind(this);
    this.decreaseItemNumber = this.decreaseItemNumber.bind(this);
  }

  // Add an item to the Cart when the Add-to-Cart button is clicked

  addItemToCart(addedItem) {
    let list = this.state.cartItems;
    let i = 0;
    for (i; i < list.length; i++) {
      if (list[i].id === addedItem.id) {
        list[i].quantity++;
        break;
      }
    }
    if (i === list.length) {
      this.setState({cartItems: [...this.state.cartItems, addedItem]});
    }
    else {
      this.setState({cartItems: list});
    }
  }

  // Remove an item from the Cart when the X button is clicked

  removeItemFromCart(itemId) {
    let list = this.state.cartItems;
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === itemId) {
        break;
      }
    }
    list.splice(i, 1);
    this.setState({cartItems: list});
  }

  // Increase the quantity of an item when the + button is clicked

  addMoreItem(itemId) {
    let list = this.state.cartItems;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === itemId) {
        list[i].quantity++;
      }
    }
    this.setState({cartItems: list});
  }

  // Decrease the quantity of an item when the - button is clicked

  decreaseItemNumber(itemId) {
    let list = this.state.cartItems;
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === itemId) {
        list[i].quantity--;
        break;
      }
    }
    if (list[i].quantity === 0) {
      list.splice(i, 1);
    }
    this.setState({cartItems: list});
  }

  // helper method to get the total number of DVDs in the Cart

  getNumberOfDVDs() {
    let numberOfDVDs = 0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      if (this.state.cartItems[i].category === "DVD") {
        numberOfDVDs += this.state.cartItems[i].quantity;
      }
    }
    return numberOfDVDs;
  }

  // helper method to get the total number of Blu-Rays in the Cart

  getNumberOfBluRays() {
    let numberOfBluRays = 0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      if (this.state.cartItems[i].category === "Blu-ray") {
        numberOfBluRays += this.state.cartItems[i].quantity;
      }
    }
    return numberOfBluRays;
  }

  // helper method to get the number of DVD products in the Cart

  getNumberOfDVDProducts() {
    let numberOfDVDItems = 0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      if (this.state.cartItems[i].category === "DVD") {
        numberOfDVDItems++;
      }
    }
    return numberOfDVDItems;
  }

  // helper method to get the number of Blu-ray products in the Cart

  getNumberOfBlueRayProducts() {
    let numberOfBluRayItems = 0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      if (this.state.cartItems[i].category === "Blu-ray") {
        numberOfBluRayItems++;
      }
    }
    return numberOfBluRayItems;
  }

  // get the total price of all items in the Cart

  getTotalPrice() {
    let dvds = this.getNumberOfDVDs();
    let bluRays = this.getNumberOfBluRays();
    let dvdPrice = dvds * 20;
    // DVD discount
    if (this.getNumberOfDVDProducts() === 3) {
        dvdPrice *= 0.9;
    }
    let bluRayPrice = bluRays * 25;
    // Blu-ray discount
    if (this.getNumberOfBlueRayProducts() === 3) {
      bluRayPrice *= 0.85;
    }
    let totalPrice = dvdPrice + bluRayPrice;
    // Bulk discount
    if (dvds + bluRays >= 100) {
      totalPrice *= 0.95;
    }
    return totalPrice;
  }

  render() {
    return (
      <div className="App">
          <h1>The Pirate Shop</h1>
          <h2 className="products">Products</h2>
          <ItemList items={dataOfItems} addItem={this.addItemToCart}/>
          <h2 className="cart">Cart</h2>
          <Cart cartItems={this.state.cartItems} 
                removeItem={this.removeItemFromCart} 
                addMoreItem={this.addMoreItem}
                decreaseItemNumber={this.decreaseItemNumber}/>
          <h2 className="total">Total: ${this.getTotalPrice()}</h2>
      </div>
    );
  } 
}

export default App;

