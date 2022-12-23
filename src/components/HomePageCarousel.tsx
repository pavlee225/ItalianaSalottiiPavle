import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import "./HomePageCarousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../assets/test.jpg";
import img1 from "../assets/test1.jpg";
import img2 from "../assets/test2.jpg";
import img3 from "../assets/test3.jpg";
import img4 from "../assets/test4.jpg";
import img5 from "../assets/test5.jpg";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const content = [
  {
    image: img,
    alt: 'demo'
  },
  {
    image: img1,
    alt: 'demo'
  },
  {
    image: img2,
    alt: 'demo'
  },
  {
    image: img3,
    alt: 'demo'
  },
  {
    image: img4,
    alt: 'demo'
  },
  {
    image: img5,
    alt: 'demo'
  }
];

const HomePageCarousel = () => {
  return (
    <Swiper style={{ height: '100%' }} pagination={true} navigation={true} className="mySwiper" autoHeight>
      {content.map((slide, index) => {
        return (
          <SwiperSlide style={{ height: '100%' }} key={index}>
            <img src={slide.image} style={{ objectFit: "cover" }} width="100%" height="100%" alt={slide.alt} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default HomePageCarousel;
