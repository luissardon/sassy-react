import React, { Component } from 'react';

import './layout.component.scss';

import HeaderComponent from '../header/header.component';

class LayoutComponent extends Component {

  render() {
    return (
      <div className="Layout">
        <div className="Layout-header">
          <HeaderComponent />
        </div>

        <div className="Layout-container">
          {/* <!-- Mount child routes --> */}
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default LayoutComponent;
