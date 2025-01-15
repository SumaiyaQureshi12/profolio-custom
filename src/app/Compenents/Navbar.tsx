"use client";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti"; // Hamburger Icon
import { CgClose } from "react-icons/cg"; // Close Icon
import "../../style/navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar-container">
      {/* Desktop Menu */}
      <ul className="navbar-menu">
        <li className="menuLink">
          <a href="#hero">Home</a>
        </li>
        <li className="menuLink">
          <a href="#about">About</a>
        </li>
        <li className="menuLink">
          <a href="#skills">Skills</a>
        </li>
        <li className="menuLink">
          <a href="#contact">Contact</a>
        </li>
        <li className="menuLink">
          <a href="#project">Project</a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? (
          <CgClose size={30} className="text-black" />
        ) : (
          <TiThMenu size={30} className="text-black" />
        )}
      </div>

      {/* Mobile Menu (Dropdown) */}
      <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <li className="menuLink">
          <a href="#hero" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className="menuLink">
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li className="menuLink">
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li className="menuLink">
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
        <li className="menuLink">
          <a href="#project" onClick={closeMenu}>
            Project
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
