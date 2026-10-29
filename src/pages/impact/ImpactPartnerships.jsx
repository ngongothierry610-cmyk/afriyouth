import React from "react";
import { Link } from "react-router-dom";
import "./ImpactPartnerships.css";

const collaborationAreas = [
  {
    id: 1,
    title: "Research & policy partnerships",
    description: "Co-develop evidence agendas and create spaces for meaningful youth participation in decisions.",
  },
  {
    id: 2,
    title: "Innovation & enterprise ecosystems",
    description: "Host design challenges, offer practitioner mentorship and support early-stage experimentation.",
  },
  {
    id: 3,
    title: "Learning & sustainable futures",
    description: "Share methods, explore future scenarios and strengthen impact measurement together.",
  },
];

export default function ImpactPartnerships() {
  return (
    <section className="impact-partnerships-section">
      <div className="impact-partnerships-container">
        <div className="impact-partnerships-left">
          <span className="impact-partnerships-subtag">COLLABORATION AREAS</span>
          <h2 className="impact-partnerships-title">
            Build the conditions for youth–led change.
          </h2>
          <p className="impact-partnerships-desc">
            Partnership can mean a shared research question, a place to test an idea, expertise for a cohort or resources that make participation more accessible.
          </p>
          <p className="impact-partnerships-desc">
            We start with a clear purpose, shared responsibilities and a plan for learning — not a logo wall.
          </p>
          <div className="impact-partnerships-action">
            <Link to="/contact" className="partner-with-us-btn">
              Partner With Us <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="impact-partnerships-right">
          {collaborationAreas.map((area) => (
            <div className="collaboration-item" key={area.id}>
              <h3 className="collaboration-title">{area.title}</h3>
              <p className="collaboration-desc">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}