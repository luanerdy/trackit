import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.root')
);