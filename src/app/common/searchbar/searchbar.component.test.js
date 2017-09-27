import React from 'react';
import ReactDOM from 'react-dom';
import SearchbarComponent from './searchbar.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchbarComponent />, div);
});
