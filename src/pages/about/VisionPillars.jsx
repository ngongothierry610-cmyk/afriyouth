import React from "react";
import "./VisionPillars.css";

const pillarsData = [
  {
    id: 1,
    title: "Research",
    description: "Understand lived realities.",
    highlighted: false,
  },
  {
    id: 2,
    title: "Policy",
    description: "Translate evidence into choices.",
    highlighted: false,
  },
  {
    id: 3,
    title: "Design",
    description: "Co-create and test responses.",
    highlighted: true,
  },
  {
    id: 4,
    title: "Entrepreneurship",
    description: "Build viable ways to deliver.",
    highlighted: false,
  },
  {
    id: 5,
    title: "Foresight",
    description: "Anticipate change and adapt.",
    highlighted: false,
  },
];

export default function VisionPillars() {
  return (
    <section className="pillars-section" id="connected-approach">
      <div className="pillars-container">
        <div className="pillars-header">
          <div className="pillars-subtag">
            <span className="subtag-line"></span>
            <span>HOW IT CONNECTS</span>
          </div>
          <h2 className="pillars-title">
            Not separate disciplines. A shared way forward.
          </h2>
          <p className="pillars-subtitle">
            Research helps us see clearly. Policy creates pathways. Design makes ideas useful. Enterprise helps them endure. Foresight keeps us ready for what comes next.
          </p>
        </div>

        <div className="pillars-grid">
          {pillarsData.map((item) => (
            <div
              key={item.id}
              className={`pillar-card ${item.highlighted ? "highlighted" : ""}`}
            >
              <div className="pillar-arrow">
                <span>↗</span>
              </div>
              <h3 className="pillar-card-title">{item.title}</h3>
              <p className="pillar-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="pillars-banner">
          <span className="banner-accent"></span>
          <p className="banner-text">
            Impact measurement runs through every stage: agree what matters, collect evidence ethically, reflect together and improve the next decision.
          </p>
        </div>
      </div>
    </section>
  );
}