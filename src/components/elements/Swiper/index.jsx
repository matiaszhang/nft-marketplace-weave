import { useRef } from "react";
import { Swiper } from "swiper/react";

import "swiper/css";

const CustomSwiper = ({ slidesPerView = 1, spaceBetween = 0, slidesPerGroup = 1, loop = false, children }) => {
  const swiperRef = useRef();

  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={0}
        loop={loop}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {children}
      </Swiper>
      <button
        className="btn-prev w-20 h-20 z-20 border border-purple-500 top-1/2 absolute bg-opacity-30 sm:left-5 bg-[#FFFFFF] text-white p-2 rounded-full shadow-lg hover:cursor-pointer  -translate-y-1/2"
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        className="btn-next z-20 w-20 h-20 border border-purple-500 top-1/2 absolute bg-opacity-30 sm:right-5 bg-[#FFFFFF] text-white p-2 rounded-full shadow-lg hover:cursor-pointer -translate-y-1/2"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        &gt;
      </button>
    </>
  );
};

export default CustomSwiper;
