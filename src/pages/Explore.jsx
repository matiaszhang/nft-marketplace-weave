import { useState } from "react";
import { Button } from "components/elements";
import NFTCard from "components/nftCard";
import { dummyNFTs } from "constant/dummyData";
import { ReactComponent as Grid } from "assets/icons/grid.svg";
import { ReactComponent as Grid2 } from "assets/icons/grid2.svg";
import ToggleButtonGroup, { ToggleButton } from "components/elements/ToggleButton";

const Explore = () => {
  const [filter, setFilter] = useState("all");

  console.log(filter);

  return (
    <div className="container mx-auto py-24">
      <div className="flex flex-row">
        <ToggleButtonGroup value={filter} onChange={setFilter}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="trend">Trend</ToggleButton>
          <ToggleButton value="new">New</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {dummyNFTs.map((nft) => (
          <NFTCard
            key={nft.id}
            hero={nft.imgSrc}
            title={nft.title}
            active={nft.active}
            content={nft.content}
            deadline={nft.deadline}
            currentBid={nft.currentBid}
            size="sm"
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
