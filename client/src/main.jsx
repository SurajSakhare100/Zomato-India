import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import App from './App';
import LandingPage from './pages/LandingPage';
import UpdatePassword from './pages/UpdatePassword';
import Restaurant from '../src/pages/RestaurantPage';
import Dish from '../src/pages/DishPage';
import Adminpage from './pages/Adminpage';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/restaurants/:id',
        element: <Restaurant />,
      },
      {
        path: '/dish/:id',
        element: <Dish />,
      },
      {
        path: '/updatepassword',
        element: <UpdatePassword />,
      },
      {
        path: "/admin",
        element: <Adminpage />

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
