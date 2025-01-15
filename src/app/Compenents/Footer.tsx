import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../../style/footer.css"; 

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Footer Content */}
      <div className="container mx-auto px-4">
        {/* Copyright Text */}
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} sumaiya. All Rights Reserved.
        </p>

        {/* Social Media Links */}
        <div className="footer-social">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Additional Links */}
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
