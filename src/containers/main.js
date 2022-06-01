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
        <section className="ad-object">
          <div className="card">
            <div className="text">Slot of the week</div>
            <Image src={images.Game} className="card-image" />
            <div className='blur'></div>
            <div className="star-rating">
              <Image src={images.FullStar} className="star" />
              <Image src={images.FullStar} className="star" />
              <Image src={images.FullStar} className="star" />
              <Image src={images.FullStar} className="star" />
              <Image src={images.HalfStar} className="star" />
              <span className="rating-number">4.7</span>
            </div>
            <div className="description">
              <div className='heading'>Fowl play gold</div>
              <div>
                Fowl Play Gold by WMG is a fun 5-reel video slot that promises
                to turn your stakes into a...
              </div>
              <button>Play for free</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main