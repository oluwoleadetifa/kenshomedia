import React, { Fragment } from 'react';
import Navbar from '../components/navbar/Navbar';
import './index.style.scss';

// where all the pages are displayed
const Index = () => {
  return (
    <Fragment className='container'>
      <Navbar />
      <div>index</div>
    </Fragment>
  );
}

export default Index