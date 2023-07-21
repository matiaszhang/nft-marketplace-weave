import Identicon from "react-identicons";
import SDK from "weavedb-sdk";
import { isNil } from "ramda";
import { useEffect, useState, useContext } from "react";
import lf from "localforage";
import CombinedWeaveAbi from "../lib/combinedAbi";
import { NftContext } from "../store/NftContext";
import { WebBundlr } from "@bundlr-network/client";
import { ethers } from "ethers";

const contractTxId = "9QG_4AHNo6sOuHQaH8h-7NVJpmZ3LWnStnDJrssDdUg";
const db = new SDK({ contractTxId: contractTxId });
await db.init();
const provider = new ethers.BrowserProvider(window.ethereum);
const nftContractAddr =
  "0x73d7530D4BBD9AC1640600E839C3B9E932830915,  0x703e8f41112DBa933494B4327a4d746f334ab24E";

const handleMintApproveAndCreateListing = async () => {
  try {
    const contract = new ethers.Contract(
      nftContractAddr,
      CombinedWeaveAbi,
      provider
    );
    const mintTx = await contract.mint();
    const receipt = await mintTx.wait();

    // Retrieving the token ID from the mint transaction receipt
    const tokenID = receipt.events[0].args.tokenID.toNumber();
    console.log("tokenID", tokenID);
    await db.add({ tokenID }, "nft_collection");

    const approvedAddress = "0x703e8f41112DBa933494B4327a4d746f334ab24E";
    const approveTx = await contract.approve(approvedAddress, tokenID);
    const approveReceipt = await approveTx.wait();

    const price = await db.get("nft_collection", "price");
    console.log("price4rmDB:", price);
    const totalShares = await db.get("nft_collection", "totalShares");
    console.log("totalShares:", totalShares);

    const createListingTx = await contract.createListing(
      tokenID,
      price,
      totalShares
    );
    const createListingReceipt = await createListingTx.wait();

    return {
      success: true,
      tokenID,
      approvedReceipt: approveReceipt,
      createListingReceipt: createListingReceipt,
    };
  } catch (error) {
    return { success: false, error };
  }
};

const getBundlr = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  provider.getSigner = () => signer;

  signer._signTypedData = (domain, types, value) =>
    signer.signTypedData(domain, types, value);

  const bundlr = new WebBundlr(
    "https://devnet.bundlr.network/",
    "matic",
    provider,
    {
      providerUrl: "https://rpc-mumbai.maticvigil.com/",
    }
  );
  await bundlr.ready();
  console.log("bundlr=", bundlr);

  return bundlr; // done
};

export { getBundlr, handleMintApproveAndCreateListing };
