import React, { Component } from "react";
// CSS
import "./css/Shoppage.css";
// My Components
import Card from "./Card";

class ShopPage extends Component {
  state = {
    NumberOfItemsInCart: 0,
    itemsInCart: [],
    selectedCard: ""
  };
  // Method to push Items Clicked in the Array and increment the Cart
  addItem = (data) => {
    this.setState({
      NumberOfItemsInCart: this.state.NumberOfItemsInCart + 1,
      selectedCard : data.title,
    });
    this.state.itemsInCart.includes(this.state.selectedCard) ? 
    console.log("Already in The Cart") :
    this.setState({
      itemsInCart : [...this.state.itemsInCart, data.title]
    })
  };
  deleteItemFromCart = (itemToDelete) => {
    const newArray = this.state.itemsInCart;
    this.state.NumberOfItemsInCart <= 0 ? console.log("Non-Negative") :
    newArray.pop(itemToDelete);
    this.setState({
      NumberOfItemsInCart: this.state.NumberOfItemsInCart - 1,
      itemsInCart : newArray
    });
  };
  render() {
    return (
      <div className="ShopPage">
        <div className="header-wrapper">
          <div className="header">
            <a className="logo">SHOP STUFF</a>
          </div>
        </div>
        <div className="header-right">
          <div>Cart:{this.state.NumberOfItemsInCart}</div>
          <div>
            {this.state.itemsInCart.map(item => {
               <br />
              return (item);
            })}
          </div>
          <button className="btn btn-primary"> Cash Out </button>
        </div>
        <Card
          addItemToCart={this.addItem}
          deleteItemFromCart={this.deleteItemFromCart}
        />
      </div>
    );
  }
}

export default ShopPage;
