import { ethers } from "ethers";
import CombinedWeaveAbi from "../../lib/combinedAbi";
import { NftContext } from "../../store/NftContext";
import { useContext } from "react";
const provider = new ethers.providers.JsonRpcProvider(process.env.EVM_RPC_URL);
const nftContractAddr = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;

export default async function Minting(req, res) {
  // Accessing context using useContext hook
  const { setTokenID } = useContext(NftContext);

  try {
    
    // Connect to the NFT contract
    const contract = new ethers.Contract(nftContractAddr, CombinedWeaveAbi, provider);

    // Call the mint function
    const mintTx = await contract.mint();
    const receipt = await mintTx.wait();

    // Retrieve the emitted token ID from the transaction receipt
    const tokenID = receipt.events[0].args.tokenID.toNumber();

    // Update the context store with the token ID
    setTokenID(tokenID); // Assuming setTokenID is the function to update the token ID in your context

    res.status(200).json({ success: true, tokenID: tokenID });
  } catch (error) {
    res.status(200).json({
      success: false,
      error,
    });
  }
}
