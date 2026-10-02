import React from "react";
import Imomotimi from "../assets/imomotimi.png";
import Bigfix from "../assets/bigfix.png";
import EnterpriseOne from "../assets/enterpriseone.png";
import FastraSuite from "../assets/fastra-suite.png"
import Staffing from "../assets/25thandstaffing.png"

const projectData = [
  {
    title: "25th & Staffing Website",
    description: "A responsive digital presence for a staffing firm, built with reusable React components and clear service-focused pages.",
    techStack: "React, CSS, Tailwind CSS, JavaScript, TypeScript",
    liveLink: "https://25thandstaffing.com", 
    image: Staffing, 
  },
  {
    title: "EnterpriseOne Website",
    description: "A polished corporate website that organizes Enterprise One's services into a clear, responsive experience.",
    techStack: "React, HTML, CSS, JavaScript",
    liveLink: "https://enterpriseone.com.ng", 
    image: EnterpriseOne, 
  },
  {
    title: "Bigfix Website",
    description: "A responsive company website that brings BigFix Integrated Technologies' services and business information together.",
    techStack: "React, HTML, CSS, JavaScript",
    liveLink: "https://bigfixtech.com",
    image: Bigfix,
  },
  {
    title: "FastraSuite Website",
    description: "A product-focused website introducing FastraSuite's enterprise management platform, key features, and user roles.",
    techStack: "React, HTML, CSS, JavaScript",
    liveLink: "https://fastrasuite.com",
    image: FastraSuite,
  },
  {
    title: "Imomotimi Dancing Competition Website",
    description: "A one-page event experience that brings the competition countdown, venue, and essential visitor details together.",
    techStack: "HTML, CSS, JavaScript",
    liveLink: "https://imomotimi-dancing-competition.netlify.app/",
    image: Imomotimi,
  },
  
];

const Projects = () => {
  return (
    <section className="projects-page" id="projects">
      <div className="projects-section">
        {/* Header and Description */}
        <div className="projects-header" data-reveal>
          <h2>My Projects</h2>
          <p>
            A selection of web experiences I have built for businesses, products, and events.
          </p>
        </div>
      </div> 
      <div className="projects-grid">

        {projectData.map((project, index) => (
          <article
            className="project-card"
            data-reveal
            key={project.title}
            style={{ "--reveal-delay": `${index * 90}ms` }}
          >
            <img
              className="project-image"
              src={project.image}
              alt={`${project.title} website preview`}
              loading="lazy"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">
                <strong>Tech stack:</strong> {project.techStack}
              </p>
              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  aria-label={`Visit ${project.title}`}
                >
                  Live Preview
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;