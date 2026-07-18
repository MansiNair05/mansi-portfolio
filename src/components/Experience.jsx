import "../styles/experience.css";
import experience from "../data/experience";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <p className="small-heading">EXPERIENCE</p>
        <h2 className="section-title">My Journey</h2>

        <div className="timeline">
          {experience.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <span>{item.duration}</span>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
