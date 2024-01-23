import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: '/',
  element: <Home />
}]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);