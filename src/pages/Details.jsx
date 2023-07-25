import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faEllipsis, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, Typography, Accordion, Card, ListItem } from "../components/elements";
import nftDummy from "../utils/Nft_Dummy_Data";

import NftProps from "../components/NftExplore/NftProps";
import { useContext } from "react";
import { NftContext } from "../store/NftContext";
import { useParams } from "react-router-dom";
import Modal from "../components/elements/Modal/modal";
import NFTCard from "components/nftCard";
import SDK from "weavedb-sdk";

const contractTxId = "U2OR33r74nnR1C3alI-JEpbRqSisAiKIEbXECgaJSyA";
const db = new SDK({ contractTxId: contractTxId });
await db.init();
const Nft = await db.get("nft_collection")

export const NFTDetails = () => {
  const { setModal, setShowModal, user } = useContext(NftContext);

  const openModal = () => {
    setModal("scale-100");
  };

  const closeAuction = () => {
    setShowModal("scale-100");
  };

  const { id } = useParams();
  const details = Nft.find((nft) => nft.tokenID === parseInt(id));

  if (!details) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col text-white p-[50px] xl:p-[70px] laptop:p-[100px] gap-[50px] xl:gap-[100px] h-full">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[50px] xl:gap-[100px] h-full">
        <div className="max-w-[523px] w-full h-[617px] lg:h-full bg-cover bg-center border-x-2 border-white-500 rounded-lg">
          <img src={details.uploadUrl} alt="just for tet" />
        </div>

        <div className="flex flex-col gap-6 max-w-[617px] w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-3 items-center">
              <img src="/images/logo_2.svg" alt="logo" />
              <p className="text-xl">Meticulously curated NFT collections</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} size="lg" className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-1">
            <Typography type="h5">{details.title}</Typography>
            <h5 className="text-lg">Description</h5>
          </div>
          <p className="text-md lg:text-lg laptop:text-xl text-justify font-['Open_Sans']">{details.content}</p>
          <Card className="flex flex-col">
            <div className="flex flex-col p-6 gap-5">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-1">
                  <Typography type="h7">Ends in</Typography>
                  <p className="text-base/[22px]">{details.totalShares}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography type="h7">Current floor bid</Typography>
                  <p className="text-base/[22px] text-end">{details.price}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={openModal} variant="primary" className="basis-full !flex justify-center h-[60px]">
                  Place bid
                </Button>

                <Button onClick={closeAuction} variant="primary" className="!flex justify-center basis-full h-[60px]">
                  Close Auction
                </Button>

                <Modal>
                  <Typography type="h7" className="text-center !text-slate-900 font-normal leading-snug">
                    Place Bid <span>{details.title}</span>
                  </Typography>
                  <p
                    className="text-black 
                  text-center"
                  >
                    Review the information below to ensure it is what you want
                  </p>

                  {/** placeing a bid */}
                  <div className="text-black pt-5  flex  justify-between">
                    <p className="text-slate-700 text-base font-semibold leading-snug">Current Bid</p>
                    <p className="text-slate-900 text-base font-semibold leading-snug">{details.price}</p>
                  </div>
                  <div className="text-black pt-2 pb-5  flex  justify-between">
                    <p className="text-slate-700 text-base font-semibold leading-snug">Minimum Markup</p>
                    <p className="text-slate-900 text-base font-semibold leading-snug">0 ETH</p>
                  </div>

                  <hr style={{ borderColor: "gray" }} />

                  <p className="py-3 flex justify-end  py-2 text-slate-900 text-base font-semibold leading-snug">
                    Available balance: <span>739.65 ETH</span>
                  </p>

                  {/**button */}
                  <Button  className="!flex justify-center">Bid Now</Button>
                </Modal>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[50px] xl:gap-[100px]">
        <Accordion className="max-w-[617px] w-full lg:max-w-[523px]" icon={faArrowTrendUp} title="Bidding Activities">
          {Array.apply("", Array(4)).map((_, idx) => (
            <ListItem
              key={idx}
              className="border-b"
              avatar="/images/Ellipse 8 (3).png"
              price={1.12}
              name="Miles"
              status="Bidded"
              time="Today 7:15am"
            />
          ))}
        </Accordion>
        <Accordion className="max-w-[617px] w-full" icon={faInfoCircle} title="Details">
          {Array.apply("", Array(6)).map((_, idx) => (
            <div
              key={idx}
              className={classNames("flex flex-row justify-between items-center p-6 text-white", {
                "border-b": idx !== 5,
              })}
            >
              <p className="text-lg sm:text-2xl text-[#F8F8FA]/[0.8]">Current Owner</p>
              <p className="text-lg sm:text-2xl font-semibold">McCopy</p>
            </div>
          ))}
        </Accordion>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-8">
          <Typography type="h6">More from this creator</Typography>
          <div className="grid grid-cols-1 lg:grid-cols-2 laptop:grid-cols-3 gap-5">
            {Nft.slice(0, 3).map((nft) => (
              <NftProps
                tokenID={nft.tokenID}
                uploadUrl={nft.uploadUrl}
                title={nft.title}
                description={nft.description}
                totalShares={nft.totalShares}
                price={nft.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const detailsLoader = async () => {
  try {
    console.log("Initializing the database...");
    await db.init();
    console.log("Fetching data from the database...");
    const res = await db.get("nft_collection");
    if (!res) {
      throw new Error("Failed to fetch data");
    }
    console.log("Parsing JSON data...");
    console.log("Data successfully loaded:", res);
    const details = await res
    return details;
    
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
