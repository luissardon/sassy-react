import React, { Component } from 'react';

import './home.component.scss';

import Searchbar from '../common/searchbar/searchbar.component';

class HomeComponent extends Component {

  render() {
    return (
      <div>
        <Searchbar />

        <div className="Home">
          <h2 className="Home-title">Home</h2>
          <hr />
          <div className="Home-container">
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
