// import React, { useRef, useState } from "react";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./style.css";

// import required modules
import ProductCard from "./Review.jsx";

export default function ReviewSlider(props) {

  const { data } = { ...props };

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        {data &&
          data.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ProductCard
                  title={item.title}
                  desc={item.desc}
                  name={item.clientsInfo.name}
                  country={item.clientsInfo.country}
                  city={item.clientsInfo.city}
                />{" "}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
