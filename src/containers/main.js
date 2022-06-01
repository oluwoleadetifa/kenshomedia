import React from 'react'
import { images } from '../assets/images'
import Image from '../components/Image/Image'

const Main = () => {
  return (
    <div className='main-body'>
      <div className='carousel'>
        <Image src={images.Advert}/>
      </div>
      <div className='ad-object'>

      </div>
    </div>
  )
}

export default Main