import React from 'react'
import Links from '../links/Links'
import './Navbar.style.scss'

const Navbar = () => {
  return (
    <div className='Navbar-container'>
      <div className='main-header'>
        Sandlot Games
      </div>
      <div className='navbar-links'>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar