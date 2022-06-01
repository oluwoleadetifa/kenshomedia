import React from 'react'
import Links from '../links/Links'
import './Navbar.style.scss'
import Image from '../Image/Image';
import { images } from '../../assets/images';

const Navbar = () => {
  return (
    <div className="Navbar-container">
      <div className="main-header">Sandlot Games</div>
      <div className="navbar-links">
        <Links name={"section"}/>
        <Links name={"section"}/>
        <Links name={"section"} />
        <Links name={"Login"}/>
        <Image src={images.Search} className='search-icon'/>
      </div>
    </div>
  );
}

export default Navbar