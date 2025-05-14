import React from "react";
import "../index.css";
import "../responsiveness.css";

const projectData = [
  {
    title: "Project Title 1",
    description: "This is a sample project description. It provides details about the project.",
    techStack: "HTML, JavaScript, SASS, React",
    liveLink: "#", // Replace with actual live project link
    codeLink: "#", // Replace with actual code repository link
    image: "/images/project1.jpg", // Replace with actual image path
  },
  {
    title: "Project Title 2",
    description: "This is a sample project description. It provides details about the project.",
    techStack: "HTML, JavaScript, SASS, React",
    liveLink: "#",
    codeLink: "#",
    image: "/images/project2.jpg",
  },
  {
    title: "Project Title 3",
    description: "This is a sample project description. It provides details about the project.",
    techStack: "HTML, JavaScript, SASS, React",
    liveLink: "#",
    codeLink: "#",
    image: "/images/project3.jpg",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
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
                className="btn"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;