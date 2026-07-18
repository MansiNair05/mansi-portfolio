import "../styles/about.css";
import portfolioData from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-container">
        <div className="about-left">
          <p className="small-heading">ABOUT ME</p>

          <h2>{portfolioData.about.heading}</h2>
        </div>

        <div className="about-right">
          <p>{portfolioData.about.description}</p>

          <div className="stats">
            {portfolioData.stats.map((item, index) => (
              <div className="stat-card" key={index}>
                <h3>{item.number}</h3>

                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
