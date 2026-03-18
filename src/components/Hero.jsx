import React from "react";
import { FaDownload } from "react-icons/fa";
import "../index.css";
import HeroImg from "../assets/misbaudeen-khalid.png";

function Hero () {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi 👋,</h1>
        <p className="hero-description">
        My name is <br /><span>Khalid Misbaudeen.</span> <br />A Software Engineer.
        </p>
        <button className="hero-button"><a href="https://drive.google.com/file/d/1RRj2dULOxz0E3P4JVHCl4phjrqrtc_am/view?usp=drivesdk" target="_blank">Download Resume <FaDownload /></a></button>
      </div>

      <div className="hero-image">
        <img src={HeroImg} alt="" />
      </div>
    </section>
  );
}


export default Hero;