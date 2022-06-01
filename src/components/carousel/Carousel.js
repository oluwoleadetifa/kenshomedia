import React, { Children, cloneElement, useState } from 'react'
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

  const updatePosition = (newPosition) => {
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition >= Children.count(children)) {
      newPosition = Children.count(children) - 1;
    }

    setPosition(newPosition)
  }
  return (
    <>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${position * 100}%)` }}
        >
          {Children.map(children, (child, index) => {
            return cloneElement(child, { width: "100%" });
          })}
        </div>
        <div className="indicators">
          <button onClick={() => updatePosition(position - 1)}>&lt;</button>
          <button onClick={() => updatePosition(position + 1)}>&gt;</button>
        </div>
      </div>
    </>
  );
}

export default Carousel