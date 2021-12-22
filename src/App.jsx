import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <p className="App-intro">
            Folder Structure is Like <br />
            <code>*src</code> <br />
            <code> - /assets</code> contains Images, Fonts etc. <br />
            <code> - /components</code> contain Reusable or Specific Components{" "}
            <br />
            <code> - /functions</code> contain reusable / lengthy function{" "}
            <br />
            <code> - /pages</code> contain all pages of Application <br />
            <code> - /redux</code> for managing redux (Actions, Reducers, Store){" "}
            <br />
            <code> - /routes</code> contain complete routing structure <br />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
