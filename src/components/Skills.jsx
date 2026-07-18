import "../styles/skills.css";
import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <div className="container">
        <p className="small-heading">MY SKILLS</p>

        <h2 className="section-title">Technologies & Professional Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.title}</h3>

              <div className="tags">
                {skill.items.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
    