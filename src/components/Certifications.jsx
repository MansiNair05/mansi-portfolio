import "../styles/certifications.css";
import certifications from "../data/certifications";
import { FaAward } from "react-icons/fa";

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
      data-aos="fade-up"
    >
      <div className="container">
        <p className="small-heading">CERTIFICATIONS</p>

        <h2 className="section-title">Learning Beyond the Classroom</h2>

        <div className="certification-grid">
          {certifications.map((item, index) => (
            <div className="certificate-card" key={index}>
              <FaAward className="award-icon" />

              <h3>{item.title}</h3>

              <p>{item.provider}</p>

              <span>{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
