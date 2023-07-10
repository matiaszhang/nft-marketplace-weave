import React, { useState, useContext } from "react";
import Nft from "./Nft";
import { NftContext } from "./NftContext";
//this is a random component not related to the project

export default function NftList() {
  const [nfts, setNfts] = useContext(NftContext);
  return (
    <div>
      {nfts.map((nft) => (
        <Nft name={nft.name} price={nft.price} key={nft.id} />
      ))}
    </div>
  );
}

//map method to display the nfts
