import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useSelector , useDispatch} from 'react-redux';
import { makeTrue, makeFalse } from './app/store';
function Layout() {
  const isLoggedIn = useSelector(state => state.navbarHandler.isLoggedIn)
  return (
     
    <div  >
    {
      isLoggedIn ? null : <Navbar />
    }
      <Outlet/> 
    </div>
  );
}

export default Layout;
