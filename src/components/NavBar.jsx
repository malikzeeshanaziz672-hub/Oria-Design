
import React, { useState } from "react";
import "../GlobalCss/NavBar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navBar-container">
      <div className="logo">
        <img src="/Images/Oria - Main logo 1.png" alt="Oria Logo" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      <ul className={`navlinks ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/features" onClick={() => setMenuOpen(false)}>
            Features
          </NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/newsletter" onClick={() => setMenuOpen(false)}>
            Newsletter
          </NavLink>
          <NavLink to="/faqs" onClick={() => setMenuOpen(false)}>
            FAQs
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>

       
      </ul>

      <div className="navBar-btn desktop-btn">
        <button>Join Now</button>
      </div>
    </nav>
  );
};

export default NavBar;
