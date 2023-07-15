import { useState } from "react";
import { Button } from "components/elements";
import NFTCard from "components/nftCard";
import { dummyNFTs } from "constant/dummyData";
import { ReactComponent as Grid } from "assets/icons/grid.svg";
import { ReactComponent as Grid2 } from "assets/icons/grid2.svg";
import ToggleButtonGroup, { ToggleButton } from "components/elements/ToggleButton";
import { filterMode } from "constant";
import classNames from "classnames";

const Explore = () => {
  const [filter, setFilter] = useState("all");
  const [grid, setGrid] = useState(5);

  return (
    <div className="container mx-auto max-sm:px-5 py-10 flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <ToggleButtonGroup className="flex-wrap" value={filter} onChange={setFilter}>
          {filterMode.map((mode) => (
            <ToggleButton key={mode} value={mode.toLowerCase()}>
              {mode}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <ToggleButtonGroup
          className="flex flex-col sm:flex-row justify-center sm:justify-start"
          variant="outline"
          value={grid}
          onChange={setGrid}
        >
          <ToggleButton className="px-4 py-4 h-fit" value={4}>
            <Grid fill="white" />
          </ToggleButton>
          <ToggleButton className="px-4 py-4 h-fit" value={5}>
            <Grid2 fill="white" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div
        className={classNames(`grid grid-cols-${grid - 3} md:grid-cols-${grid - 2} lg:grid-cols-${grid} gap-5`, {
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": grid === 4,
          "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5": grid === 5,
        })}
      >
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
