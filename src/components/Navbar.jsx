import React, { useState, useEffect } from "react";
import "../index.css";
import "../responsiveness.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(".navbar")) {
                closeMenu();
            }
        };

        const handleScroll = () => {
            closeMenu();
        };

        if (isMenuOpen) {
            document.addEventListener("click", handleOutsideClick);
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-logo">My Logo</div>
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <span className="cancel-icon">✖</span>
                ) : (
                    <>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </>
                )}
            </div>
            <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
                <li className="navbar-link">Home</li>
                <li className="navbar-link">About</li>
                <li className="navbar-link">Tech Stack</li>
                <li className="navbar-link">Projects</li>
                <li className="navbar-link">Contact</li>
            </ul>
            <div className="navbar-buttons">
                <div className="navbar-button">Resume</div>
                <div className="navbar-button">LinkedIn</div>
                <div className="navbar-button">GitHub</div>
            </div>
        </nav>
    );
}

export default Navbar;