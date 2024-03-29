import React from 'react'
import Links from '../../components/links/Links'
import './Navbar.style.scss'
import Image from '../../components/Image/Image';
import { images } from '../../assets/images';

const Navbar = () => {
  return (
    //Entire Navigation bar
    <div className="Navbar-container">
      <div className="main-header">Sandlot Games</div>
      <div className="navbar-links">
        <Links name={"section"} dropdown/>
        <Links name={"section"} dropdown/>
        <Links name={"section"} />
        <Links name={"Log in"}/>
        <Image src={images.Search} className='search-icon'/>
      </div>
    </div>
  );
}

export default Navbar