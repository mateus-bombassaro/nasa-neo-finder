import React from 'react';
import ReactDOM from 'react-dom/client';;
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './routes/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
