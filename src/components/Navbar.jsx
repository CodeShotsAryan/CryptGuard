import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [focusedLink, setFocusedLink] = useState(''); 

  useEffect(() => {
    const path = location.pathname;
    const link = path === '/' ? 'home' : path.substring(1);
    setFocusedLink(link);
  }, [location]);

  return (
    <nav className='flex justify-around h-16 items-center'>
      <div className='logo'>
        <NavLink to='/'>
          <img src={logo1} alt='Logo' className='h-20' />
        </NavLink>
      </div>
      <div className='menu-list'>
        <ul className='flex items-center gap-7 font-medium'>
          <li className={focusedLink === 'home' ? 'focused' : ''}>
            <NavLink to='/' className='cursor-pointer py-5'>Home</NavLink>
          </li>
          <li className={focusedLink === 'register' ? 'focused' : ''}>
            <NavLink to='/register' className='cursor-pointer py-5'>Register</NavLink>
          </li>
          <li className={focusedLink === 'login' ? 'focused' : ''}>
            <NavLink to='/login' className='cursor-pointer py-5'>Login</NavLink>
          </li>
          <li className={focusedLink === 'about' ? 'focused' : ''}>
            <NavLink to='/about' className='cursor-pointer py-5'>About us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
