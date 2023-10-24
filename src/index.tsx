// index.tsx (punto de entrada de tu aplicación)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './examples/4-router/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
