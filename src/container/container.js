import React, { Component } from 'react';
import ADDLIST from '../addList/addList.js';
import './container.css';

class CONTAINER extends Component {
  render() {
    return (
      <div className="container">
        <ul className="todolist">
          <li>1212</li>
          <li>1212</li>
          <li>1212</li>
          <li>1212</li>
        </ul>
        <ADDLIST></ADDLIST>
      </div>
    );
  }
}

export default CONTAINER;
