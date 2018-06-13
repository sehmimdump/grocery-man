import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// My Componenets
import ShopPage from "./ShopPage";
import Startpage from "./Startpage";
import ContactPage from "./ContactPage";

//CSS 
import './css/Startpage.css';


const navbarData = [
  { title: 'Contact', url: '/contact', id: 3 },
  { title: 'Shop', url: '/shop', id: 2},
  { title: 'Home', url: '/', id: 1}
];


class RouteComponent extends Component {
  render() {
    
    return (
      <Router>
      <div>
        <div className="Navbar">
          <ul className="navbar-ul">
              {
                  navbarData.map(item => {
                      return(
                          <li className="navbar-li" key={item.id}>
                              <a  href={ item.url }className="navbar-a">
                                  { item.title } 
                              </a>
                          </li>
                      )
                  })
              }
          </ul>
        </div>  
  
        <Route exact path="/" component={Startpage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/contact" component={ContactPage}/>
      </div>
    </Router>
    );
  }
}
export default RouteComponent;


