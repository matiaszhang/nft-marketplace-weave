import { SwiperSlide } from "swiper/react";
import CustomSwiper from "../elements/Swiper";
import NftProps from "./NftProps";
import nftDummy from "../../utils/Nft_Dummy_Data";
import { Link } from 'react-router-dom';
import "swiper/css";
import NftCollection from "./Header/NftCollection";



export default function Nfts() {
  return (
    <div>
      <div className="bg-[#130B2B]">
        <div className="container px-4 mx-auto md:pt-6 pb-[60px] sm:pb-[120px]">
          <NftCollection />
          
          <div className="relative">
            <CustomSwiper slidesPerView={3} slidesPerGroup={1} spaceBetween={1} loop={true}>
              {nftDummy.map((nft) => (
                <SwiperSlide key={nft.id}>
                  <Link to={`/explore/nft/${nft.id}`}>
                  <NftProps
                    key={nft.id}
                    img={nft.imgSrc}
                    title={nft.title}
                    active={nft.active}
                    content={nft.content}
                    deadline={nft.deadline}
                    currentBid={nft.currentBid}
                  />
                  </Link>
                </SwiperSlide>
              ))}
            </CustomSwiper>
          </div>
        </div>
      </div>
    </div>
  );
}
