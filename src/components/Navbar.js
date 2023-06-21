import { NavLink } from "react-router-dom";

import { useState } from "react";

function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <nav className=" h-auto md:h-24 p-2 bg-blue-200 max-w-6xl mx-auto flex justify-between md:items-center">
      <div>
        <img src="./images/logo.png" alt="logo" />
        <NavLink className="nav-link" onClick={clickHandler} to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" onClick={clickHandler} to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" onClick={clickHandler} to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
