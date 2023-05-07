import React from 'react';
import ReactDOM from 'react-dom/client';
import './interfaces/index.css';
import App from './interfaces/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


