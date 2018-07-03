import React, { Component } from "react";
import "../../App.css";
import "../css/Startpage.css";
import { RingLoader } from "react-spinners";

class Startpage extends Component {
  state = {
    appTitle: "Organicon",
    initalClass: "App-Wrapper",
    loadingScreen: false
  };
  // Onclick This function Loads and displays loading screen for 1 sec
  loadingScreenOnClick = () => {
    this.setState({ loadingScreen: true });
    setTimeout(() => {
      this.setState({ loadingScreen: false });
    }, 1000);
  };
  render() {
    // If Clicked Loading turns true and loading Screen shows
    const isLoading = this.state.loadingScreen ? (
      <div className="loadingScreen">
        <RingLoader loading={this.state.loading} />
      </div>
    ) : (
      <div className={this.initalClass}>
        <header className="App-header">
          <h1 className="App-title">
            {" "}
            Welcome To
            <span className="title"> {this.state.appTitle}</span>
          </h1>
          <h2 className="App-title-primary">Where everything is organic</h2>
        </header>
        <div className="btn-wrapper" onClick={this.loadingScreenOnClick}>
          <a href="/shop" className="btn btn-white">
            Lets Shop
          </a>
        </div>
      </div>
    );
    //////////////////////////////////////////////////////////////////
    return <div className="App">{isLoading}</div>;
  }
}
export default Startpage;
