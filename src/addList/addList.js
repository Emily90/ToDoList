import React, { Component } from 'react';
import './addList.css';

class ADDLIST extends Component {
  render() {
    return (
      <div className="addlist">
        <span>➕</span>
        <input type="text" className="addlist-ipt"/>
      </div>
    );
  }
}

export default ADDLIST;
