import React, { Component } from "react";
import { Switch, Route } from "react-router";

import CreateAccount from "./components/createAccount.jsx";
import Home from "./components/home.jsx";
import Login from "./components/login.jsx";

class Views extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/create" render={props => <CreateAccount {...props} />} />
      </Switch>
    );
  }
}
export default Views;
