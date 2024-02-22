import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
function Layout() {
  return (
    <div>
      <Navbar />
      <Hero/>
      {/* <Outlet /> */}
    </div>
  )
}

export default Layout
