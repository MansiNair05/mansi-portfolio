import "../styles/projects.css";
import projects from "../data/projects";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <div className="container">
        <p className="small-heading">MY PROJECTS</p>

        <h2 className="section-title">Featured Work</h2>

        {projects.map((project, index) => (
          <div
            className={`project ${index % 2 === 0 ? "" : "reverse"}`}
            key={index}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <span className="project-duration">{project.duration}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  {project.buttonText}
                  <FaArrowRight />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
