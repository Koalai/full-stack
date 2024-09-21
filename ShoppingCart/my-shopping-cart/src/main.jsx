import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use App as the layout wrapper
    children: [
      {
        index: true, // This means "path: '/'" for the Home component
        element: <Home />,
      },
      {
        path: 'shop', // Avoid adding "/" at the beginning
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
