import React from "react";
import "../index.css";
import "../responsiveness.css";
import Imomotimi from "../assets/imomotimi.png";
import Bigfix from "../assets/bigfix.png";
import EnterpriseOne from "../assets/enterpriseone.png";

const projectData = [
  {
    title: "EnterpriseOne Website",
    description: "Developed a modern business website for Enterprise One with React. Implemented reusable components, responsive layout, and smooth scrolling to present services clearly and professionally across all devices.",
    techStack: "React, HTML, CSS, JavaScript",
    liveLink: "https://enterpriseone.com.ng", 
    codeLink: "#", 
    image: EnterpriseOne, 
  },
  {
    title: "Bigfix Website",
    description: "Built a responsive website for BigFix Integrated Technologies using React. Focused on clean UI components, smooth navigation, and organized sections to showcase IT services. Ensured mobile compatibility and dynamic content rendering.",
    techStack: "React, HTML, CSS, JavaScript,",
    liveLink: "https://bigfixtech.com",
    codeLink: "#",
    image: Bigfix,
  },
  {
    title: "Imomotimi Dancing Competition Website",
    description: "Developed a responsive one-page website for Imomotimi Dancing Competition with a clean layout, smooth scrolling, and structured sections like Countdown, Location, and Contact. Designed for clarity, mobile compatibility, and ease of navigation.",
    techStack: "HTML, CSS, JavaScript",
    liveLink: "https://imomotimi-dancing-competition.netlify.app/",
    codeLink: "#",
    image: Imomotimi,
  },
  
];

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-section" id="projects">
        {/* Header and Description */}
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>
            Here are some of the projects I have worked on (ones I am allowed to showcase).
          </p>
        </div>
      </div> 
      <div className="projects-grid" id="projects">

        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div
              className="project-image"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
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
                  rel="noreferrer"
                  className="btn"
                >
                  Live Preview
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;