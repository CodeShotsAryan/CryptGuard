import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard/Dashboard';
function Layout() {
  // const [login , setLogin] = useState(false)
  const auth = useSelector(state=>state.User.status);
  return auth? (
    <Dashboard/>
  ) : (
    <>
    <Navbar/>
    <Dashboard/>
    </>
  )
}

export default Layout;
