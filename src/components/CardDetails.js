import React, { Component } from 'react';

// Css
import "./css/CardDetails.css"

// Data
import Data from "./DummyData";

// Components
import Card from "./Card";
// const showDiv = () => {
//     this.props.showDiv() 
// }

const CardDetails = (props) => {
    
    this.state = {
        zoom: false,
        itemsInCart: [],
      };
    const showDiv = () => {
        this.props.showDiv
    }

        return (
            <div className="Card-details">
        
                    <h1> Header </h1>
                    <div> Image </div>
                    <p> Details </p>
                    <div> Price </div>
                    <button> Add To cart </button>
        
            </div>)

}

export default CardDetails;