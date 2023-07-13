import { Button } from "../../elements";
import nftDummy from "../../../utils/Nft_Dummy_Data";
import NftProps from "../../NftExplore/NftProps";

const AllNFTs = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="grid grid-cols-3 gap-8 items-center">
        {nftDummy.slice(0, 6).map((items) => (
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
      <div label="All NFTs" index={0} className="flex flex-col gap-10 justify-center items-center">
        <Button variant="primary">Mint a new NFT</Button>
      </div>
    </div>
  );
};

export default AllNFTs;
