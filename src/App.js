import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Autoplay } from 'swiper/modules';

import Image1 from './assets/project/sochi.jpeg';
import Image2 from './assets/project/sochi.jpeg';
import Image3 from './assets/project/sochi.jpeg';
import Image4 from './assets/project/sochi.jpeg';

const images = [
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
  {
    image: Image4,
  },
];

export default function App() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Autoplay]}
        autoplay={{ delay: 1000 }}
        loop={true}
        className="mySwiper slider"
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.image} alt="Pic" className="slider-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}