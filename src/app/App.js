import React, { Component } from 'react';

import GlobalHeader from './GlobalHeader/GlobalHeader';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalHeader />
      </div>
    );
  }
}

export default App;
