import React, { Component } from "react";
// Css
import "./css/Card.css";
// Data
import Data from "./DummyData";

class Card extends Component {
  state = {
    zoom: false,
    NumberOfItemsInCart: 0,
    itemsInCart: [],
    selectedCard: ""
  };
  render() {
    // Method to zoom in on the item clicked || not finished ||
    const handleCheck = e => {
      this.setState({
        zoom: true,
        selectedCard: e.target.getAttribute(this.index)
      });
      console.log(this.index);
    };
    const addItem = () => {
      this.props.addItemToCart(this.state.NumberOfItemsInCart);
      //////////// ADD THE NAME OF THE ITEM SELECTED /////////
    };
    const DeleteItem = () => {
      this.props.DeleteItemFromCart(this.state.NumberOfItemsInCart);
      //////////// ADD THE NAME OF THE ITEM SELECTED /////////
    };
    return (
      <div className="band">
        {Data.map((item, index) => {
          return (
            <div
              key={item.id}
              className="items"
              onClick={handleCheck}
              index={this.state.index}
            >
              <div className="thumb">{item.title} </div>
              <img className="item-images" src={item.img} alt={item.title} />
              <div className="item-footer"> Price ${item.price}/lb </div>
              <button className="btn btn-details"> Details </button>
              <button onClick={addItem} className="btn btn-danger">
                {" "}
                +{" "}
              </button>
              <button onClick={DeleteItem} className="btn btn-danger">
                {" "}
                -{" "}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
