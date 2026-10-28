import React from "react";
import "./ProgramsValue.css";

const learningPoints = [
  {
    id: 1,
    title: "A practical output",
    description: "A research brief, tested prototype or early venture model grounded in a real need.",
  },
  {
    id: 2,
    title: "A stronger practice",
    description: "Tools for ethical inquiry, creative problem-solving and clear communication.",
  },
  {
    id: 3,
    title: "A learning community",
    description: "Peer feedback and collaboration across backgrounds and disciplines.",
  },
];

export default function ProgramsValue() {
  return (
    <section className="programs-value-section">
      <div className="programs-value-container">
        <div className="programs-value-left">
          <span className="programs-value-subtag">LEARNING BY DOING</span>
          <h2 className="programs-value-title">
            Leave with more than a certificate.
          </h2>
          <p className="programs-value-subtitle">
            The proposed experience is built around practice: a useful question, a small experiment and a clear next step. Progress means being able to explain your choices and learn from feedback.
          </p>
        </div>

        <div className="programs-value-right">
          {learningPoints.map((item) => (
            <div className="program-value-item" key={item.id}>
              <h3 className="program-value-item-title">{item.title}</h3>
              <p className="program-value-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}