import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {BlogProvider} from './data/Context'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <BlogProvider>
    <App />
    </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

