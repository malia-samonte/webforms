import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AdminPortal } from './pages/AdminPortal';
import { CreateLogin } from './pages/CreateLogin';
import { ManageAccess } from './pages/ManageAccess';
import { ManageUsers } from './pages/ManageUsers';
import { CreateRole } from './pages/CreateRole';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminPortal/>,
  },
  {
    path: "CreateLogin",
    element: <CreateLogin/>,
  },
  {
    path: "ManageAccess",
    element: <ManageAccess/>,
  },
  {
    path: "ManageUsers",
    element: <ManageUsers/>,
  },
  {
    path: "CreateRole",
    element: <CreateRole/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} /> 

);