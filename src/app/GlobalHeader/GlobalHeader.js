import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './GlobalHeader.scss';

class GlobalHeader extends Component {
  render() {
    return (
      <div className="GlobalHeader">
        <img src={logo} className="GlobalHeader-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default GlobalHeader;
