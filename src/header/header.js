import React, { Component } from 'react';
import './header.css';

class HEADER extends Component {
  render() {
    return (
      <div className="header">
        <div className="h-title">任务</div>
        <div className="h-right">
          <p>2</p>
          <p>编辑</p>
        </div>
      </div>
    );
  }
}

export default HEADER;
