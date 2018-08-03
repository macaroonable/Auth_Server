import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import variable from "./variable.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">test this </h1>
        </header>
        <h1 className="App-intro">test this {variable.song} header</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/auth/google">sign in with google </a>
      </div>
    );
  }
}

export default App;
