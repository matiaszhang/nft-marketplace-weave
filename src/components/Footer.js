import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div
      className="px-[30px] md:px-[80px] py-[60px] bg-gradient-to-r
       from-fuchsia-900
         to-slate-950  grid grid-cols-1 
         md:flex md:flex-row gap-4"
    >
      <div className="md:flex flex-wrap md:flex-row gap-4">
        <div className="md:w-[519px] md:h-[88px] md:mt-[20px]">
          <img className="w-[110px] md:w-auto cursor-pointer" src="/images/logo.png" alt="logo" />
          <p className="text-opacity-90 py-[15px] text-white text-[10px] md:text-[18px] font-normal">
            Sculpting the Future of Digital Art
          </p>
          <div className="flex flex-row cursor-pointer space-x-5 text-white">
            <FaTwitter />
            <SiDiscord />
            <HiOutlineMail />
          </div>
        </div>
        <div className="md:flex justify-center items-start md:gap-10">
          <div className="flex flex-row space-x-10">
            <div className="pt-[20px] sm:pt-0">
              <p className="text-gray-50 text-[25px] py-2 md:text-[40px] font-semibold">Product</p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">All NFTs</p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Photography</p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Videography</p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Music</p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Collectables</p>
            </div>

            <div className="pt-[20px] sm:pt-0">
              <p className="text-gray-50 text-[25px] py-2 md:text-[40px] font-semibold">Company</p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Real Work</p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal"></p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">About & Contact</p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Music</p>
              <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Careers</p>
            </div>
          </div>

          <div className="pt-[20px] sm:pt-0">
            <p className="text-gray-50 text-[25px] py-2 md:text-[40px] font-semibold">Resources</p>
            <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Blog</p>
            <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Help & About</p>
            <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Music</p>
            <p className="text-gray-50 text-[10px] py-2 md:text-[20px] font-normal">Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
