// Navbar.js

import React from 'react';
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex  justify-around h-16 items-center'>
      <div className='logo'>
        <img src={Logo} alt='Logo' className='h-10' />
      </div>
      <div className='menu-list'>
        <ul className='flex items-center gap-7 font-medium'>
          <li>
            <NavLink to='/' className='cursor-pointer hover:text-logo-color transition duration-75 py-5'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/register' className='cursor-pointer hover:text-logo-color transition duration-75 py-5'>Register</NavLink>
          </li>
          <li>
            <NavLink to='/login' className='cursor-pointer hover:text-logo-color transition duration-75 py-5'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/about' className='cursor-pointer hover:text-logo-color transition duration-75 py-5'>About us</NavLink>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
