import React from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import HeroImg from "../assets/misbaudeen-khalid.png";
import { RESUME_URL } from "../constants";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">Software engineer · frontend / backend / AI</p>
        <h1 className="hero-title">Khalid<br /><span>Misbaudeen.</span></h1>
        <p className="hero-description">
          I build end-to-end digital products, combining thoughtful frontend experiences, dependable backend systems, and practical AI integrations for teams across industries.
        </p>
        <div className="hero-actions">
          <a className="hero-button" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            Download resume <FaDownload aria-hidden="true" />
          </a>
          <a className="hero-work-link" href="#projects">
            Explore my work <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={HeroImg} alt="Khalid Misbaudeen in a dark suit" />
      </div>
    </section>
  );
}

export default Hero;