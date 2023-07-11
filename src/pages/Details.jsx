import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/elements/Button";
import Typography from "../components/elements/Typography";

const NFTDetails = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex flex-row justify-center p-[100px] gap-[100px]">
        <div
          className="w-[523px] h-[685px] bg-cover bg-center border-x-2 border-white-500 rounded-lg"
          style={{ backgroundImage: `url("/images/Frame 1.png")` }}
        />
        <div className="flex flex-col gap-6 w-[617px] h-[685px]">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-3 items-center">
              <img src="/images/logo_2.svg" alt="logo" />
              <p className="text-xl">Meticulously curated NFT collections</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} size="lg" className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[32px]/[42px] font-bold">Tech Universe</h1>
            <h5 className="text-lg">Description</h5>
          </div>
          <p className="text-xl text-justify font-['Open_Sans']">
            Step into the TechUniverse, an innovative NFT collection that explores the cutting edge of technology and
            its impact on our world. Each NFT represents a breakthrough invention, a futuristic concept, or a visionary
            idea that pushes the boundaries of what's possible. From AI-powered marvels to virtual reality realms,
            TechUniverse offers investors a chance to own a piece of the technological revolution and be part of shaping
            the future. With its visionary appeal and potential for real-world impact, TechUniverse NFTs are highly
            sought-after, making them a compelling investment opportunity in the ever-evolving world of technology.
          </p>
          <div className="flex flex-col p-6 rounded-md bg-card gap-5">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1">
                <Typography type="h7">Ends in</Typography>
                <p className="text-base/[22px]">04:40:56</p>
              </div>
              <div className="flex flex-col gap-1">
                <Typography type="h7">Highest floor bid</Typography>
                <p className="text-base/[22px]">0.32ETH</p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <Button className="grow h-[60px]">Place bid</Button>
              <Button className="grow h-[60px]">Make an offer</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
