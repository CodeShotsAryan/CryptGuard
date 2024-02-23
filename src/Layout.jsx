import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function Layout() {
  // const {isLogged , setIsLogged} = useContext(UserContext)
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
