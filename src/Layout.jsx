import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import userContext from './Context/userContext'
import { useContext } from 'react'
function Layout() {
  const {isLogged, setIsLogged} = useContext(userContext);

  return (
     
    <div  >
    {
      isLogged ? null : <Navbar />
    }
      <Outlet/> 
    </div>
  )
}

export default Layout