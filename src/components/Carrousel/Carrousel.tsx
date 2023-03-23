import React from 'react'
import { Carousel } from 'flowbite-react'
import firstImage from './img/portada.webp';
import twoImage from './img/dscf6610.webp';
import threeImage from './img/dscf6639.webp';
import fourImage from './img/dscf6749.webp';
import Img from "react-cool-img";

import './styles/main.css'

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
          <Img
            cache={true}
            className='carrousel-img'
            src={threeImage}
            lazy={true}
            alt="..."
          />
          <Img
            cache={true}
            className='carrousel-img'
            src={fourImage}
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