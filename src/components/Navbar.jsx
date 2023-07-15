import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import WalletConnect from "../Blockchain_Service/connect_wallet";
import { Button } from "./elements";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="bg-gradient-to-r from-fuchsia-900
         to-slate-950 sticky top-0 z-40"
    >
      <nav className="container   mx-auto flex items-center justify-between py-4 px-8 md:px-10">
        <div className="flex items-center cursor-pointer">
          <img className="w-[110px] md:w-auto" src="/images/logo.png" alt="logo" />
        </div>

        <div className="hidden md:flex md:items-center">
          <Link to="/">
            <Button variant="secondary">Home</Button>
          </Link>
          <Link to="/explore">
            <Button variant="secondary">Explore</Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary">About us</Button>
          </Link>
          <Link to="/create">
            <Button variant="secondary">Create</Button>
          </Link>
          

        </div>

        <div className="hidden md:flex items-center md:pb-4">
          <WalletConnect>Connect Wallet</WalletConnect>
        </div>

        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed top-0  right-0 bottom-0 left-0 bg-gradient-to-r from-fuchsia-900
         to-slate-950 flex flex-col items-center justify-center"
        >
          <button className="text-white absolute top-4 right-4" onClick={toggleMenu}>
            <FaTimes className="text-2xl" />
          </button>
          <WalletConnect>Connect Wallet</WalletConnect>

          <a className="block text-white text-[15px] font-semibold my-4 hover:text-gray-500" href="/">
            Home
          </a>
          <a className="block text-white text-[15px] font-semibold my-4 hover:text-gray-500" href="/about">
            About Us
          </a>
          <a className="block text-white text-[15px] font-semibold my-4 hover:text-gray-500" href="/Create">
            Create
          </a>
          <a className="block text-white text-[15px] font-semibold my-4 hover:text-gray-500" href="/explore">
            explore
          </a>
=======
          <Link to="/">
            <Button variant="secondary">Home</Button>
          </Link>
          <Link to="/explore">
            <Button variant="secondary">Explore</Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary">About us</Button>
          </Link>
          <Link to="/create">
            <Button variant="secondary">Create</Button>
          </Link>
          

        </div>
      )}
    </header>
  );
};

export default Navbar;
