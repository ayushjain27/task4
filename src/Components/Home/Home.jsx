import React from 'react';
import CarouselImage from '../Carousel/CarouselImage';
import Intership from '../Intership/Intership';
import IntershipCourses from '../IntershipCourses/IntershipCourses';
import Selection from '../Selection/Selection';

const Home = () => {
  return (
    <>
      <div className="container">
        <CarouselImage />
      </div>
        <Intership />
        <Selection />
        <IntershipCourses />
    </>
  )
}

export default Home
