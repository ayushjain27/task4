import React from "react";
import styles from './CarouselImage.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselImage = () => {
  return (
    <>
      <div className={`${styles.cardCarousel} card border-warning mt-3`}>
        <div className="card-body">
          <Carousel
            autoFocus={true}
            emulateTouch={true}
            infiniteLoop={true}
            showStatus={false}
            stopOnHover={true}
            showThumbs={false}
            autoPlay={true}
          >
            <div style={{height: '400px'}}>
              <img src="./Images/img-1.png" className="img-fluid h-100" alt="img-1" />
            </div>
            <div style={{height: '400px'}}>
              <img src="./Images/img-2.png" className="img-fluid h-100" alt="img-2" />
            </div>
            <div style={{height: '400px'}}>
              <img src="./Images/img-3.png" className="img-fluid h-100" alt="img-3" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselImage;
