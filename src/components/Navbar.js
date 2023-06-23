import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const navRef = useRef(null);

  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

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
      <nav className=" md:items-center md:flex justify-between" ref={navRef}>
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
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
        </div>

        <div>
          {/** connect wallet */}

          <button
            className="text-[12px] md:text-[20px] font-semibold 
         text-white h-[50px]  w-[110px] md:w-[186px] px-[2px] 
          py-[2px] md:py-[10px] md:px-[20px] 
          bg-gradient-to-br from-pink-700 to-violet-950 rounded-lg 
          justify-center items-center gap-2 flex"
          >
            Connect wallet
          </button>
        </div>
        {/** close icon connection */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {/**show icon connection */}
      <button className="nav-btn text-wh" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
