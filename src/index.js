import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './pages/components/UserContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);

