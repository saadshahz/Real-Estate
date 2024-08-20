// import React, { useRef, useState } from "react";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./style.css";

// import required modules
import ProductCard from "./ProductCard";

export default function ProductSlider(props) {

  const { data } = { ...props };

  return (
    <>
      <Swiper
        slidesPerView={3}
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
                  feature={item.features}
                  price={item.price}
                  id={item.id}
                />{" "}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
