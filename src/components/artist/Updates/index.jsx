import { Button, Typography } from "components/elements";

const Updates = () => {
  return (
    <div className="flex flex-row justify-between gap-28">
      <div className="relative mt-7">
        <img src="/images/UpdateHero.svg" alt="hero" />
        <img src="/images/camera.svg" className="absolute -right-7 -top-7 cursor-pointer" alt="hero" />
      </div>
      <div className="flex flex-col max-w-[600px]">
        <Typography className="text-[#F8F8FA]" type="h7">
          Donors should take note of the update below
        </Typography>
        <p className="text-xl mt-7 text-white">
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
