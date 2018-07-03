import React, { Component } from "react";
import axios from 'axios';
import { RingLoader } from "react-spinners";

// Css
import "./css/Card.css";
import "./css/CardDetails.css";

class Card extends Component {
  state = {
    zoom: false,
    NumberOfItemsInCart: 0,
    itemsInCart: [],
    showDetails: false,
    selectedIted: '',
    data: [],
    loading: true
  };

  // DATA
  componentDidMount() {
    axios.get(`https://warm-cliffs-96293.herokuapp.com/api/items`)
      .then((response) => {
        this.setState({data: response.data.items, loading: false})
      })
  }

  showDiv = (item) => {
    this.setState({
      showDetails: !this.state.showDetails,
      selectedIted: item
    });
  };

  render() {
    const addItem = data => {
      //////////// PROP COMES FROM ShopPage /////////
      this.props.addItemToCart(data);
    };
    const deleteItem = data => {
      //////////// PROP COMES FROM ShopPage /////////
      this.props.deleteItemFromCart(data);
    };

    const showDetails = this.state.showDetails ? (
        <div>
          <div className="Card-details">
            <h1> {this.state.selectedIted.title} </h1>
            <img className="item-images" src={this.state.selectedIted.img} alt={this.state.selectedIted.title} />
            <p className="well">Details: {this.state.selectedIted.details} </p>
            <div>Price: {this.state.selectedIted.price}/lb </div>
            <div>Stock: {this.state.selectedIted.stock} Batches </div>
            <button onClick={()=>addItem(this.state.selectedIted)} > Add To cart </button>
            <button onClick={()=>deleteItem(this.state.selectedIted)} > Remove from cart </button>
          </div>
          <button className="Card-details-button" onClick={this.showDiv}>
            {" "}
            Back{" "}
          </button>
        </div>
      ) : null

      if(this.state.loading) {
        return(
          <RingLoader />
        )
      } else {
        return (
          <div className="band">
            { showDetails }
            {this.state.data.map((item, index) => {
              return (
                <div key={item.id} className="items" index={this.state.index}>
                  <div className="thumb">{item.title} </div>
                  <img className="item-images" src={item.img} alt={item.title} />
                  <div className="item-footer"> Price ${item.price}/lb </div>
                  <button onClick={()=>this.showDiv(this.state.data[index])} className="btn btn-details">
                    Details
                  </button>
                  <button
                    onClick={() => addItem(this.state.data[index])}
                    className="btn btn-danger"
                  >
                    +
                  </button>
                  <button
                    onClick={() => deleteItem(this.state.data[index])}
                    className="btn btn-danger"
                  >
                    -
                  </button>
    
                </div>
              );
            })}
          </div>
        )
      }
  }
}

export default Card;
