import React, { useState, useEffect } from "react";
import { FaGithub, FaDownload, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { RESUME_URL } from "../constants";

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        
        <a className="footer-logo" href="#home">Khalid-Dev.</a>

        
        <div className="footer-contact">
          <a href="tel:+2349020486602">+234 902 048 6602</a>
          <a href="mailto:khalidmisbaudeen04@gmail.com">khalidmisbaudeen04@gmail.com</a>
        </div>

        
        <div className="footer-icons">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="Download resume">
              <FaDownload aria-hidden="true" />
          </a>
            <a href="https://github.com/khalid-dev24" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" />
          </a>
            <a href="https://linkedin.com/in/khalid-misbaudeen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
          </a>
        </div>
      </div>

      
      <div className="footer-bottom">
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#stack">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-credit">
          Designed and built by Khalid Misbaudeen.
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top" title="Scroll to top">
          <FaArrowUp aria-hidden="true" />
        </button>
      )}
    </footer>
  );
};

export default Footer;