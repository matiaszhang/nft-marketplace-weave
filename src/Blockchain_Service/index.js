import Identicon from "react-identicons";
import SDK from "weavedb-sdk";
import { isNil } from "ramda";
import { useEffect, useState, useContext } from "react";
import lf from "localforage";
import { WeaveMarketAbi } from "../lib/marketplace";
import { mintingAbi } from "../lib/minting";
import { NftContext } from "../store/NftContext";
import { WebBundlr } from "@bundlr-network/client";
import { ethers, Contract } from "ethers";
import detectEthereumProvider from '@metamask/detect-provider'



const contractTxId = "U2OR33r74nnR1C3alI-JEpbRqSisAiKIEbXECgaJSyA";
const db = new SDK({ contractTxId: contractTxId });
await db.init();

const MintingAdrs = "0x73d7530D4BBD9AC1640600E839C3B9E932830915";
const MarketplaceAdrs = "0x703e8f41112DBa933494B4327a4d746f334ab24E";

// Function to handle minting and approval
const handleMintAndApprove = async () => {

  
  try {
    const web3Provider = new ethers.providers.Web3Provider(
        window.ethereum
      );

    const signer = await web3Provider.getSigner();
    const contract = new Contract(MintingAdrs, mintingAbi, signer);
    console.log("contract", contract)
    const mintTx = await contract.mint();
    console.log(mintTx)
    const receipt = await mintTx.wait();
    console.log(receipt)
    console.log(receipt.logs[0])
    // Retrieving the token ID from the mint transaction receipt
    const tokenID = receipt.logs[0].topics[3]
    console.log("tokenID", tokenID);
    const approveTx = await contract.approve(MarketplaceAdrs, tokenID);
    const approveReceipt = await approveTx.wait();

    return {
      success: true,
      tokenID,
      approvedReceipt: approveReceipt,
    };
  } catch (error) {
    return { success: false, error };
  }
};


// Function to handle NFT listing creation
const handleCreateListing = async (price, totalShares) => {
  try {
    const web3Provider = new ethers.providers.Web3Provider(
        window.ethereum
      );

    const signer = await web3Provider.getSigner();
    const contract = new Contract(MarketplaceAdrs, WeaveMarketAbi, signer);
    const mintTx = await handleMintAndApprove();
    if (!mintTx.success) {
      throw new Error("Minting failed. Unable to create listing.");
    }
    
    const createListingTx = await contract.createListing(
      mintTx.tokenID,
      price,
      totalShares
    );
    await createListingTx.wait()
    return mintTx.tokenID
  } catch (error) {
    return { success: false, error };
  }
};

const getBundlr = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    //   provider.getGasPrice = async () => {
    //     const gp = +((await provider.getFeeData()).gasPrice?.toString() ?? 0);
    //     console.log("getGasPrice", gp, typeof gp);
    //     return gp;
    //   };
  
    //   const e = provider.estimateGas.bind(provider);
    //   provider.estimateGas = async (tx) => {
    //     const est = +((await e(tx))?.toString() ?? 0);
    //     return { mul: (n) => +est * +n };
    //   };
  
    //   const signer = await provider.getSigner();
  
    //   signer.estimateGas = e;
    //   signer.getGasPrice = provider.getGasPrice;
    //   provider.getSigner = () => signer;
  
    //   signer._signTypedData = (domain, types, value) => signer.signTypedData(domain, types, value);
  
    const bundlr = new WebBundlr("https://devnet.bundlr.network/", "matic", provider, {
      providerUrl: "https://rpc-mumbai.maticvigil.com/",
    });
  
    //   bundlr.currencyConfig.createTx = async (amount, to) => {
    //     const estimatedGas = await signer.estimateGas({ to, from: bundlr.address, amount });
    //     const gasPrice = await signer.getGasPrice();
    //     const txr = await signer.populateTransaction({
    //       // eslint-disable-next-line no-undef
    //       to,
    //       from: bundlr.address,
    //       value: BigInt(amount),
    //       gasPrice,
    //       gasLimit: estimatedGas,
    //     });
    //     return { txId: undefined, tx: txr };
    //   };
    await bundlr.ready();
    console.log("bundlr=", bundlr);
  
    return bundlr; // done
  };


export { getBundlr, handleMintAndApprove, handleCreateListing };