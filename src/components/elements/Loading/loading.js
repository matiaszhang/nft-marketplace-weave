import { useContext } from "react"
import { NftContext } from "../../../store/NftContext"

const Loading = ({ children })  => {
  const {loading, setLoading} = useContext(NftContext)

  const setLoadingMsg = (msg) => {
    setLoading((prevState) => ({ ...prevState, msg }));
  };


  
  return (
    <div>
      {children}
    </div>
  );
}

export default Loading