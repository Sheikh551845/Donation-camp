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
import Home from './pages/Home';
import Details from './pages/Details';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
      {
        path: "/Statistics",
        element:<Statistics></Statistics>, 
      },
      {
        path: "/Donation",
        element:<Donation></Donation>, 
      },
      {
        path: "/Home",
        element: <Home></Home>,
        loader: ()=>fetch("/data.json")
      },
      {
        path: "/Details/:id",
        element:<Details></Details>, 
        loader: ()=>fetch("/data.json")
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
