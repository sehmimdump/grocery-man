import React, { Component } from "react";
// CSS
import "./css/Shoppage.css";
// My Components
import Card from "./Card";

// DUmmy data

class ShopPage extends Component {
  state = {
    NumberOfItemsInCart: 0,
    itemsInCart: []
  };
  // Method to push Items Clicked in the Array and increment the Cart
  addItem = (data) => {
    this.setState({
      selectedCard : data.title,
    });
    this.state.itemsInCart.includes(data.title) ? 
      alert("Item Already in Cart")
     :
    this.setState({
      NumberOfItemsInCart: this.state.NumberOfItemsInCart + 1,
      itemsInCart : [...this.state.itemsInCart, data.title]
    })
  };
  deleteItemFromCart = (itemToDelete) => {
    const newArray = this.state.itemsInCart;
    if ((this.state.NumberOfItemsInCart <= 0)) {
      alert("Non-Negative")
    }
    else if (!newArray.includes(itemToDelete.title)){
      alert("Item not in cart")
    }
    else{
      newArray.splice(newArray.indexOf(itemToDelete.title), 1)
      this.state.NumberOfItemsInCart <=0 ? console.log("no items in bag") :
      this.setState({
        NumberOfItemsInCart: this.state.NumberOfItemsInCart - 1,
        itemsInCart : newArray
      });
    }
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
          <div># of Items:{this.state.NumberOfItemsInCart}</div>
          <ul>
            {this.state.itemsInCart.map(item => {
              return (
                <li key={item}> {
                  (item)
                   }
               </li>
              )
            })}
          </ul>
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
