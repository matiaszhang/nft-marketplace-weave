import { useState } from "react";
import NFTCard from "components/nftCard";
import { ReactComponent as Grid } from "assets/icons/grid.svg";
import { ReactComponent as Grid2 } from "assets/icons/grid2.svg";
import ToggleButtonGroup, { ToggleButton } from "components/elements/ToggleButton";
import { filterMode } from "constant";
import classNames from "classnames";
import SDK from "weavedb-sdk";

const contractTxId = "U2OR33r74nnR1C3alI-JEpbRqSisAiKIEbXECgaJSyA";
const db = new SDK({ contractTxId: contractTxId });
await db.init();
const Nft = await db.get("NFT_COLLECTION")


export default function Explore () {
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
        className={classNames(`grid gap-5`, {
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": grid === 4,
          "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5": grid === 5,
        })}
      >
        {Nft.map((nft) => (
          <NFTCard
            key={nft.tokenID}
            uploadUrl={nft.uploadUrl}
            title={nft.title}
            description={nft.description}
            price={nft.price}
            totalShares={nft.totalShares}
            size="sm"
          />
        ))}
      </div>
    </div>
  );
};

