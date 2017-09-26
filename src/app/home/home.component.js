import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.component.scss';

class HomeComponent extends Component {

  render() {
    return (
      <div className="Home">
        <h2 className="Home-title">Home</h2>
        <hr />
        <div className="Home-container">
          <Link className="Home-link" to="/s">Search ></Link>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
