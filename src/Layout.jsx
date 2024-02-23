import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function Layout() {
  const [isLogin , setIsLogin]= useState(true)
  return (
    <div>
      {isLogin ? <Navbar /> :  null}
      <Outlet/> 
    </div>
  )
}

export default Layout