import { useContext } from "react";
import { NftContext } from "../../store/NftContext";

export default function SignInOptions() {
  const { modal, setModal } = useContext(NftContext);

  const openModal = () => {
    setModal("scale-100");
  };

  const closeModal = () => {
    setModal("scale-0");
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
      <div
        className={`fixed z-30 top-0 right-0 
         border bg-black flex justify-center items-center
           w-screen h-screen 
         bg-opacity-50 transform
        transition-transform duration-300 ${modal}`}
      >
        <div
          className="bg-[#DFD0E3] shadow-xl
         shadow-slate-950 rounded-xl
          w-11/12 md:w-2/5 h-7/12 p-6"
        >
          <form className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold text-gray-400">Connect Wallet</p>
              <button
                type="button"
                onClick={closeModal}
                className="border-0 bg-transparent focus:outline-none"
              >
                close
              </button>
            </div>

            <div></div>
          </form>
        </div>
      </div>
    </>
  );
}
