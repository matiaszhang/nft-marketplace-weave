import { useContext } from "react";
import { NftContext } from "../../../store/NftContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ children }) {
  const { modal, setModal } = useContext(NftContext);

  const closeModal = () => {
    setModal("scale-0");
  };

  return (
    <>
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
            <div onClick={closeModal} style={{ color: "black" }} className="flex justify-end">
              <FontAwesomeIcon icon={faTimes} />
            </div>

            {children}
          </form>
        </div>
      </div>
    </>
  );
}
