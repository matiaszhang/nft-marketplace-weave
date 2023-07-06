import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDropzone } from "react-dropzone";

export default function Create(props) {
  //function for adding image to input
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  //files to select

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <Navbar />
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
            <p className="text-gray-50 text-[10px] sm:text-[18px] pt-[10px] text-center font-normal leading-7">
              Mint or create nfts by filling out the form below
            </p>
          </div>

          <div
            className="w-full  items-center 
          justify-center flex flex-col pb-5 "
          >
            <form className="shadow-md rounded-lg px-8  flex flex-col ">
              {/* title input */}
              <div className="pb-5 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  for="title"
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
                  type="text"
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
                  for="picture"
                >
                  Add NFT
                </label>
              </div>

              {/* dropzone section for the image */}
              <div className="bg-white rounded-md flex flex-col  ">
                <input
                  className="
                  
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  {...getInputProps()}
                />
                <div className="flex flex-col items-center justify-center sm:pt-[50px] w-[22px] sm:w-[50px] h-[50px]">
                  <img
                    className="flex"
                    src="./images/addNft.png"
                    alt="addNfts"
                  />
                </div>

                <p
                  className="pt-[10px] text-center text-gray-700 
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
                <ul>{files}</ul>
              </aside>

              {/* category input */}
              <div className="pt-6 pb-5 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  for="Category"
                >
                  Category
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="Category"
                  type="text"
                  placeholder="Select the category of your project"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
