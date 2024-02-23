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
    </div>
  )
}

export default Layout