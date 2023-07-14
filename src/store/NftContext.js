import React, { useState, createContext } from "react";

export const NftContext = createContext();

export function NftProvider(props) {



  const [nft, setNft] = useState();
  const [db, setDb] = useState(null);
  const [modal, setModal] = useState("scale-0");
  const [initDb, setInitDb] = useState(false);
  const [showModal, setShowModal] = useState("scale-0");
  const [nftDetails, setNFTDetails] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", color: "" });
  const [loading, setLoading] = useState({ show: false, msg: "" });
  const [user, setUser] = useState(null);

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
          db,
          setDb,
          initDb,
          setInitDb,
          showModal,
          alert,
          setAlert,
          loading,
          setLoading,
          user,
          setUser
        }}
      >
        {props.children}
      </NftContext.Provider>
    </div>
  );
}
