import "./Reviews.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import ProductCard from "./Review.jsx";

export default function ReviewSlider(props) {

  const { data } = { ...props };
  console.log(data);
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
                <ProductCard
                  title={item.author}
                  desc={item.description}
                  name={item.author}
                  rating= {item.rating}
                  country={item.country}
                  city={item.city}
                />{" "}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
