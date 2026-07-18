import "../styles/hero.css";
import profile from "../assets/images/profile1.jpg";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="hero" data-aos="fade-up">
      <div className="hero-left">
        <p className="hero-tag">Welcome to my portfolio 👋</p>

        <h1>
          Building Digital <br />
          Experiences.
        </h1>

        <h2>With Purpose.</h2>

        <p className="hero-desc">{portfolioData.personal.subtitle}</p>

        <div className="hero-buttons">
          <button className="primary-btn">
            View Projects
            <FaArrowRight />
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-box">
          <img src={profile} alt="Mansi Nair" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
