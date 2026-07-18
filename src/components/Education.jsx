import "../styles/education.css";
import education from "../data/education";

function Education() {
  return (
    <section id="education" className="education-section" data-aos="fade-up">
      <div className="container">
        <p className="small-heading">EDUCATION</p>

        <h2 className="section-title">My Academic Journey</h2>

        <div className="education-timeline">
          {education.map((item, index) => (
            <div className="education-item" key={index}>
              <div className="circle"></div>

              <div className="education-card">
                <span className="year">{item.year}</span>

                <h3>{item.degree}</h3>

                <h4>{item.college}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
