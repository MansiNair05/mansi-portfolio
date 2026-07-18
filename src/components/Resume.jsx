import "../styles/resume.css";
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <section id="resume" className="resume-section" data-aos="fade-up">
      <div className="container resume-content">
        <p className="small-heading">RESUME</p>

        <h2 className="section-title">Want to know more?</h2>

        <p className="resume-text">
          Download my resume to explore my education, technical skills,
          projects, internships, and achievements.
        </p>

        <a href="/resume.pdf" download className="primary-btn">
          <FaDownload />
          &nbsp;Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
