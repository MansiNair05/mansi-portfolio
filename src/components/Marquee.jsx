import "../styles/marquee.css";

function Marquee() {
  const items = [
    "SOFTWARE ENGINEERING",
    "DOCUMENTATION",
    "CONTINUOUS LEARNING",
    "TEAM COLLABORATION",
    "REACT.JS",
    "PRODUCT THINKING",
    "CLIENT COMMUNICATION",
    "REQUIREMENT ANALYSIS",
    "PYTHON",
    "UI ENGINEERING",
    "RESPONSIVE DESIGN",
    "API INTEGRATION",
  ];

  return (
    <section className="marquee-section">
      <div className="marquee">
        <div className="track">
          {[...items, ...items].map((item, index) => (
            <span key={index}>
              {item}
              <span className="star"> ✦ </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marquee;
