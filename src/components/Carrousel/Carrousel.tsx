import React from 'react'
import { Carousel } from 'flowbite-react'
import firstImage from './img/Rectangle97.png';
import twoImage from './img/DSCF6610.jpg';
import threeImage from './img/DSCF6639.jpg';
import fourImage from './img/DSCF6749.jpg';
import './styles/main.css'

const Carrousel = () => {
  return (
    <>
    <div className='carrousel-custom'>
      <div className="h-80 sm:h-80 xl:h-full 2xl:h-full">
        <Carousel slideInterval={5000}>
          <img
            className='carrousel-img'
            src={firstImage}
            alt="..."
          />
          <img
            className='carrousel-img center-block'
            src={twoImage}
            alt="..."
          />
          <img
            className='carrousel-img'
            src={threeImage}
            alt="..."
          />
          <img
            className='carrousel-img'
            src={fourImage}
            alt="..."
          />
        </Carousel>
      </div>

    </div>
    </>
  )
}

export default Carrousel