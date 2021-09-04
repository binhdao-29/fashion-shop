import React, { useState } from "react";

import img1 from '../assets/images/banners/banner1.jpg';
import img2 from '../assets/images/banners/banner3.jpg';
import img3 from '../assets/images/banners/banner2.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs, EffectFade, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs, EffectFade, Autoplay]);


const slideData = [
  {
    title : "New arrivals",
    subtitle: "Women Collection 2021",
    img:img1
  },
  {
    title: "Jackets & Coats",
    subtitle : "Men New-Season",
    img:img2
  },
  {
    title : "New season",
    subtitle: "Men Collection 2021",
    img:img3
  }
];

export default function HeroSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="hero-slide">
      <Swiper
        loop={true}
        effect={'fade'} 
        autoplay={{
          delay: 3500,
        }}
        fadeEffect={{
          crossFade: true
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="heroSlider"
      >
        {
          slideData.map((item, index) => (
            <SwiperSlide  key={index}>
              <div className="hero-wrapper" style={{backgroundImage: `url(${item.img})`}}>
                <div className="subtitle">{item.subtitle}</div>
                <h2 className="title">{item.title}</h2>
                <a href="/" className="hero-btn cb-btn">Shop now</a>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        className="hero-thumbs"
      >
        {
          slideData.map((item, index) => (
            <SwiperSlide  key={index}>
              <div className="thumb-wrapper" style={{backgroundImage: `url(${item.img})`}}>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}