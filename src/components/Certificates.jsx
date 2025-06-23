import React from "react";
import Frontend from "../assets/frontend.jpg";
import Foundation from "../assets/foundation.jpeg";
import Beyond from "../assets/beyond.jpeg";
import Essentials from "../assets/essentials.jpeg";


const certificates = [
    {
    image: Essentials,
    link: "https://www.linkedin.com/learning/certificates/5c9c41b3c54c7c2c3ca846bdc0969048f4ef70048ec36b8180a7fd4e4eb8c9cc",
    alt: "Programming Certificate"
  },
    
    {
    image: Beyond,
    link: "https://www.linkedin.com/learning/certificates/5c9c41b3c54c7c2c3ca846bdc0969048f4ef70048ec36b8180a7fd4e4eb8c9cc",
    alt: "Programming Certificate"
  },

    {
    image: Foundation,
    link: "https://www.udemy.com/certificate/UC-270e7c35-abc8-49ed-bdc1-96af5f3c59ab/",
    alt: "Programming Fundamentals Certificate"
  },
  
   {
    image: Frontend,
    link: "https://www.udemy.com/certificate/UC-dd9ba58d-6cfb-40b5-ac19-438ae39aabff/",
    alt: "Frontend Developer Certification"
   },
 
];

const Certificates = () => (
  <section className="certificates-section" id="certificates">
    <h2>Certificates</h2>
    <p>Click any certificate screenshot to view it on the issuing site.</p>
    <div className="certificates-grid">
      {certificates.map((cert, idx) => (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
          key={idx}
        >
          <img src={cert.image} alt={cert.alt} className="certificate-img" />
        </a>
      ))}
    </div>
  </section>
);

export default Certificates;