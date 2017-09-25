import React from 'react';
import ReactDOM from 'react-dom';
import GlobalHeader from './GlobalHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GlobalHeader />, div);
});
