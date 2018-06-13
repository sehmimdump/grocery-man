import React, { Component } from 'react';

// Css
import "./css/Card.css"

// Data
import Data from "./DummyData";

// Components
import Card from "./Card";

const CardDetails = (prop) => {
    const state ={
        initalClass: "items"
    }
    return (
    <div className="Card-details">
        {Data.title}
    </div>)
}

export default CardDetails;