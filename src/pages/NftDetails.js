import { useContext } from "react";
import { NftContext } from "../store/NftContext";

export default function NftDetails() {
  const { modal, setModal } = useContext(NftContext);

  const onCreatedNFT = () => {
    setModal("scale-100");
  };
  const closeModal = () => {
    setModal("scale-0");
  };
  return (
    <>
      <h1>Hello there</h1>
      <div className="flex flex-row mt-5">
        <button
          className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f]
            rounded-full cursor-pointer p-2"
          onClick={onCreatedNFT}
        >
          Create NFT
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 ${modal}`}
      >
        <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
          <form className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold text-gray-400">Add NFT</p>
              <button
                type="button"
                onClick={closeModal}
                className="border-0 bg-transparent focus:outline-none"
              >
                close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
