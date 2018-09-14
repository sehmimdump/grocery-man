import React, { Component } from "react";

class ContactPage extends Component {

    render(){
        return (
            <div className="">
                <div className="container">
                    <h1> Tell Us About Our Services </h1>
                    <div className="jumbotron jumbotron-fluid">
                        <form className="d-print-block">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Comments</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <input className="btn btn-primary" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage;