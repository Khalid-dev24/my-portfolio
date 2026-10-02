import React from "react";
import Frontend from "../assets/frontend.jpg";
import Foundation from "../assets/foundation.jpeg";
import Beyond from "../assets/beyond.jpeg";
import Essentials from "../assets/essentials.jpeg";
import GenerativeAI from "../assets/generative-ai.jpg";
import DsaCertificate from "../assets/dsa-cert.png";



const certificates = [
    {
    image: DsaCertificate,
    title: "Data Structures and Algorithms",
    alt: "Data structures and algorithms certificate"
  },

     {
    image: GenerativeAI,
    link: "https://www.linkedin.com/learning/certificates/080edac3ddd3fa9dbd47bcdbd0c291faed756c407e5e805140faf8fe0946e417",
    title: "Generative AI",
    alt: "Generative AI certificate"
  },
    {
    image: Essentials,
    link: "https://www.linkedin.com/learning/certificates/5c9c41b3c54c7c2c3ca846bdc0969048f4ef70048ec36b8180a7fd4e4eb8c9cc",
    title: "Programming Foundations",
    alt: "Programming foundations certificate"
  },
    
    {
    image: Beyond,
    link: "https://www.linkedin.com/learning/certificates/5c9c41b3c54c7c2c3ca846bdc0969048f4ef70048ec36b8180a7fd4e4eb8c9cc",
    title: "Programming Beyond the Basics",
    alt: "Programming certificate"
  },

    {
    image: Foundation,
    link: "https://www.udemy.com/certificate/UC-270e7c35-abc8-49ed-bdc1-96af5f3c59ab/",
    title: "Programming Fundamentals",
    alt: "Programming fundamentals certificate"
  },
  
   {
    image: Frontend,
    link: "https://www.udemy.com/certificate/UC-dd9ba58d-6cfb-40b5-ac19-438ae39aabff/",
      title: "Frontend Development",
    alt: "Frontend Developer Certification"
   },
 
];

const Certificates = () => (
  <section className="certificates-section" id="certificates">
    <p className="section-eyebrow">Learning in progress</p>
    <h2 data-reveal>Certificates</h2>
    <p className="certificates-intro">Selected courses and credentials that keep my practice growing.</p>
    <div className="certificates-grid">
        {certificates.map((cert) => {
          const content = (
            <>
              <img src={cert.image} alt={cert.alt} className="certificate-img" loading="lazy" />
              <span>{cert.title}</span>
            </>
          );

          return cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-card"
              data-reveal
              key={cert.title}
            >
              {content}
            </a>
          ) : (
            <div className="certificate-card" data-reveal key={cert.title}>{content}</div>
          );
        })}
    </div>
  </section>
);

export default Certificates;