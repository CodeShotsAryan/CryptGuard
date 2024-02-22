import React from 'react'

function Navbar() {
  return (
   <nav className='flex  justify-around h-16 items-center bg-slate-100'>
     <div className='logo'>
       <h1 className='text-logo-color font-bold cursor-pointer'>Your logo</h1>
     </div>
     <div className='menu-list'>
        <ul className='flex items-center gap-5 font-medium'>
          <a className='cursor-pointer'><li>Home</li></a>
          <a className='cursor-pointer'><li>About us</li></a>
          <a className='cursor-pointer'><li>Portfolio</li></a>
          <a className='cursor-pointer'><li>Info</li></a>
          <a className='cursor-pointer'><li>Contact us</li></a>
        </ul>
     </div>
   </nav>
  )
}

export default Navbar
