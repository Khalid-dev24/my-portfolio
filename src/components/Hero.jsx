import React from "react";
import { FaDownload } from "react-icons/fa";
import "../index.css";
import HeroImg from "../assets/khalid.jpeg";

function Hero () {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi 👋,</h1>
        <p className="hero-description">
        My name is <br /><span>Khalid Misbaudeen.</span> <br />A Software Developer.
        </p>
        <button className="hero-button">Download Resume <FaDownload /></button>
      </div>

      <div className="hero-image">
        <img src={HeroImg} alt="" />
      </div>
    </section>
  );
}


export default Hero;