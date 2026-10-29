import React from "react";
import "./ImpactPublications.css";

const publicationsData = [
  {
    id: 1,
    tag: "SAMPLE CONCEPT / NOT PUBLISHED",
    title: "Youth livelihoods, through a local lens",
    type: "RESEARCH NOTE",
    description: "A proposed synthesis of questions on work, skills and access to opportunity.",
    status: "Publication planned · No file available",
    variant: "dark",
  },
  {
    id: 2,
    tag: "SAMPLE CONCEPT / NOT PUBLISHED",
    title: "Designing with communities",
    type: "PRACTICE GUIDE",
    description: "A proposed field guide to inclusive discovery, co-design and prototype testing.",
    status: "Publication planned · No file available",
    variant: "gold",
  },
  {
    id: 3,
    tag: "SAMPLE CONCEPT / NOT PUBLISHED",
    title: "Imagining youth-led futures",
    type: "FORESIGHT BRIEF",
    description: "A proposed exploration of signals, scenarios and choices for long-term resilience.",
    status: "Publication planned · No file available",
    variant: "dark",
  },
];

export default function ImpactPublications() {
  return (
    <section className="impact-publications-section">
      <div className="impact-publications-container">
        <div className="impact-publications-header">
          <div className="impact-subtag">
            <span className="subtag-line"></span>
            <span>PUBLICATIONS & RESOURCES</span>
          </div>
          <h2 className="impact-publications-title">
            Learning should travel further.
          </h2>
          <p className="impact-publications-subtitle">
            A proposed editorial collection for sharing insights beyond the lab. All titles below are sample publication concepts, not published research.
          </p>
        </div>

        <div className="publications-grid">
          {publicationsData.map((pub) => (
            <div key={pub.id} className="publication-col">
              <div className={`publication-card ${pub.variant === "gold" ? "gold-card" : "dark-card"}`}>
                <span className="pub-card-tag">{pub.tag}</span>
                <h3 className="pub-card-title">{pub.title}</h3>
                <div className="pub-card-arrow">↗</div>
              </div>
              <div className="pub-meta-content">
                <span className="pub-type">{pub.type}</span>
                <p className="pub-desc">{pub.description}</p>
                <span className="pub-status">{pub.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}