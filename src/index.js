import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset/>
      <Router>
       <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
