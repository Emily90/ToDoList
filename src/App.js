import React, { Component } from 'react';
import HEADER from './header/header.js';
import CONTAINER from './container/container.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HEADER></HEADER>
        <CONTAINER></CONTAINER>
      </div>
    );
  }
}

export default App;
