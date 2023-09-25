import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './pages/layout';
import Statistics from './pages/Statistics';
import Donation from './pages/Donation';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children : [
      {
        path: "/Statistics",
        element:<Statistics></Statistics>, 
      },
      {
        path: "/Donation",
        element:<Donation></Donation>, 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
