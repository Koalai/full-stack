import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import { ProductInfo } from './pages/ProductInfo.jsx';

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
      {
        path: 'productInfo/:productId',
        element: <ProductInfo />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
