import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaDownload, FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark-mode", !isDarkMode);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="logo">Khalid-Dev.</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#stack">Tech Stack</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

         <div className="dark-mode-switch">
        <span
          className={`icon sun ${!isDarkMode ? "active" : ""}`}
          onClick={() => {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark-mode");
          }}
          style={{ cursor: "pointer" }}
        >
          ☀️
        </span>
        <span className={`toggle-slider ${isDarkMode ? "dark" : "light"}`}></span>
        <span
          className={`icon moon ${isDarkMode ? "active" : ""}`}
          onClick={() => {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark-mode");
          }}
          style={{ cursor: "pointer" }}
        >
          🌙
        </span>
      </div>



        {/* <div className="fa">
          <a href="https://drive.google.com/file/d/1CBtnRtyLr66NCXbu5dvw0YZ5uPPaTLBc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FaDownload className="nav-icon" />
          </a>
          <a href="https://github.com/khalid-dev24" target="_blank" rel="noopener noreferrer">
            <FaGithub className="nav-icon"/>
          </a>
          <a href="https://linkedin.com/in/khalid-misbaudeen" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="nav-icon"/>
          </a>
        </div> */}
      </div>
      
      <div className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`sidebar ${isOpen ? "active" : ""}`} ref={sidebarRef}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Tech Stack</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
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
    </nav>
  );
};

export default Navbar;
