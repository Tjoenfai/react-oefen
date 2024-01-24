import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Contact from './routes/Contact';
import Home from './routes/Home';

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/contact', element: <Contact/>},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();