import React, { Component } from "react";

const SignupPage = () => {
    return(
            <div className="text-center">
                <h2>Sign Up</h2>
                <form>
                    <label>First Name</label>
                        <input type="text" name="firstname" className="span3" />
                    <label>Last Name</label>
                        <input type="text" name="lastname" className="span3" />
                    <label>Email Address</label>
                        <input type="email" name="email" className="span3" />
                    <label>Username</label>
                    <input type="text" name="username" className="span3"></input>
                    <label>Password</label>
                        <input type="password" name="password" className="span3"></input>
                    <label>
                        <input type="checkbox" name="terms"></input> I agree with the 
                            <a href="#">Terms and Conditions</a>
                    </label>
                        <input type="submit" value="Sign up" className="btn btn-primary"></input>
                    <div className="clearfix"></div>
                </form>
            </div>
    )
}

export default SignupPage;