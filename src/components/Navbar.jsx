import React from 'react'
import './Navbar.css';
import Logo from '../assets/logo.png';
function Navbar() {
  return (
   <nav className='flex  justify-around h-16 items-center bg-slate-100'>
     <div className='logo'>
       {/* <h1 className='text-logo-color font-bold cursor-pointer'>Your logo</h1> */}
       <img src={Logo}/>
     </div>
     <div className='menu-list'>
        <ul className='flex items-center gap-7 font-medium'>
          <a className='cursor-pointer text-logo-color py-5'><li>Home</li></a>
          <a className='cursor-pointer hover:text-logo-color transition duration-75 py-5'><li>About us</li></a>
          <a className='cursor-pointer hover:text-logo-color transition duration-75 py-5'><li>Portfolio</li></a>
          <a className='cursor-pointer hover:text-logo-color transition duration-75 py-5'><li>Info</li></a>
          <a className='cursor-pointer hover:text-logo-color transition duration-75 py-5'><li>Contact us</li></a>
        </ul>
     </div>
   </nav>
  )
}

export default Navbar
