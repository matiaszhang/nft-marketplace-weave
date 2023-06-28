import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      {/* first section starts */}
      <div
        className="sm:grid grid-cols-2 md:px-10
        z-10"
      >
        <div className="container py-4 px-8 mx-auto">
          <h1
            className="text-slate-900  font-bold  
        text-[28px] sm:text-[48px]"
          >
            Unlock Your Artistic Potential <br />
            in the Decentralized <br />
            <span className="border-double border-4 rounded-lg border-fuchsia-900">
              NFT
            </span>{" "}
            Universe
          </h1>
          <p className="py-[36px] text-slate-900 text-[14px] sm:text-[24px] font-normal leading-loose">
            Showcase, sell and trade unique digital assets <br /> with
            transparency and security.{" "}
          </p>
          <div className="space-x-6">
            <button
              className="text-white text-sm font-semibold 
          bg-gradient-to-br from-pink-700 to-violet-950 
           hover:bg-pink-900 py-2 px-2 sm:py-2 sm:px-4 rounded-lg"
            >
              Join WeaveNFT
            </button>
            <button
              className="text-slate-900 text-sm font-semibold 
           border-2  border-fuchsia-900 py-2 px-4 rounded-lg"
            >
              Learn More
            </button>
          </div>
          <div className=" flex flex-row py-[36px] gap-10">
            <div className="w-[168px] h-[95.52px] border-r-[1px] border-fuchsia-900">
              <span className="text-slate-900 text-[28px] sm:text-[38px] font-bold leading-10">
                169k
                <br />
              </span>
              <span className="text-slate-900 px-4 text-[15px] sm:text-[20px] font-normal leading-7">
                Users
              </span>
            </div>

            <div className="w-[168px] h-[95.52px] border-r-[1px] border-fuchsia-900">
              <span className="text-slate-900 text-[28px] sm:text-[38px] font-bold leading-10">
                22k
                <br />
              </span>
              <span className="text-slate-900 px-2 text-[15px] sm:text-[20px] font-normal leading-7">
                Artist{" "}
              </span>
            </div>

            <div className="w-[168px] h-[95.52px] border-r-[1px] border-fuchsia-900">
              <span className="text-slate-900 text-[28px] sm:text-[38px] font-bold leading-10">
                40k
                <br />
              </span>
              <span className="text-slate-900  text-[15px] sm:text-[20px] font-normal leading-7">
                Collections
              </span>
            </div>
          </div>
        </div>

        {/* images design */}
        <div className=" sm:px-10 flex justify-self-end md:pt-6">
          <div className="container mx-auto py-4  rounded-lg w-[300px] h-[455px] sm:w-[423px] sm:h-[555px]">
            <div className="relative">
              <div className="z-20 absolute inset-0 w-[70px] h-[70px] sm:w-[157px] sm:h-[157px]">
                <img
                  src="./images/Group 3413 (1).png"
                  className="-ml-[40px] md:-ml-[100px] mt-[160px] md:mt-[200px]"
                  alt="back star"
                />
              </div>
              <div className="w-[280px] h-[249px] sm:w-[423px] sm:h-[369px]">
                <img src="./images/Frame 13.png" alt="trending NFT" />
              </div>
            </div>
            <div
              className="w-[280px] h-[156px] sm:w-[423px] sm:h-[186px] 
              bg-gradient-to-r
           from-fuchsia-900 to-slate-950 
          rounded backdrop-blur-[100px] bg-opacity-50"
            >
              <div>
                <div
                  className="flex justify-between px-[24px]
               pt-[26px] pb-[20px] "
                >
                  <div>
                    <p
                      className=" text-white text-[16px]
             sm:text-[20px] font-normal leading-7"
                    >
                      Ends in
                    </p>
                    <span
                      className="text-white text-[12px] 
              sm:text-[16px] font-semibold leading-snug"
                    >
                      04:40:56
                    </span>
                  </div>

                  <div>
                    <p
                      className=" text-white text-[16px]
             sm:text-[20px] font-normal leading-7"
                    >
                      Current bid
                    </p>
                    <span
                      className="text-white text-[12px] 
              sm:text-[16px] font-semibold leading-snug"
                    >
                      0.32ETH
                    </span>
                  </div>
                </div>
                <div className="flex justify-center sm:pt-[10px]">
                  <button
                    className="w-[250px] sm:w-[380px] h-[45px] sm:h-[60px] text-white  text-[16px] sm:text-[20px] 
                  bg-gradient-to-br from-pink-700 to-violet-950
                font-semibold leading-7  rounded-lg"
                  >
                    Place bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section starts */}
      <div
        className="bg-gradient-to-r from-fuchsia-900
         to-slate-950 -z-40"
      >
        <h2 className="text-white text-center text-[22px] sm:text-[34px] font-bold leading-10">
          Why WeaveNFT Marketplace?
        </h2>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
