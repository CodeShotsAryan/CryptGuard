<<<<<<< HEAD
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
function Layout() {
  const [login , setLogin] = useState(false)
  return (
     
    <div  >
    {
      login ? null : <Navbar />
    }
      <Outlet/> 
=======
import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function Layout() {
  // const {isLogged , setIsLogged} = useContext(UserContext)
  return (
    <div>
      <Navbar />
      <Outlet />
>>>>>>> e64d8ddebb34ea022aa342284ed62da203ccdb34
    </div>
  );
}

export default Layout;
