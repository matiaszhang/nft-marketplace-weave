import { useContext } from "react";
import { NftContext } from "../../store/NftContext";
import Modal from "./Modal/modal";

export default function SignInOptions() {
  const {  setModal } = useContext(NftContext);

  const openModal = () => {
    setModal("scale-100");
  };

  

  return (
    <>
      <div>
        <button
          onClick={openModal}
          className="text-white text-sm font-semibold 
          bg-gradient-to-br cursor-pointer from-pink-700 to-violet-950 
           hover:bg-pink-900 py-2 px-2 sm:py-2 sm:px-4 rounded-lg"
        >
          Join WeaveNFT
        </button>
      </div>
      <Modal />
    </>
  );
}
