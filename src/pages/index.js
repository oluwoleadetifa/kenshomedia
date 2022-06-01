import React, { Fragment } from 'react';
import Navbar from '../components/navbar/Navbar';
import Main from '../containers/main';
import './index.style.scss';

// where all the pages are displayed
const Index = () => {
  return (
    <Fragment className='container'>
      <Navbar />
      <Main/>
    </Fragment>
  );
}

export default Index