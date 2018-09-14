import React, { Component } from "react";
import axios from 'axios';
import "../css/Card.css";

<<<<<<< HEAD
    

const LoginPage = () => {
    return(
    <div className="container"> 
        <br />
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title"><b> Buyer </b></h3>
                </div>
                <div className="panel-body">
                <form acceptCharset="UTF-8" role="form">
                    <fieldset>
                    <div className="form-group">
                        <input className="form-control" placeholder="E-mail" />
=======

export default class LoginPage extends Component {
    state = {
        buyerEmail: '',
        buyerPassword: ''
    }

    emailChange = (e) => {
        this.setState({ buyerEmail: e.target.value })
    }

    passChange = (e) => {
        this.setState({ buyerPassword: e.target.value })
    }

    loginBuyer = () => {
        axios.post(``)
    }

    render() {
        return(
            <div className="container"> 
            <br />
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h3 className="panel-title"><b> Buyer </b></h3>
                    </div>
                    <div className="panel-body">
                    <form acceptCharset="UTF-8" role="form">
                        <fieldset>
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                placeholder="E-mail" 
                                value={this.state.buyerEmail}
                                onChange={this.emailChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                placeholder="Password" 
                                type="password" 
                                value={this.state.buyerPassword}
                                onChange={this.passChange}
                            >
                            </input>
                        </div>
                        <input 
                            className="btn btn-lg btn-success btn-block" 
                            type="submit" 
                            value="Login"
                            onClick={this.loginBuyer}
                        >
                        </input>
                        </fieldset>
                    </form>
                    <div>
                        <a href="/signup"><input type="button" className="btn btn-default btn-block" value="SignUp" /></a>
                        <a className="btn btn-danger fa fa-google"></a>
>>>>>>> c54ecd20fe0168c4ea245898733dc488b25afec6
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h3 className="panel-title"><b> Vendor </b></h3>
                    </div>
                    <div className="panel-body">
                    <form acceptCharset="UTF-8" role="form">
                        <fieldset>
                        <div className="form-group">
                            <input className="form-control" placeholder="E-mail" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Password" name="password" type="password" value=""></input>
                        </div>
                        <input className="btn btn-lg btn-success btn-block" type="submit" value="Login"></input>
                        </fieldset>
                    </form>
                    <div>
                        <a href="/signup"><input type="button" className="btn btn-default btn-block" value="SignUp" /></a>
                        <a className="btn btn-danger fa fa-google"></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
<<<<<<< HEAD
            </div>
        </div>
        
        <div className="well floating-well">
            <h1> Hello Recruters! </h1>
            <img className="loading-pic" src="https://vignette.wikia.nocookie.net/family-guy-the-quest-for-stuff/images/b/bc/Consuela-animation-059idlepic%404x.png/revision/latest?cb=20140420130828"></img>
            <h5> This part isnt done yet </h5>
        </div>
    </div>  
            
    )
=======
        </div>  
        )
    }
>>>>>>> c54ecd20fe0168c4ea245898733dc488b25afec6
} 
