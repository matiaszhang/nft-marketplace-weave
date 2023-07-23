import React, { useState, createContext } from "react";

export const NftContext = createContext();

export function NftProvider(props) {



  const [nft, setNft] = useState();
  
  const [tokenID, setTokenID] = useState();
  const [db, setDb] = useState(null);
  const [modal, setModal] = useState("scale-0");
  const [initDb, setInitDb] = useState(false);
  const [showModal, setShowModal] = useState("scale-0");
  const [nftDetails, setNFTDetails] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", color: "" });
  const [loading, setLoading] = useState({ msg: '', isLoading: false });

  const [user, setUser] = useState(null);
  const [bundlrId, setBundlrId ] = useState("")

  

  return (
    <div>
      <NftContext.Provider
        value={{
          nft,
          setNft,
          tokenID,
          setTokenID,
          bundlrId,
          setBundlrId,
          modal,
          setModal,
          nftDetails,
          setNFTDetails,
          db,
          setDb,
          initDb,
          setInitDb,
          showModal,
          setShowModal,
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
