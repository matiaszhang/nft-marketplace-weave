import { ethers } from "ethers";
import CombinedWeaveAbi from "../../lib/combinedAbi";
import { NftContext } from "../../store/NftContext";
import { useContext } from "react";
import { useEffect } from "react";

const provider = new ethers.JsonRpcProvider(process.env.EVM_RPC_URL);
const nftContractAddr = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;

export default function MintAndApprove() {
  // Access your context using useContext hook
  const { setTokenID } = useContext(NftContext);

  const handleMintAndApprove = async () => {
    try {
      // Connect to the NFT contract
      const contract = new ethers.Contract(nftContractAddr, CombinedWeaveAbi, provider);

      // Calling the mint function
      const mintTx = await contract.mint();
      const receipt = await mintTx.wait();

      // Retrieving the token ID from the mint transaction receipt
      const tokenID = receipt.events[0].args.tokenID.toNumber();

      // Update the context store with the minted token ID
      setTokenID(tokenID);

      // Call the approval function to approve the token ID for myMartNFT address
      const approvedAddress = "0x703e8f41112DBa933494B4327a4d746f334ab24E";
      // Call the approval function to approve the token ID for the retrieved approval address
      const approveTx = await contract.approve(approvedAddress, tokenID);
      const approveReceipt = await approveTx.wait();

      return { success: true, tokenID, approvedReceipt: approveReceipt };
    } catch (error) {
      return { success: false, error };
    }
  };

  

  // Call the mint and approve function when the component mounts
  useEffect(() => {
    handleMintAndApprove();
  }, []);

  return null; // or  loading spinner or any other UI while the mint and approve process is in progress
}
