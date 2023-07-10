import React, { useContext } from "react";

import { NftContext } from "./NftContext";
//  component to display the length or numbers of nfts saved in the store
//this is a random component not related to the project

export default function Nft_number() {
  const [Nfts, setNfts] = useContext(NftContext);
  return (
    <div>
      <h3>Koxy</h3>
      <h3>List of nfts: {nfts.length} </h3>
    </div>
  );
}
