import React from 'react';
import Layout from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainRoutes from './Routes/MainRoutes';

import {
  RouterProvider,
} from "react-router-dom";


const App = () => {
  
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <RouterProvider router={MainRoutes} />
      <ToastContainer position='top-right' autoClose="1000"/>
    </>
  )
}

export default App

// npm run dev