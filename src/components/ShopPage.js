import React, { Component } from "react";
// CSS
import "./css/Shoppage.css";
// My Components
import Card from "./Card";

class ShopPage extends Component {
  state = {
    NumberOfItemsInCart: 0,
    itemsInCart: ["Apple"]
  };
  // Method to push Items Clicked in the Array and increment the Cart
  addItem = () => {
    this.setState({
      NumberOfItemsInCart: this.state.NumberOfItemsInCart + 1
    });
  };
  DeleteItemFromCart = () => {
    this.setState({
      NumberOfItemsInCart: this.state.NumberOfItemsInCart - 1
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
              return item;
            })}
          </div>
          <button className="btn btn-primary"> Cash Out </button>
        </div>
        <Card
          addItemToCart={this.addItem.bind(this)}
          DeleteItemFromCart={this.DeleteItemFromCart.bind(this)}
        />
      </div>
    );
  }
}

export default ShopPage;
