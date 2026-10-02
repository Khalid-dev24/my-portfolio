import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <nav className="navbar" ref={navbarRef} aria-label="Main navigation">
      <a className="logo" href="#home">Khalid-Dev.</a>
      <div className="nav-links">
        {navigationLinks.map((link) => (
          <a href={link.href} key={link.href}>{link.label}</a>
        ))}
      </div>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setIsDarkMode((current) => !current)}
          aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
          aria-pressed={isDarkMode}
        >
          {isDarkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
        </button>
        <button
          className="hamburger"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <div
        className={`sidebar ${isOpen ? "active" : ""}`}
        id="mobile-navigation"
        ref={sidebarRef}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {navigationLinks.map((link, index) => (
          <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
            <span className="sidebar-count" aria-hidden="true">0{index + 1}</span>
            <span>{link.label}</span>
            <FaArrowRight aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
