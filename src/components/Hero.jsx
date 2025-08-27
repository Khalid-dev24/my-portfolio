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
        <button className="hero-button"><a href="https://drive.google.com/file/d/10VfebykITzEyk5AxLWQW6y7f0uf91HF7/view?usp=drive_linkhttps://drive.google.com/file/d/10VfebykITzEyk5AxLWQW6y7f0uf91HF7/view?usp=sharing" target="_blank">Download Resume <FaDownload /></a></button>
      </div>

      <div className="hero-image">
        <img src={HeroImg} alt="" />
      </div>
    </section>
  );
}


export default Hero;