import { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "../elements/Swiper";
import NftProps from "./NftProps";
import nftDummy from "../../utils/Nft_Dummy_Data";

import "swiper/css";

export default function Nfts() {
  const [itemsPerPages, setItemsPerPages] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = window.innerWidth >= 640 ? 3 : 1;
      setItemsPerPages(newItemsPerPage);
    };

    handleResize();

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#130B2B]">
        <div className="container relative px-4 mx-auto">
          <div className="pb-[30px]">
            <h1 className="text-center text-white pt-[70px] text-[20px] sm:text-[44px] font-bold leading-10">
              Trendsetters' Paradise
            </h1>
            <div className="text-white pt-[17px] flex justify-between">
              <h3 className="text-white text-[16px] sm:text-[28px] font-bold leading-9">
                Meticulously curated NFT collections
              </h3>
              <p className="text-white text-opacity-80 text-[8px] sm:text-[20px] font-semibold leading-9">
                View all collections
              </p>
            </div>
          </div>

          <CustomSwiper slidesPerView={3} slidesPerGroup={1} spaceBetween={1} loop={true}>
            {nftDummy.map((items) => (
              <SwiperSlide key={items.id}>
                <NftProps
                  key={items.id}
                  img={items.imgSrc}
                  title={items.title}
                  active={items.active}
                  content={items.content}
                  deadline={items.deadline}
                  currentBid={items.currentBid}
                />
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </div>
  );
}
