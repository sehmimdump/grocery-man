import React, { Component } from "react";
import "../css/Card.css";
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
    </div>  
            
    )
} 

export default LoginPage;