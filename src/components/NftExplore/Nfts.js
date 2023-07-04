import NftProps from "./NftProps";
import nftDummy from "../../utils/Nft_Dummy_Data";
import { useState, useEffect } from "react";

export default function Nfts() {
  const [startInd, setStartInd] = useState(0);
  const [itemsPerPages, setItemsPerPages] = useState(3);

  const handlePrevButtonClicks = () => {
    if (startInd > 0) {
      setStartInd(startInd - 1);
    }
  };

  const handleNextButtonClicks = () => {
    if (startInd + itemsPerPages < nftDummy.length) {
      setStartInd(startInd + 1);
    }
  };

  const showPrevButton = startInd > 0;
  const showNextButton = startInd + itemsPerPages < nftDummy.length;

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPages = window.innerWidth >= 640 ? 3 : 1;
      setItemsPerPages(newItemsPerPages);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nft = nftDummy
    .slice(startInd, startInd + itemsPerPages)
    .map((items) => (
      <NftProps
        img={items.imgSrc}
        title={items.title}
        active={items.active}
        content={items.content}
        deadline={items.deadline}
        currentBid={items.currentBid}
      />
    ));

  return (
    <div>
      <div className="bg-[#130B2B]">
        <div className="container px-4 mx-auto">
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
          {/* nft starts here */}

          <div className="inset-0">
            {showPrevButton && (
              <button
                className="btn-prev z-20 mt-[140px] md:mt-[250px] 
                absolute bg-opacity-70 left-7 w-10 
                h-10 sm:left-5 bg-[#D9DDDC] text-white p-2 
                rounded-full shadow-lg 
                hover:cursor-pointer"
                onClick={handlePrevButtonClicks}
              >
                &lt;
              </button>
            )}

            {showNextButton && (
              <button
                className="btn-next z-20 mt-[140px] sm:mt-[250px] 
                absolute bg-opacity-70 right-7 w-10 h-10 
                sm:right-5 bg-[#D9DDDC] p-2 text-white 
                shadow-lg rounded-full
                 hover:cursor-pointer"
                onClick={handleNextButtonClicks}
              >
                &gt;
              </button>
            )}
          </div>

          <div
            className=" sm:px-4 flex 
        justify-center  "
          >
            {nft}
          </div>
        </div>
      </div>
    </div>
  );
}
