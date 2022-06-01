import React, { Children, cloneElement, useEffect, useState } from 'react'
import { images } from '../../assets/images';
import { useSwipeable } from 'react-swipeable';
import Image from '../Image/Image';
import './Carousel.style.scss';

export const CarouselItem = ({ children, width }) => {
  //carousel item div
  return (
    <div className='carousel-item' style={{width: width}}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  //transform position index state management
  const [position, setPosition] = useState(0);

  //pause slide show state management
  const [paused, setPaused] = useState(false);

  const updatePosition = (newPosition) => {
    if (newPosition < 0) {
       newPosition = Children.count(children) - 1;
    } else if (newPosition >= Children.count(children)) {
      newPosition = 0;
    }

    setPosition(newPosition)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updatePosition(position + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })


  //handler for swipping effect
  const handlers = useSwipeable({
    onSwipedLeft: () => updatePosition(position + 1),
    onSwipedRight: () => updatePosition(position - 1),
  });
  return (
    <>
      <div {...handlers} className="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={()=> setPaused(false)}>
        <div
          className="inner"
          style={{ transform: `translateX(-${position * 100}%)` }}
        >
          {Children.map(children, (child, index) => {
            return cloneElement(child, { width: "100%" });
          })}
        </div>
        <div className="indicators">
          <Image
            onClick={() => updatePosition(position - 1)}
            src={images.LeftNav}
            className="button"
          />
          <Image
            onClick={() => updatePosition(position + 1)}
            src={images.RightNav}
            className="button"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel