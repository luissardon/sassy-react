import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.component.scss';

import LayoutComponent from './common/layout/layout.component';
import HomeComponent from './home/home.component';
import SearchComponent from './search/search.component';

class AppComponent extends Component {

  render() {
    return (
      <LayoutComponent>
        <Router>
          <Switch>
            <Route exact path="/" component={ HomeComponent } />
            <Route path="/s" component={ SearchComponent } />
          </Switch>
        </Router>
      </LayoutComponent>
    );
  }
}

export default AppComponent;
