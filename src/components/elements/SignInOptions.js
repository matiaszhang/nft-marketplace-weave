import { useContext } from "react";
import { NftContext } from "../../store/NftContext";
import Modal from "./Modal/modal";
import { Button } from ".";

export default function SignInOptions() {
  const { setModal } = useContext(NftContext);

  const openModal = () => {
    setModal("scale-100");
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={openModal}>
          Join WeaveNFT
        </Button>
      </div>
      <Modal />
    </>
  );
}
