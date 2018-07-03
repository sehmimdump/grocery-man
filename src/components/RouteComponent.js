import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// My Componenets
import ShopPage from "./Pages/ShopPage";
import Startpage from "./Pages/Startpage";
import ContactPage from "./Pages/ContactPage";
import LoginPage from "./Pages/LoginPage";
import CheckOutPage from "./Pages/CheckOutPage";
import SignupPage from "./Pages/SignupPage";
//CSS 
import './css/Startpage.css';

const navbarData = [
  { title: 'Login', url: 'login', id:4 },
  { title: 'Contact', url: '/contact', id: 3 },
  { title: 'Shop', url: '/shop', id: 2},
  { title: 'Home', url: '/', id: 1}
];

const navbarDataLoggedIn = [
  { title: 'Contact', url: '/contact', id: 3 },
  { title: 'Shop', url: '/shop', id: 2},
  { title: 'Home', url: '/', id: 1}
];

class RouteComponent extends Component {
  state ={
    loggedIn : false
  }
  render() {    
    return (
      <Router>
      <div>
        <div className="Navbar">
          <ul className="navbar-ul">
              {
                !this.state.loggedIn ? 
                  navbarData.map(item => {
                      return(
                          <li className="navbar-li" key={item.id}>
                              <a  href={ item.url }className="navbar-a">
                                  { item.title } 
                              </a>
                          </li>
                      )
                  })
                :
                navbarDataLoggedIn.map(item => {
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
        <Route path="/login" component={LoginPage}/>
        <Route path="/cashout" component={CheckOutPage}/>
        <Route path="/signup" component={SignupPage}/>
      </div>
    </Router>
    );
  }
}
export default RouteComponent;


