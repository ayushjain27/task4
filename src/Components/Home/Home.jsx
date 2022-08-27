import React from 'react';
import CarouselImage from '../Carousel/CarouselImage';
import Intership from '../Intership/Intership';
import IntershipCourses from '../IntershipCourses/IntershipCourses';

const Home = () => {
  return (
    <>
      <div className="container">
        <CarouselImage />
      </div>
        <Intership />
        <IntershipCourses />
    </>
  )
}

export default Home
