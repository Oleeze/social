import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  componentDidMount() {
    console.log("Yes mounted");
  }

  changeState() {
    console.log("hello");
    this.setState({ status: !this.state.status });
  }

  render() {
    return (
      <div className="SignUp">
        <h1>{this.state.status === false ? "Sign Up" : "Login"}</h1>
        <form className="loginForm" action="/create" method="post">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          {this.state.status === false ? (
            <div>
              <label htmlFor="rePassword">Re Enter Password</label>
              <input type="password" name="rePassword" />
            </div>
          ) : (
            ""
          )}

          <input type="submit" placeholder="Submit" />
        </form>
        <h1 onClick={() => this.changeState()}>
          {this.state.status === false ? "Sign Up" : "Login"}
        </h1>
      </div>
    );
  }
}

export default Login;
