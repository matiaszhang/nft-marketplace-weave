import { useDropzone } from "react-dropzone";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NftContext } from "../store/NftContext";
import Modal from "../components/elements/Modal/modal";

export default function Create(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const [category, setCategory] = useState("");

  const { setModal, setLoading } = useContext(NftContext);

  //function for adding image to input
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });
  

  //files to select

  const Files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  //handle changes or category

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  //handle change for the rest inputs

  const handleChange = (event) => {
    switch (event.target.name) {
      case "title":
        setTitle(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "nft":
        if (event.target.files && event.target.files.length > 0) {
          setFileUrl(event.target.files[0]);
          console.log(event.target.files[0]);
        }
        break;
      default:
        break;
    }
  };

  //handle submit
  const resetForm = () => {
    setTitle("");
    setPrice("");
    setDescription("");
    setFileUrl("");
    setCategory("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !price || !description || !fileUrl || !category) {
      console.log(title);
      console.log(price);
      console.log(description);
      console.log(fileUrl);
      console.log(category);

      toast.error("Please fill all required fields");
    } else {
      setModal("scale-100");
      setLoading({ show: true, msg: "Nft..." });

      try {
        // Do something with the form data

        resetForm();

        toast.success("Nft successfully minted!");
      } catch (error) {
        console.log(error);
        toast.error("An error occurred while minting the Nft");
      }
    }
  };

  return (
    <div>
      <div
        className="bg-gradient-to-r from-fuchsia-900
         to-slate-950"
      >
        <div className="justify-center align-center">
          {/* headers */}
          <div className="pb-3">
            <h1 className="text-white text-[27px] sm:text-[37px] text-center  pt-[66px] font-bold leading-10">
              MINT OR CREATE NFTs
            </h1>
            <p
              className="text-gray-50 text-[13px] 
            sm:text-[18px] pb-[10px] text-center font-normal leading-7"
            >
              Mint or create nfts by filling out the form below
            </p>
          </div>

          <div
            className="w-full  items-center 
          justify-center flex flex-col pb-5 "
          >
            <form
              onSubmit={handleSubmit}
              className="shadow-md rounded-lg px-8  pb-[50px] flex flex-col "
            >
              {/* title input */}
              <div className="pb-5 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="title"
                >
                  NFT Title
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="A catchy and descriptive name for your NFT"
                />
              </div>

              {/* price input */}
              <div className="pb-5 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  for="price"
                >
                  Price
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="price"
                  type="number"
                  name="price"
                  value={price}
                  onChange={handleChange}
                  placeholder="Enter the price you wish to sell your nft"
                />
              </div>

              {/* description input */}
              <div className="pb-6 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  for="description"
                >
                  NFT Description
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  placeholder="Detail explanation of your NFT and how buyers will benefit will benefit"
                />
              </div>

              {/* picture / add nft input */}
              <div
                {...getRootProps({ className: "dropzone" })}
                className="pb-5 appearance-none"
              >
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="picture"
                >
                  Add NFT
                </label>
              </div>

              {/* dropzone section for the image */}
              <div className="bg-white rounded-md flex flex-col  ">
                <input
                  name="nft"
                  value={fileUrl.name || ""}
                  id="picture"
                  onChange={handleChange}
                  type="file"
                  accept="image/png, image/gif, image/jpeg, image/webp, audio/mpeg, audio/wav, video/mp4, video/webm"
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  {...getInputProps()}
                  
                />
                {/*  
                <div
                  className=" sm:pt-[50px] 
                w-[22px] sm:w-[50px] h-[50px]"
                >
                  <img src="./images/addNft.png" alt="addNfts" />
                </div>
                */}

                <p
                  className="pt-[20px] text-center text-gray-700 
                text-opacity-50"
                >
                  Drag 'n' drop or Select files here
                </p>
                <button
                  className="text-violet-500 pb-[50px] flex justify-center align-center"
                  type="button"
                  onClick={open}
                >
                  Select file
                </button>
              </div>
              <aside className="text-white">
                <ul>{Files}</ul>
              </aside>

              {/* category input */}
              <div className="pt-6 pb-[50px] flex flex-col appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  for="Category"
                >
                  Category
                </label>
                <select
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="Category"
                  type="text"
                  value={category}
                  placeholder="Select the category of your project"
                  onChange={handleCategoryChange}
                >
                  
                  <option value="">picture Nft</option>
                  <option value="">Music Nft</option>
                  <option value="">Video Nft</option>
                  <option value="">
                    Fractional ownership
                  </option>
                </select>
              </div>

              <div
                className=" px-5 py-2.5 
                bg-gradient-to-br
                 from-pink-700 to-violet-950 
                 rounded-lg 
              border justify-center 
              items-center gap-2 inline-flex "
              >
                <button
                  type="submit"
                  className="text-white 
                cursor-pointer"
                >
                  Mint
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
