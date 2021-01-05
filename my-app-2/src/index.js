import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.REACT_APP_MOCK_API) {
  const { worker } = require('./mocks/browser.js');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Analytics logging. Defaults to console, can be set to analytics endpoint.
// eslint-disable-next-line no-console
reportWebVitals(console.log);
