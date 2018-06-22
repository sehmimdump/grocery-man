import React, { Component } from "react";
// Css
import "./css/Card.css";
import "./css/CardDetails.css"
// Data
import Data from "./DummyData";
import CardDetails from "./CardDetails";

class Card extends Component {
  state = {
    zoom: false,
    NumberOfItemsInCart: 0,
    itemsInCart: [],
  };


  render() {
    // Method to zoom in on the item clicked || not finished ||
    const showDiv = () => {
      this.setState({
        zoom : !this.state.zoom
      })
    }
    // const handleCheck = (data) => {
    //   this.setState({
    //     zoom: true,
    //     selectedCard: data.title,
    //     // itemsInCart: itemsInCart[(data.item)]
    //   });
    // };
    const addItem = (data) => {
    //////////// PROP COMES FROM ShopPage /////////
      this.props.addItemToCart(data);
    };
    const deleteItem = (data) => {
    //////////// PROP COMES FROM ShopPage /////////
      this.props.deleteItemFromCart(data);
    };
    // // ZOOM IN WHEN DETAILS CLICKED
    // const zoomOnclick = (data) =>{
    //   <CardDetails title={data.title} />
    //   console.log(data.title)
    // }
    return (
      <div className="band">
        {Data.map((item, index) => {
          return (
            <div
              key={item.id}
              className="items"
             
              index={this.state.index}
            >
              <div className="thumb">{item.title} </div>
              <img className="item-images" src={item.img} alt={item.title} />
              <div className="item-footer"> Price ${item.price}/lb </div>
              <button onClick={showDiv} className="btn btn-details"> Details </button>
              <button onClick={()=>addItem(Data[index])} className="btn btn-danger">
                +
              </button>
              <button onClick={()=>deleteItem(Data[index])} className="btn btn-danger">
                -
              </button>
            </div>
          );
        })}
        {
          this.state.zoom ? <div> < CardDetails showDiv={this.showDiv} /> <button className="Card-details-button" onClick={showDiv}> Back </button></div> : null
        }

      </div>

    );
  }
}

export default Card;
