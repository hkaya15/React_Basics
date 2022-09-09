import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <NavLink to='/' className={({ isActive }) => isActive ? 'aktif' : ''}>Anasayfa</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
      </nav>
      <Outlet />
    </>

  )
}

export default Layout