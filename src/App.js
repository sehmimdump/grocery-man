import React, { Component } from 'react';
import './App.css';

// My Componenets
import RouteComponent from "./components/RouteComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteComponent/>
      </div>
    );
  }
}

export default App;
