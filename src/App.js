import React, {useState} from "react"; 
import './App.css';
import { AdminPortal } from "./AdminPortal";
import { UserLogin } from './UserLogin';
import { AdminLogin } from "./AdminLogin";
import {CreateLogin} from "./CreateLogin";


function App() {
  return (
    <AdminPortal/>
  );
}

export default App;