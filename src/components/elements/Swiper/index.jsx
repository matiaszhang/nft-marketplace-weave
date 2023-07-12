import { useRef } from "react";
import { Swiper } from "swiper/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        className="btn-prev absolute top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 z-20 border border-purple-500 left-5 p-2
          bg-opacity-30 bg-[#FFFFFF] text-white rounded-full shadow-lg backdrop-blur-md hover:cursor-pointer"
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </button>
      <button
        className="btn-next absolute top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 z-20  border border-purple-500 right-5 p-2
          bg-opacity-30 bg-[#FFFFFF] text-white rounded-full shadow-lg backdrop-blur-md hover:cursor-pointer"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
      </button>
    </>
  );
};

export default CustomSwiper;
