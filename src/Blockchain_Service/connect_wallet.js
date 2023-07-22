import Identicon from 'react-identicons';
import SDK from "weavedb-sdk";
import { ethers } from "ethers";
import { isNil } from "ramda";
import React, { useContext, useEffect } from "react";
import lf from "localforage";
import { NftContext } from "../store/NftContext";
import { Button } from "components/elements";
import { handleMintAndApprove } from '.';

const WalletConnect = ({ children }) => {
  const contractTxId = "mrWXmYuvBJaYGiROWIKxeL6Nz8hj2NwyoN7qJkr24KQ";
  const sonarLink = `https://sonar.warp.cc/?#/app/contract/${contractTxId}`;

  const { db, setDb, initDb, setInitDb, user, setUser } = useContext(NftContext);

  const checkUser = async () => {
    const wallet_address = await lf.getItem(`temp_address:current`);
    if (!isNil(wallet_address)) {
      const identity = await lf.getItem(`temp_address:${contractTxId}:${wallet_address}`);
      if (!isNil(identity)) {
        setUser({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        });
      }
    }
  };

  const setupWeaveDB = async () => {
    try {
      const _db = new SDK({
        contractTxId: contractTxId,
      });
      await _db.initializeWithoutWallet();
      setDb(_db);
      setInitDb(true);
    } catch (e) {
      console.error("setupWeaveDB", e);
    }
  };

  const login = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum, "any");
    const signer = await provider.getSigner();
    await provider.send("eth_requestAccounts", []);
    const wallet_address = await signer.getAddress(); 
    let identity = await lf.getItem(`temp_address:${contractTxId}:${wallet_address}`);

    let tx;
    let err;
    if (isNil(identity)) {
      ({ tx, identity, err } = await db.createTempAddress(wallet_address));
      const linked = await db.getAddressLink(identity.address);
      if (isNil(linked)) {
        alert("something went wrong");
        return;
      }
    } else {
      await lf.setItem("temp_address:current", wallet_address);

      setUser({
        wallet: wallet_address,
        privateKey: identity.privateKey,
      });
      return;
    }
    if (!isNil(tx) && isNil(tx.err)) {
      identity.tx = tx;
      identity.linked_address = wallet_address;
      await lf.setItem("temp_address:current", wallet_address);
      await lf.setItem(`temp_address:${contractTxId}:${wallet_address}`, JSON.parse(JSON.stringify(identity)));
      setUser({
        wallet: wallet_address,
        privateKey: identity.privateKey,
      });
    }
  };

  const logout = async () => {
    await lf.removeItem("temp_address:current");
    setUser(null);
    console.log("<<logout()");
  };

  const handleLoginClick = async () => {
    try {
      login();
      console.log("<<handleLoginClick()");
    } catch (e) {
      console.error("handleLoginClick", e);
    }
  };

  useEffect(() => {
    checkUser();
    setupWeaveDB();
  }, []);

  useEffect(() => {
    setupWeaveDB();
  }, [contractTxId]);

  return (
    <div className="App">
      <div>
        <br />
        {/*<p>{initDb ? "WeaveDB is Ready" : "WeaveDB SDK is not initialized"}</p>*/}
        {!isNil(user) ? (
          <button onClick={logout} className="flex justify-center gap-2 text-white text-sm bg-fuchsia-900 rounded-lg py-4 px-4">
            <Identicon string={user.wallet} size={18} />
            {user.wallet.slice(0, 5)}...{user.wallet.slice(-5)}
          </button>
        ) : (
          <Button variant="primary" onClick={handleLoginClick}>
            {children}
          </Button>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;
