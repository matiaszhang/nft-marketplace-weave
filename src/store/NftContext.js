import React, { useState, createContext } from "react";

export const NftContext = createContext();

export function NftProvider(props) {
  //creating state for a list of movies
  const [nfts, setNfts] = useState([
    {
      name: "Henry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game of thrones",
      price: "$10",
      id: 231,
    },
    {
      name: "inceptions",
      price: "$10",
      id: 124,
    },
  ]);

  return (
    <div>
      <NftContext.Provider value={[nfts, setNfts]}>
        {props.children}
      </NftContext.Provider>
    </div>
  );
}
