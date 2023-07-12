import { faArrowTrendUp, faEllipsis, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/elements/Button";
import Typography from "../components/elements/Typography";
import Accordion from "../components/elements/Accordion";
import Card from "../components/elements/Card";
import ListItem from "../components/elements/ListItem";
import classNames from "classnames";
import nftDummy from "../utils/Nft_Dummy_Data";
import NftProps from "../components/NftExplore/NftProps";

const NFTDetails = () => {
  return (
    <div className="flex flex-col text-white p-[50px] xl:p-[70px] laptop:p-[100px] gap-[50px] xl:gap-[100px] h-full">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[50px] xl:gap-[100px] h-full">
        <div
          className="max-w-[523px] w-full h-[617px] lg:h-full bg-cover bg-center border-x-2 border-white-500 rounded-lg"
          style={{ backgroundImage: `url("/images/Frame 1.png")` }}
        />
        <div className="flex flex-col gap-6 max-w-[617px] w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-3 items-center">
              <img src="/images/logo_2.svg" alt="logo" />
              <p className="text-xl">Meticulously curated NFT collections</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} size="lg" className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-1">
            <Typography type="h5">Tech Universe</Typography>
            <h5 className="text-lg">Description</h5>
          </div>
          <p className="text-md lg:text-lg laptop:text-xl text-justify font-['Open_Sans']">
            Step into the TechUniverse, an innovative NFT collection that explores the cutting edge of technology and
            its impact on our world. Each NFT represents a breakthrough invention, a futuristic concept, or a visionary
            idea that pushes the boundaries of what's possible. From AI-powered marvels to virtual reality realms,
            TechUniverse offers investors a chance to own a piece of the technological revolution and be part of shaping
            the future. With its visionary appeal and potential for real-world impact, TechUniverse NFTs are highly
            sought-after, making them a compelling investment opportunity in the ever-evolving world of technology.
          </p>
          <Card className="flex flex-col">
            <div className="flex flex-col p-6 gap-5">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-1">
                  <Typography type="h7">Ends in</Typography>
                  <p className="text-base/[22px]">04:40:56</p>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography type="h7">Highest floor bid</Typography>
                  <p className="text-base/[22px] text-end">0.32ETH</p>
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
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[50px] xl:gap-[100px]">
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

export default NFTDetails;
