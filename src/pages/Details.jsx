import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faEllipsis, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, Typography, Accordion, Card, ListItem } from "../components/elements";
import nftDummy from "../utils/Nft_Dummy_Data";
import NftProps from "../components/NftExplore/NftProps";

import { useParams } from "react-router-dom";

export const NFTDetails = () => {

  const { id } = useParams();
  const details = nftDummy.find((item) => item.id === parseInt(id));

  if (!details) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col text-white p-[50px] xl:p-[70px] laptop:p-[100px] gap-[50px] xl:gap-[100px] h-full">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[50px] xl:gap-[100px] h-full">
        <div
          className="max-w-[523px] w-full h-[617px] lg:h-full bg-cover bg-center border-x-2 border-white-500 rounded-lg">
            <img src={details.imgSrc} alt="just for tet" />
        </div>
        
        <div className="flex flex-col gap-6 max-w-[617px] w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-3 items-center">
              <img src="/images/logo_2.svg" alt="logo" />
              <p className="text-xl">Meticulously curated NFT collections</p>
            </div>
            <FontAwesomeIcon
              icon={faEllipsis}
              size="lg"
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Typography type="h5">{details.title}</Typography>
            <h5 className="text-lg">Description</h5>
          </div>
          <p className="text-md lg:text-lg laptop:text-xl text-justify font-['Open_Sans']">
            {details.content}
          </p>
          <Card className="flex flex-col">
            <div className="flex flex-col p-6 gap-5">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-1">
                  <Typography type="h7">Ends in</Typography>
                  <p className="text-base/[22px]">{details.deadline}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography type="h7">Current floor bid</Typography>
                  <p className="text-base/[22px] text-end">
                    {details.currentBid}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="primary" className="basis-full h-[60px]">
                  Place bid
                </Button>
                <Button variant="outline" className="basis-full h-[60px]">
                  Make an offer
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[50px] xl:gap-[100px]">
        <Accordion
          className="max-w-[617px] w-full lg:max-w-[523px]"
          icon={faArrowTrendUp}
          title="Bidding Activities"
        >
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
        <Accordion
          className="max-w-[617px] w-full"
          icon={faInfoCircle}
          title="Details"
        >
          {Array.apply("", Array(6)).map((_, idx) => (
            <div
              key={idx}
              className={classNames(
                "flex flex-row justify-between items-center p-6 text-white",
                {
                  "border-b": idx !== 5,
                }
              )}
            >
              <p className="text-lg sm:text-2xl text-[#F8F8FA]/[0.8]">
                Current Owner
              </p>
              <p className="text-lg sm:text-2xl font-semibold">McCopy</p>
            </div>
          ))}
        </Accordion>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-8">
          <Typography type="h6">More from this creator</Typography>
          <div className="grid grid-cols-1 lg:grid-cols-2 laptop:grid-cols-3 gap-5">
            {nftDummy.slice(0, 3).map((items) => (
              <NftProps
                key={items.id}
                img={items.imgSrc}
                title={items.title}
                active={items.active}
                content={items.content}
                deadline={items.deadline}
                currentBid={items.currentBid}
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
    const res = await fetch("../utils/Nft_Dummy_Data");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const details = await res.json();
    return details;
  } catch (error) {
    console.log(error);
    return null;
  }
};
