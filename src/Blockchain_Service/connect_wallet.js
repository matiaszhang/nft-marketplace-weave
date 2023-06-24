import SDK from "weavedb-sdk";
import { ethers } from "ethers";
import { isNil } from "ramda";
import React, { useEffect, useState } from "react";
import lf from "localforage";

function WalletConnect() {
  const contractTxId = "9QG_4AHNo6sOuHQaH8h-7NVJpmZ3LWnStnDJrssDdUg";
  const sonarLink = `https://sonar.warp.cc/?#/app/contract/${contractTxId}`;

  const [db, setDb] = useState(null);
  const [initDb, setInitDb] = useState(false);
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    const wallet_address = await lf.getItem(`temp_address:current`);
    if (!isNil(wallet_address)) {
      const identity = await lf.getItem(
        `temp_address:${contractTxId}:${wallet_address}`
      );
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
    let identity = await lf.getItem(
      `temp_address:${contractTxId}:${wallet_address}`
    );

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
      await lf.setItem(
        `temp_address:${contractTxId}:${wallet_address}`,
        JSON.parse(JSON.stringify(identity))
      );
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
          <button
            className="text-white text-sm border-4 border-pink-700 rounded-lg py-2 px-4"
            onClick={logout}
          >
            {user.wallet.slice(0, 5)}...{user.wallet.slice(-5)}
          </button>
        ) : (
          <button
            className="text-white text-sm font-semibold 
          bg-gradient-to-br from-pink-700 to-violet-950 
           hover:bg-pink-900 py-2 px-4 rounded-lg"
            onClick={handleLoginClick}
          >
            {!initDb ? "please wait.." : "Connect Wallet"}
          </button>
        )}
      </div>
    </div>
  );
}

export default WalletConnect;
