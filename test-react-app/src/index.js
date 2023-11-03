import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

hydrateRoot(document.getElementById('root'), 
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
