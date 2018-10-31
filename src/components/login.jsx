import React, { Component } from "react";
import axios from "axios";
import "./styles/login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      email: "",
      password: "",
      rePassword: "",
      errors: []
    };
    this.watchState = this.watchState.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  watchState(e) {
    let word = e.target.name;
    let value = e.target.value;

    this.setState({ [word]: value });
  }

  createUser(e) {
    e.preventDefault();
    axios
      .post("/create", {
        email: this.state.email,
        password: this.state.password,
        rePassword: this.state.rePassword
      })
      .then(result => {
        console.log(result);
        let serverErrors = result.data.errors;
        this.setState({ errors: serverErrors });
        console.log(this.state.errors);
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeState() {
    this.setState({ status: !this.state.status });
  }

  render() {
    return (
      <div className="SignUp">
        <h1>{this.state.status === false ? "Sign Up" : "Login"}</h1>
        <form className="loginForm" onSubmit={this.createUser}>
          {this.state.errors
            ? this.state.errors.map(error => {
                let errorr = error.msg || error.message;
                return (
                  <div className="alert alert-danger" role="alert">
                    {errorr}
                  </div>
                );
              })
            : ""}
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" onChange={this.watchState} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={e => this.watchState(e)}
          />
          {this.state.status === false
            ? [
                <label htmlFor="rePassword">Re Enter Password</label>,
                <input
                  type="password"
                  name="rePassword"
                  onChange={e => this.watchState(e)}
                />
              ]
            : ""}

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
