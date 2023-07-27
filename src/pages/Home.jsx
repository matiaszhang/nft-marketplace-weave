import Details from "../components/DetailsWeave";
import data from "../utils/data";
import Nfts from "../components/NftExplore/Nfts";
import { Link } from "react-router-dom";
import CustomSwiper from "../components/elements/Swiper";
import { SwiperSlide } from "swiper/react";
import { Button } from "components/elements";
import WalletConnect from "../Blockchain_Service/connect_wallet";
import Subscriber from "../components/elements/Subcribe";

function Home() {


  return (
    <div>
      {/* first section starts */}
      <div className=" bg-clip-content bg-cover " style={{ backgroundImage: 'url( "images/HomeBg.png")' }}>
        <div className="sm:grid grid-cols-2 md:px-10 py-20 z-10">
          <div className="container flex flex-col gap-9 px-8 mx-auto">
            <h1 className="text-slate-900  font-bold text-[28px] sm:text-[58px]/[76px]">
              Unlock Your Artistic Potential <br />
              in the Decentralized <br />
              <span className="border-double border-4 rounded-lg border-fuchsia-900">NFT</span> Universe
            </h1>
            <p className="text-slate-900 text-[14px] sm:text-[24px] font-normal leading-loose">
              Showcase, sell and trade unique digital assets <br /> with transparency and security.{" "}
            </p>
            <div className="flex flex-row space-x-6">
              <WalletConnect > Join WeaveNft</WalletConnect>
              <Link to="/about">

                <Button
                  
                  className="border 
                  mt-6
                  
                  border-[#3B1578] 
                  text-[#3B1578]
                   hover:text-[#3B1578] 
                   font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex flex-row gap-10 items-center">
              <div className="flex flex-col justify-center w-[168px] h-[95.52px] border-r-[1px] border-fuchsia-900">
                <span className="text-slate-900 text-[28px] sm:text-[38px] font-bold leading-10">
                  169k
                  <br />
                </span>
                <span className="text-slate-900 px-4 text-[15px] sm:text-[20px] font-normal leading-7">Users</span>
              </div>

              <div className="flex flex-col justify-center w-[168px] h-[95.52px] border-r-[1px] border-fuchsia-900">
                <span className="text-slate-900 text-[28px] sm:text-[38px] font-bold leading-10">
                  22k
                  <br />
                </span>
                <span className="text-slate-900 px-2 text-[15px] sm:text-[20px] font-normal leading-7">Artist </span>
              </div>

              <div className="flex flex-col justify-center w-[168px] h-[95.52px] border-r-[1px] border-fuchsia-900">
                <span className="text-slate-900 text-[28px] sm:text-[38px] font-bold leading-10">
                  40k
                  <br />
                </span>
                <span className="text-slate-900  text-[15px] sm:text-[20px] font-normal leading-7">Collections</span>
              </div>
            </div>
          </div>

          {/* images design */}
          <div className="cursor-pointer sm:px-10 flex justify-self-end md:pt-6">
            <div className="container mx-auto py-4  rounded-lg w-[300px] h-[455px] sm:w-[423px] sm:h-[555px]">
              <div className="relative">
                <div className="z-20 absolute inset-0 w-[70px] h-[70px] sm:w-[157px] sm:h-[157px]">
                  <img
                    src="./images/Group 3413 (1).png"
                    className="-ml-[40px] md:-ml-[100px] mt-[160px] md:mt-[200px]"
                    alt="back star"
                  />
                </div>
                <div className=" w-[280px] h-[249px] sm:w-[423px] sm:h-[369px] border-2 border-white border-solid rounded">
                  <img src="./images/Frame 13.png" alt="trending NFT" />
                </div>
              </div>
              <div className="border-2 border-white border-solid w-[280px] h-[156px] sm:w-[423px] sm:h-[186px] bg-gradient-to-r from-fuchsia-900 to-slate-950 rounded backdrop-blur-[100px] bg-opacity-50">
                <div>
                  <div className="flex justify-between px-[24px] pt-[26px] pb-[20px] ">
                    <div>
                      <p className="text-white text-[16px] sm:text-[20px] font-normal leading-7">Ends in</p>
                      <span className="text-white text-[12px] sm:text-[16px] font-semibold leading-snug">04:40:56</span>
                    </div>

                    <div>
                      <p className=" text-white text-[16px] sm:text-[20px] font-normal leading-7">Current bid</p>
                      <span className="text-white text-[12px] sm:text-[16px] font-semibold leading-snug">0.32ETH</span>
                    </div>
                  </div>
                  <div className="flex justify-center sm:pt-[10px]">
                    <Button className="w-[250px] sm:w-[380px] justify-center" variant="primary">
                      Place Bid
                    </Button>
                    {/* <button
                      className="w-[250px] sm:w-[380px] h-[45px] sm:h-[60px] text-white  text-[16px] sm:text-[20px] 
                  bg-gradient-to-br from-pink-700 to-violet-950
                font-semibold leading-7  rounded-lg"
                    >
                      Place bid
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section starts why */}
      <div className="bg-[#130B2B] -z-40 py-[100px]">
        <h2 className="text-white pt-[100px] text-center text-[22px] sm:text-[34px] font-bold leading-10">
          Why WeaveNFT Marketplace?
        </h2>
        <div className="container relative px-8 mx-auto">
          <CustomSwiper slidesPerView={3} slidesPerGroup={1} spaceBetween={1} loop={true}>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Details img={item.imgSrc} title={item.title} content={item.content} />
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </div>

      {/** Third section starts */}
      <div
        className=" bg-gradient-to-r from-fuchsia-900
         to-slate-950 pb-[100px] "
      >
        <div className="px-5">
          <h2 className="pt-[100px] text-white text-center text-[28px] sm:text-[40px] font-bold leading-10">
            Join WeaveNFT Marketplace today{" "}
          </h2>
          <p className="pb-[32px] pt-[26px] text-center text-white text-opacity-60 text-[17px] font-normal leading-7">
            Become part of a thriving community of artists, collectors, and enthusiasts. <br /> Experience the future of
            digital ownership and immerse yourself in the world <br /> of unique and valuable NFTs.
          </p>
          <div className="flex justify-center">
            < WalletConnect>Join WeaveNft</WalletConnect>
          </div>
        </div>
      </div>

      {/**Fourth section */}
      <div className="bg-[#130B2B] pb-[32px] pt-[80px]">
        <h2 className=" text-center text-gray-50 text-[28px] sm:text-[40px] font-bold leading-10">Top seller</h2>
        <p className="pt-[26px] text-center text-white text-opacity-60 text-[17px] font-normal leading-7">
          We present to you the best sellers of the month
        </p>
      </div>

      {/**Fifth  section*/}
      <div
        className=" bg-gradient-to-r from-fuchsia-900
         to-slate-950 "
      >
        <div
          className="container px-8 mx-auto 
        grid grid-rows-5 grid-cols-3 pb-[30px] "
        >
          {/** seller 1 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                01
              </p>
            </div>

            <div className="flex pt-[35px] pl-[12px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (2).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">McCoy</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">899.03 ETH</p>
              </div>
            </div>
          </div>
          {/** seller 2 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                02
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (3).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Webb</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">779.58 ETH</p>
              </div>
            </div>
          </div>
          {/** seller 3 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                03
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (4).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Miles</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">739.65 ETH</p>
              </div>
            </div>
          </div>
          {/** seller 4 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                04
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (5).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Wade Warren</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">710.68 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 5 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                05
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (6).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Devon Lane</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">630.44 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 6 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                06
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (7).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Marvin McKinney</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">601.13 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 7 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                07
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (8).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Fisher</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">589.99 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 8 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                08
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (9).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Kristin Watson</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">576.28 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 9 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                09
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (10).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Bessie</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">475.22 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 10 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                10
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (11).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Ronald Richards</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">450.54 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 11 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                11
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (12).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Cody</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">351.02 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 12 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                12
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (13).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Cooper</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">328.85 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 13 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                13
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (14).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Larry_39</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">293.01 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 14 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                14
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (15).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Savannah</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">219.78 ETH</p>
              </div>
            </div>
          </div>

          {/** seller 15 */}
          <div className="flex cursor-pointer">
            <div className="">
              <p className=" text-white text-[9px] sm:text-[19px] pt-[40px] sm:pt-[50px] font-normal leading-loose">
                15
              </p>
            </div>

            <div className="flex pt-[35px] pl-[14px] sm:pl-[16px]">
              <div className=" sm:pt-[10px] w-[22px] sm:w-[50px]">
                <img src="./images/Ellipse 8 (16).png" alt="seller" />
              </div>
              <div className="pl-[16px]">
                <h3 className="text-gray-50 text-[9px] sm:text-[19px] font-bold sm:leading-loose">Nguyen</h3>
                <p className="text-gray-50 text-[6px] sm:text-[15px] font-normal sm:leading-7">105.55 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Sixth section, NFT Section */}

      <Nfts />

      {/**Seventh section */}
      <div
        className="bg-gradient-to-r from-fuchsia-900
         to-slate-950 "
      >
        <Subscriber />
      </div>

      {/** Eight section */}
      <div className="bg-[#130B2B]">
        <div className="py-[100px] container mx-auto px-8">
          <h2 className="text-gray-50  text-center text-[23px] sm:text-[44px] font-bold leading-10">Our Partners</h2>
          <p className="text-gray-50 text-center text-[13px] sm:text-[20px] py-[22px] font-normal leading-7">
            Meet our well renowned and regonised partners
          </p>
          <div className="flex justify-center align-center space-x-4">
            <div>
              <img src="./images/Frame 62.png" alt="lit protocol" />
            </div>
            <div>
              <img src="./images/Frame 63.png" alt="weaveDb" />
            </div>
            <div>
              <img src="./images/Frame 65.png" alt="fleek" />
            </div>
            <div>
              <img src="./images/Frame 626897 (1).png" alt="arweave" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
