import 'bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Router>
    <App tab="home" />
  </Router>,
);
