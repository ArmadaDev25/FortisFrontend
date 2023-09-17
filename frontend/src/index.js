import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Button } from 'react-bootstrap';



// Router Import
import { BrowserRouter as Router } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

