
import "./product.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import ProductCard from "./ProductCard";

export default function ProductSlider(props) {
  const { data } = { ...props };
  return (
    <>
      <Swiper slidesPerView={3} loop={true} className="mySwiper">
        {data &&
          data.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ProductCard
                  title={item.title}
                  desc={item.description}
                  price={item.price}
                  type={item.type}
                  no_of_bathroom={item.no_of_bathroom}
                  no_of_bedroom={item.no_of_bedroom}
                  id={item._id}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
