// import React, { useRef, useState } from "react";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./style.css";

// import required modules
import Blogs from "./Blog.jsx";

export default function BlogSlider(props) {

  const { data } = { ...props };

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        loop={true}
        className="mySwiper"
      >
        {data &&
          data.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Blogs
                  title={item.title}
                  desc={item.desc}
                />{" "}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
