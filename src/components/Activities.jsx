import "../styles/activities.css";
import activities from "../data/activities";
import { FaUsers } from "react-icons/fa";

function Activities() {
  return (
    <section id="activities" className="activities-section" data-aos="fade-up">
      <div className="container">
        <p className="small-heading">EXTRACURRICULAR</p>

        <h2 className="section-title">Activities & Community Involvement</h2>

        <div className="activity-grid">
          {activities.map((item, index) => (
            <div className="activity-card" key={index}>
              <FaUsers className="activity-icon" />

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
