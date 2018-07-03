import React, { Component } from "react";


const ItemForm = () => {
    return(
    <div className="Card-details" >
        <div classNmae="container">
            <form className="">
                <div className= "">
                    <input placeholder="Item Name" />
                    <input placeholder="Price" />
                    <textarea className="input-group-text" placeholder="Details" />
                    <label> Image </label>
                    <input type="file" acceptCharset="image/*" />
                    <input className="btn" type="submit" />
                </div>
            </form>
        </div>
    </div>            
    )
} 

export default ItemForm;
