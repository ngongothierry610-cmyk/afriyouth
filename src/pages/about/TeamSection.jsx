import React from "react";
import "./TeamSection.css";

const teamRoles = [
  {
    id: 1,
    tag: "ILLUSTRATIVE ROLE",
    title: "Research & Policy Lead",
    description:
      "Guides participatory research, ethical evidence gathering and clear recommendations for decision-makers.",
  },
  {
    id: 2,
    tag: "ILLUSTRATIVE ROLE",
    title: "Innovation & Venture Lead",
    description:
      "Connects human-centered design, practical prototyping and sustainable venture development.",
  },
  {
    id: 3,
    tag: "ILLUSTRATIVE ROLE",
    title: "Youth & Learning Lead",
    description:
      "Builds inclusive learning experiences, peer networks and pathways for youth leadership.",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <div className="team-subtag">
            <span className="subtag-line"></span>
            <span>PEOPLE & PRACTICE</span>
          </div>
          <h2 className="team-title">A team built across disciplines.</h2>
          <p className="team-subtitle">
            The work needs rigorous thinkers, empathetic makers and people who know how to turn learning into action.
          </p>
        </div>

        <div className="team-notice">
          <span className="notice-bar"></span>
          <p>
            Illustrative team role profiles · These describe a proposed team structure, not named staff or confirmed appointments.
          </p>
        </div>

        <div className="team-grid">
          {teamRoles.map((role) => (
            <div className="team-card" key={role.id}>
              <span className="role-tag">{role.tag}</span>
              <h3 className="role-title">{role.title}</h3>
              <p className="role-desc">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}