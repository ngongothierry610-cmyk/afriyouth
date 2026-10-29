import React from "react";
import { Link } from "react-router-dom";
import "./ImpactPurposeAndCTA.css";

const stepsData = [
  {
    number: "01",
    title: "Find common ground",
    description: "Agree the challenge, the communities involved and what each collaborator brings.",
  },
  {
    number: "02",
    title: "Design a useful pilot",
    description: "Define scope, decision rights, resources and safeguards before the work begins.",
  },
  {
    number: "03",
    title: "Learn and share",
    description: "Review evidence together and decide whether to adapt, deepen or stop the work.",
  },
];

export default function ImpactPurposeAndCTA() {
  return (
    <div className="impact-purpose-cta-wrapper">
      {/* SECTION 1: START SMALL. LEARN TOGETHER. */}
      <section className="impact-purpose-section">
        <div className="impact-purpose-container">
          <div className="impact-purpose-header">
            <div className="impact-subtag">
              <span className="subtag-line"></span>
              <span>START SMALL. LEARN TOGETHER.</span>
            </div>
            <h2 className="impact-purpose-title">
              A partnership with a clear purpose.
            </h2>
            <p className="impact-purpose-subtitle">
              Shared ambition works best with clear roles, ethical practice and honest expectations.
            </p>
          </div>

          <div className="purpose-steps-grid">
            {stepsData.map((step) => (
              <div key={step.number} className="purpose-step-card">
                <div className="step-number-row">
                  <span className="step-number">{step.number}</span>
                  <span className="step-arrow">↗</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: LET'S MOVE FORWARD (CTA) */}
      <section className="impact-cta-section">
        <div className="impact-cta-container">
          <div className="impact-cta-left">
            <span className="cta-subtag">LET’S MOVE FORWARD</span>
            <h2 className="impact-cta-title">
              What could we make possible together?
            </h2>
            <p className="impact-cta-subtitle">
              Bring a shared question, a practical challenge or a way to enable youth-led inquiry and innovation.
            </p>
          </div>

          <div className="impact-cta-right">
            <Link to="/contact" className="start-conversation-cta-btn">
              Start a conversation <span>↗</span>
            </Link>
            <p className="impact-cta-note">A shared ambition. A practical first step.</p>
          </div>
        </div>
      </section>
    </div>
  );
}