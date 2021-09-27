import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuHotdog } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <Link to="#" className="logo">
        <IoFastFoodSharp />
        Food
      </Link>
      <div id="menu-bar" className="fas fa-bars" onClick={() => setMenu(!menu)}>
        {!menu ? <CgMenuHotdog /> : <FaTimes />}
      </div>
      <nav className={`${!menu ? "navbar" : "navbar active"}`}>
        <Link to="#" onClick={() => setMenu(false)}>
          Home
        </Link>
        <Link to="#" onClick={() => setMenu(false)}>
          About
        </Link>
        <Link to="#" onClick={() => setMenu(false)}>
          Foods
        </Link>
        <Link to="#" onClick={() => setMenu(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
