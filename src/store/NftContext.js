import React, { useState, createContext } from "react";

export const NftContext = createContext();

export function NftProvider(props) {
  //this nfts, setNfts is for demo details and can be
  //changed, but the rest is related to the project

  const [nfts, setNfts] = useState([
    //demo details
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
  const [modal, setModal] = useState("scale-0");
  const [updateModal, setUpdateModal] = useState("scale-0");
  const [showModal, setShowModal] = useState("scale-0");
  const [alert, setAlert] = useState({ show: false, msg: "", color: "" });
  const [loading, setLoading] = useState({ show: false, msg: "" });
  const [connectedAccount, setConnectedAccount] = useState("");

  return (
    <div>
      <NftContext.Provider
        value={{
          nfts,
          setNfts,
          modal,
          setModal,
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
