import React from "react";
import "./Accountability.css";

const statsData = [
  {
    id: 1,
    status: "ILLUSTRATIVE · NOT VERIFIED",
    value: "1,200+",
    description: "Demo value for layout exploration only.",
    dark: false,
  },
  {
    id: 2,
    status: "ILLUSTRATIVE · NOT VERIFIED",
    value: "32",
    description: "Demo value for layout exploration only.",
    dark: true,
  },
  {
    id: 3,
    status: "ILLUSTRATIVE · NOT VERIFIED",
    value: "12",
    description: "Demo value for layout exploration only.",
    dark: false,
  },
];

export default function Accountability() {
  return (
    <section className="accountability-section">
      <div className="accountability-container">
        <div className="accountability-header">
          <div className="accountability-subtag">
            <span className="subtag-line"></span>
            <span>ACCOUNTABILITY MATTERS</span>
          </div>
          <h2 className="accountability-title">Progress we can learn from.</h2>
          <p className="accountability-subtitle">
            Our ambition is to track participation, ideas tested and evidence put to use — not just activity. These figures demonstrate the future reporting format, not achieved results.
          </p>
        </div>

        <div className="stats-grid">
          {statsData.map((item) => (
            <div
              key={item.id}
              className={`stat-card ${item.dark ? "stat-card-dark" : ""}`}
            >
              <span className="stat-status">{item.status}</span>
              <h3 className="stat-value">{item.value}</h3>
              <p className="stat-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="accountability-footer-note">
          <p>Illustrative placeholder statistics only. Verified reporting, methods and time periods will be added when available.</p>
        </div>
      </div>
    </section>
  );
}