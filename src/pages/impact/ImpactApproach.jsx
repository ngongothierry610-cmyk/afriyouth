import React from "react";
import "./ImpactApproach.css";

const impactStats = [
  {
    id: 1,
    tag: "ILLUSTRATIVE · NOT VERIFIED",
    stat: "1,200+",
    label: "Young people engaged",
    note: "Demo value for layout exploration only.",
    highlighted: false,
  },
  {
    id: 2,
    tag: "ILLUSTRATIVE · NOT VERIFIED",
    stat: "32",
    label: "Youth–led ideas prototyped",
    note: "Demo value for layout exploration only.",
    highlighted: true,
  },
  {
    id: 3,
    tag: "ILLUSTRATIVE · NOT VERIFIED",
    stat: "12",
    label: "Evidence briefs developed",
    note: "Demo value for layout exploration only.",
    highlighted: false,
  },
];

export default function ImpactApproach() {
  return (
    <section className="impact-approach-section">
      <div className="impact-approach-container">
        <div className="impact-approach-header">
          <div className="impact-subtag">
            <span className="subtag-line"></span>
            <span>OUR IMPACT APPROACH</span>
          </div>
          <h2 className="impact-title">Count what matters. Explain what changed.</h2>
          <p className="impact-subtitle">
            Participation is a starting point, not the whole story. Our intended reporting connects reach, learning and the use of evidence — with context and limitations made clear.
          </p>
        </div>

        <div className="impact-grid">
          {impactStats.map((item) => (
            <div
              key={item.id}
              className={`impact-card ${item.highlighted ? "highlighted" : ""}`}
            >
              <span className="impact-card-tag">{item.tag}</span>
              <div className="impact-card-stat">{item.stat}</div>
              <h3 className="impact-card-label">{item.label}</h3>
              <p className="impact-card-note">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="impact-notice-banner">
          <span className="notice-bar"></span>
          <p className="notice-text">
            Illustrative placeholder statistics · These are not verified results or a claim of past impact. Future reporting should include time periods, sources, methods and what the figures do not tell us.
          </p>
        </div>
      </div>
    </section>
  );
}