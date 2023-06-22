import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

import { useState } from "react";

function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className=" flex justify-between p-[60px] bg-gradient-to-r from-fuchsia-900 to-slate-950 ">
      <img
        className="w-[100px] h-[40px] md:w-auto"
        src="./images/logo.png"
        alt="logo"
      />
      <nav className="flex justify-between md:items-center">
        <NavLink
          className="nav-link text-white text-opacity-90 text-[20px] font-normal"
          onClick={clickHandler}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link text-white text-opacity-90
               text-[20px] font-normal"
          onClick={clickHandler}
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className="nav-link text-white text-opacity-90 
              text-[20px] font-normal"
          onClick={clickHandler}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className="nav-link text-white text-opacity-90
               text-[20px] font-normal"
          onClick={clickHandler}
          to="/about"
        >
          faq
        </NavLink>
        <NavLink
          className="nav-link text-white text-opacity-90 
              text-[20px] font-normal"
          onClick={clickHandler}
          to="/contact"
        >
          explore
        </NavLink>
        {/** connect wallet */}
        <button
          className="text-[12px] md:text-[20px] font-semibold 
         text-white h-[50px]  w-[110px] md:w-[186px] px-[2px] 
          py-[2px] md:py-[10px] md:px-[20px] hover:bg-pink-700 
          bg-gradient-to-br from-pink-700 to-violet-950 rounded-lg 
          justify-center items-center gap-2 flex"
        >
          Connect wallet
        </button>
        {/** close icon connection */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {/**show icon connection */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
