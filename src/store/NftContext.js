import React, { useState, createContext } from "react";

export const NftContext = createContext();

export function NftProvider(props) {
  //this nfts, setNfts is for demo details and can be
  //changed, but the rest is related to the project

  const [nft, setNft] = useState();
  const [modal, setModal] = useState("scale-0");
  const [updateModal, setUpdateModal] = useState("scale-0");
  const [showModal, setShowModal] = useState("scale-0");
  const [nftDetails, setNFTDetails] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", color: "" });
  const [loading, setLoading] = useState({ show: false, msg: "" });
  const [connectedAccount, setConnectedAccount] = useState("");

  return (
    <div>
      <NftContext.Provider
        value={{
          nft,
          setNft,
          modal,
          setModal,
          nftDetails,
          setNFTDetails,
          updateModal,
          showModal,
          alert,
          loading,
          connectedAccount,
        }}
      >
        {props.children}
      </NftContext.Provider>
    </div>
  );
}
