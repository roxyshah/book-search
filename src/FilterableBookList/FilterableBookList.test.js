import React from 'react';
import ReactDOM from 'react-dom';
import FilterableBookList from './FilterableBookList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterableBookList />, div);
  ReactDOM.unmountComponentAtNode(div);
});