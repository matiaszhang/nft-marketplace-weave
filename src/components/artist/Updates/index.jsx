import { Button, Typography } from "components/elements";

const Updates = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-28">
      <div className="relative mt-7 flex items-center lg:min-w-[500px]">
        <img src="/images/UpdateHero.svg" className="w-full" alt="hero" />
        <img src="/images/camera.svg" className="absolute -right-7 -top-7 cursor-pointer" alt="hero" />
      </div>
      <div className="flex flex-col">
        <Typography className="text-[#F8F8FA]" type="h7">
          Donors should take note of the update below
        </Typography>
        <p className="text-base sm:text-lg lg:text-xl mt-7 text-white">
          We are thrilled to share that TechUniverse NFTs will now come with a unique utility feature. As a bidder, once
          you secure a TechUniverse NFT, you will gain exclusive access to private events, tech conferences, and
          workshops related to the cutting-edge concepts represented in the NFTs. Immerse yourself in the world of
          innovation, network with industry leaders, and stay at the forefront of technological advancements. This added
          utility enhances the value and experience of your TechUniverse NFT ownership. Get ready to embark on a journey
          of knowledge, inspiration, and real-world opportunities. Happy bidding and welcome to the future!
        </p>
        <Button variant="primary" className="mt-10">
          Edit or Add new update
        </Button>
      </div>
    </div>
  );
};

export default Updates;
