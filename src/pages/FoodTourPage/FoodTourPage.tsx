import React from 'react';
import './styles/FoodTourPage.css';
import { Carousel } from 'flowbite-react'
import firstImage from './img/Tour 2.png';
import twoImage from './img/portada tour.png';
import Img from "react-cool-img";
export interface FoodTourPageInterface {}

const Carrousel = () => {
  return (
    <>
    <div className='carrousel-custom'>
      <div className="h-80 sm:h-80 xl:h-full 2xl:h-full">
        <Carousel slideInterval={5000}>
          <Img
            cache={true}
            className='carrousel-img'
            src={firstImage}
            lazy={true}
            alt="..."
          />
          <Img
            cache={true}
            className='carrousel-img center-block'
            src={twoImage}
            lazy={true}
            alt="..."
          />
        </Carousel>
      </div>

    </div>
    </>
  )
}


export default Carrousel