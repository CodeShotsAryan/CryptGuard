import React, { useState , useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
function Layout() {
  const [login , setLogin] = useState(false)
  // const {isLogged , setIsLogged} = useContext(UserContext)
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