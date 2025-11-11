import React, { useState } from "react";
import "./Navbar.css"; // We will create this CSS file next

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="nav-logo">
          AlkaMakeover<span>.</span>
        </a>

        {/* This is the mobile menu. 'active' class slides it in. */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-link" onClick={toggleMenu}>
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className={isOpen ? "nav-toggle active" : "nav-toggle"}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
