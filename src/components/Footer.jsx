import React, { useState, useEffect } from "react";
import { FaGithub, FaDownload, FaLinkedin, FaArrowUp } from "react-icons/fa";
import "../index.css";

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
        
        <div className="footer-logo">
          <h3 className="logo-main">
            {"{024}"} <br />
            <span>Khalid</span>
          </h3>
        </div>

        
        <div className="footer-contact">
          <p>+234 902 048 6602</p>
          <p>khalidmisbaudeen04@gmail.com</p>
        </div>

        
        <div className="footer-icons">
          <a href="https://drive.google.com/file/d/1CBtnRtyLr66NCXbu5dvw0YZ5uPPaTLBc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaDownload className="nav-icon" />
          </a>
          <a href="https://github.com/khalid-dev24" target="_blank" rel="noopener noreferrer">
              <FaGithub className="nav-icon"/>
          </a>
          <a href="https://linkedin.com/in/khalid-misbaudeen" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="nav-icon"/>
          </a>
        </div>
      </div>

      
      <div className="footer-bottom">
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#stack">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-credit">
          Designed and built by <span className="purple">Khalid</span> with <span className="pink">Love & Tea</span>
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;