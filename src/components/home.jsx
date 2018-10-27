import React, { Component } from "react";
import { Link } from "react-router-dom";
import Style from "./styles/style.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello this is the home page</h1>
        <Link to="/login">Login Page</Link>
      </div>
    );
  }
}

export default Home;
