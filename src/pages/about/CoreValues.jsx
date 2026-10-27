import React from "react";
import "./CoreValues.css";

const valuesData = [
  {
    id: 1,
    title: "Innovation",
    description: "Stay curious. Test new approaches and learn from what does not work.",
  },
  {
    id: 2,
    title: "Youth Empowerment",
    description: "Young people set questions, make decisions and lead the work — not just participate.",
  },
  {
    id: 3,
    title: "Sustainability",
    description: "Build solutions that respect ecological limits and can endure beyond a project.",
  },
  {
    id: 4,
    title: "Global Impact",
    description: "Connect local insight with wider learning, without losing the context that gives it meaning.",
  },
  {
    id: 5,
    title: "Human-Centered Design",
    description: "Listen first. Design with people and make room for perspectives too often overlooked.",
  },
  {
    id: 6,
    title: "Leadership Development",
    description: "Practice responsibility, collaboration and the confidence to help others thrive.",
  },
];

export default function CoreValues() {
  return (
    <section className="core-values-section">
      <div className="core-values-container">
        <div className="core-values-header">
          <div className="core-values-subtag">
            <span className="subtag-line"></span>
            <span>WHAT GUIDES US</span>
          </div>
          <h2 className="core-values-title">Principles we put into practice.</h2>
          <p className="core-values-subtitle">
            Our values are working commitments — shaping how we ask questions, share power and build for the long term.
          </p>
        </div>

        <div className="core-values-grid">
          {valuesData.map((val) => (
            <div className="value-card" key={val.id}>
              <h3 className="value-card-title">{val.title}</h3>
              <p className="value-card-desc">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}