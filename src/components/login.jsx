import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.status === 0 ? "Sign Up" : "Login"}</h1>
        <form className="loginForm">
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" />
          <label htmlFor="rePassword">Re Enter Password</label>
          <input type="text" name="rePassword" />
          <input type="submit" placeholder="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
