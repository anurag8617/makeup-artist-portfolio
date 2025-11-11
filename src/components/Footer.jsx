import React from "react";
import "./Footer.css";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="overlay"></div> {/* For dark overlay effect */}
      <div className="container footer-content">
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/makeoveralkasharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaPinterestP />
          </a>
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} AlkaMakeover. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
