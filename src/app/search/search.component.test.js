import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './search.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchComponent />, div);
});
