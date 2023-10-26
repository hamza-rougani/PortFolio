import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideImage from "../Loading/SlideImage"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App(e) {
  const image = e.images
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {image && image.length>0 ? image.map((img,index)=><SwiperSlide key={index}><img src={typeof(img)=="string"?`${import.meta.env.VITE_API_BASE_URL}/${img}`:img._id?`${import.meta.env.VITE_API_BASE_URL}/${img.NewsProjectImage?img.NewsProjectImage:img.NewsPostImage}`:URL.createObjectURL(img)}alt="" /></SwiperSlide>):""}
      </Swiper>
    </>
  );
}