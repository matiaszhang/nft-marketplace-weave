import { useDropzone } from "react-dropzone";
import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import SDK from "weavedb-sdk";
import "react-toastify/dist/ReactToastify.css";
import { NftContext } from "../store/NftContext";
import Modal from "../components/elements/Modal/modal";
import lf from "localforage";
import { ethers } from "ethers";
import { WebBundlr } from "@bundlr-network/client";
import fileReaderStream from "filereader-stream";
import { getBundlr, handleCreateListing, handleMintAndApprove } from "../Blockchain_Service";
import { nanoid } from "nanoid";

export default function Create(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [totalShares, setTotalShares] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [imgBase64, setImgBase64] = useState("");
  const [category, setCategory] = useState("");
  const [bundlrId, setBundlrId] = useState("");
  const [loading, setLoading] = useState("");
  const [deadline, setDeadline] = useState(""); // State to hold the deadline input
  

  const { setModal, user } = useContext(NftContext);

  const contractTxId = "mrWXmYuvBJaYGiROWIKxeL6Nz8hj2NwyoN7qJkr24KQ";
  const db = new SDK({ contractTxId: contractTxId });

  //function for adding image to input

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (readerEvent) => {
          const base64 = readerEvent.target.result;
          setImgBase64(base64);
          setFileUrl(file);
        };

        reader.readAsDataURL(file);
      }
    },
  });

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
      case "totalShares":
        setTotalShares(event.target.value);
        break;
      case "deadline":
        setDeadline(event.target.value);
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

  //handle submit
  const resetForm = () => {
    setTitle("");
    setPrice("");
    setDescription("");
    setTotalShares("");
    setFileUrl("");
    setBundlrId("");
    setCategory("");
  };

  const handleNft_details = async () => {
    const docId = nanoid();

    const nft_details = {
      title: title,
      description: description,
      price: Number(price),
      bundlrId: bundlrId,
      totalShares: Number(totalShares),
    };

    await db.init();

    try {
      const res = await db.add(nft_details, "nft_collection");
      console.log("docId", docId);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handlrBundlrUpload = async () => {
    const bundlr = await getBundlr();

    try {
      console.log(fileUrl);
      const dataStream = fileReaderStream(fileUrl);
      const Price = await bundlr.getPrice(fileUrl.size);
      console.log("price:", Price);
      const balance = await bundlr.getLoadedBalance();
      console.log("balance:", balance);
      if (Price.isGreaterThanOrEqualTo(balance)) {
        console.log("Funding node.");

        await bundlr.fund(Price);
        console.log("funded");
      } else {
        console.log("Funding not needed, balance sufficient.");
      }

      const fileType = "image/png";
      const response = await bundlr.upload(dataStream, {
        tags: [{ name: "Content-Type", value: fileType }],
      });
      console.log("bundlr uploaded file:", response.id);

      await lf.setItem("bundlr", response.id);

      console.log("Content ID successfully saved to local storage.");

      console.log(
        `Upload success content URI= https://arweave.net/${response.id}`
      );
      return `https://arweave.net/${response.id}`;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const getContentIdFromLocalStorage = async () => {
    try {
      const docId = nanoid();

      const imageId = await lf.getItem("bundlr");
      if (imageId) {
        console.log("docId", docId);
        // Content ID exists in local storage
        console.log("Content ID retrieved from local storage:", imageId);
        const nft_details = {
          title: title,
          description: description,
          price: Number(price),
          imageId: imageId,
          totalShares: Number(totalShares),
        };

        await db.init();

        const res = await db.add(
          { nft_details },
          "nft_collection",
          docId,
          user
        );
        console.log(res);

        return imageId;
      } else {
        console.log("Content ID not found in local storage.");
        return null;
      }
    } catch (error) {
      console.log("Error retrieving Content ID from local storage:", error);
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*await  handleMintAndApprove()*/

    if (
      !title ||
      !price ||
      !description ||
      !totalShares ||
      !fileUrl ||
      !category
    ) {
      console.log(title);
      console.log(price);
      console.log(description);
      console.log(totalShares);
      console.log(fileUrl);
      console.log(category);
      console.log(category);

      toast.error("Please fill all required fields");
    } else {
      setModal("scale-100");
      setLoading({ show: true, msg: "Nft..." });

      try {
        // Do something with the form data
        setLoading(true);
        
    
        

        await handlrBundlrUpload();
        await getContentIdFromLocalStorage()

        setLoading(false);
        resetForm();

        toast.success("Nft successfully minted!");
      } catch (error) {
        console.log(error);
        toast.error("An error occurred while minting the Nft");
      }
    }
  };

  const projectDeadlineInHours = 24; // Replace this with your project deadline in hours
  const projectDeadlineInMillis = projectDeadlineInHours * 60 * 60 * 1000;
  const [remainingTime, setRemainingTime] = useState(projectDeadlineInMillis);



  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevRemainingTime) => Math.max(0, prevRemainingTime - 1000));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function formatTime(time) {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }


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
                  htmlFor="price"
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
                  htmlFor="description"
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

              {/* totalShares input */}
              <div className="pb-6 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="description"
                >
                  Nft Total Shares
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="totalShares"
                  type="number"
                  name="totalShares"
                  value={totalShares}
                  onChange={handleChange}
                  placeholder="input 1 or more"
                />
              </div>

              {/* deadline input */}
              <div className="pb-6 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="description"
                >
                  Nft Deadline
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="deadline"
                  type="datetime-local"
                  value={deadline}
                  name="deadline"
                  onChange={handleChange}
                  placeholder="input 1 or more"
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
                  value=""
                  id="picture"
                  onChange={handleChange}
                  type="file"
                  accept="image/png"
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
                  htmlFor="Category"
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
                  <option value="edit this later">
                    Select the category of your project
                  </option>
                  <option value="edit this later">picture Nft</option>
                  <option value="edit this lateer">Music Nft</option>
                  <option value="edit this later">Video Nft</option>
                  <option value="edit this later">Fractional ownership</option>
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
                  disabled={loading}
                >
                  {loading ? "Minting..pls wait" : "Mint"}
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
