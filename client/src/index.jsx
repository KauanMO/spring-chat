import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginRegister } from './pages/LoginRegister/LoginRegister'
import { ChatPage } from './pages/ChatPage/ChatPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginRegister />
  },
  {
    path: 'chat',
    element: <ChatPage />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);