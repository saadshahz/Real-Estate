import { useEffect , useState } from "react";
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

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(2);
      } else if (width >= 768) {
        setSlidesPerView(2);
      } else if (width >= 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView(); // Set initial value
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
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
