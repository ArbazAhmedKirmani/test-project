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
        <p className="App-intro">
          Folder Structure is Like
          <code>*src/</code>
          <code> - assets</code> contains Images, Fonts etc.
          <code> - components</code> contain Reusable or Specific Components
          <code> - functions</code> contain reusable / lengthy function
          <code> - pages</code> contain all pages of Application
          <code> - redux</code> for managing redux (Actions, Reducers, Store)
          <code> - routes</code> contain complete routing structure
        </p>
      </div>
    );
  }
}

export default App;
