import React from 'react'
import { images } from '../assets/images'
import Carousel, { CarouselItem } from '../components/carousel/Carousel'
import Image from '../components/Image/Image'
import '../components/main/Main.style.scss'

const Main = () => {
  return (
    <>
      <div className="main-body">
        <Carousel>
          <CarouselItem>
            <Image src={images.Advert} className={"sliding-images"} />
          </CarouselItem>
          <CarouselItem>
            <Image src={images.Advert} className={"sliding-images"} />
          </CarouselItem>
          <CarouselItem>
            <Image src={images.Advert} className={"sliding-images"} />
          </CarouselItem>
          <CarouselItem>
            <Image src={images.Advert} className={"sliding-images"} />
          </CarouselItem>
        </Carousel>
        <div className="ad-object">
          <div className="card">
            <div className="text">Slot of the week</div>
            <Image src={images.Game} className="card-image" />
            <div className="star-rating">
              <Image src={images.FullStar} className="star" />
              <Image src={images.FullStar} className="star" />
              <Image src={images.FullStar} className="star" />
              <Image src={images.FullStar} className="star" />
              <Image src={images.HalfStar} className="star" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main