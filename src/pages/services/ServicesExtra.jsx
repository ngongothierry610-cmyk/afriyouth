import React from "react";
import { Link } from "react-router-dom";
import "./ServicesExtra.css";

const processSteps = [
  {
    number: "01",
    title: "Frame the challenge",
    description: "Share the context, intended users, constraints and the decisions at stake.",
  },
  {
    number: "02",
    title: "Co-design the approach",
    description: "Agree methods, roles, ethical safeguards, outputs and a realistic scope.",
  },
  {
    number: "03",
    title: "Make, learn, adapt",
    description: "Work in feedback loops, share findings and define practical next steps.",
  },
];

const resourceItems = [
  {
    id: 1,
    tag: "SAMPLE / PLANNING GUIDE",
    title: "Write a stronger research brief",
    description: "Clarify the question, the intended decision and whose perspective needs to be included.",
  },
  {
    id: 2,
    tag: "SAMPLE / WORKSHOP TOOL",
    title: "Plan a community design sprint",
    description: "Make space for lived experience, diverse ideas and a simple test of your assumptions.",
  },
  {
    id: 3,
    tag: "SAMPLE / LEARNING CANVAS",
    title: "Measure what matters",
    description: "Connect your activities to meaningful outcomes and manageable indicators.",
  },
];

export default function ServicesExtra() {
  return (
    <div className="services-extra-wrapper">
      {/* SECTION 1: WORKING TOGETHER */}
      <section className="services-process-section">
        <div className="services-extra-container">
          <div className="services-process-header">
            <div className="services-subtag">
              <span className="subtag-line"></span>
              <span>WORKING TOGETHER</span>
            </div>
            <h2 className="services-section-title">
              A clear brief. A collaborative process.
            </h2>
            <p className="services-section-subtitle">
              Every engagement starts with the decision you need to make, the people it affects and the evidence already available.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.number} className="process-card">
                <div className="process-number-row">
                  <span className="process-number">{step.number}</span>
                  <span className="process-arrow">↗</span>
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: RESOURCES */}
      <section className="services-resources-section">
        <div className="services-extra-container">
          <div className="services-resources-header">
            <div className="services-subtag">
              <span className="subtag-line"></span>
              <span>RESOURCES</span>
            </div>
            <h2 className="services-section-title">Start with something useful.</h2>
            <p className="services-section-subtitle">
              A small resource shelf for planning evidence-informed and people-centered work.
            </p>
          </div>

          <div className="resources-notice">
            <span className="notice-bar"></span>
            <p>
              Sample resources · These are proposed tools, not published research or downloadable files.
            </p>
          </div>

          <div className="resources-grid">
            {resourceItems.map((item) => (
              <div key={item.id} className="resource-card">
                <span className="resource-tag">{item.tag}</span>
                <h3 className="resource-title">{item.title}</h3>
                <p className="resource-desc">{item.description}</p>
                <div className="resource-footer">
                  <Link to="/blog" className="resource-link">
                    Explore resource concept <span>↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LET'S MOVE FORWARD (CTA) */}
      <section className="services-cta-section">
        <div className="services-extra-container services-cta-container">
          <div className="services-cta-left">
            <span className="cta-subtag">LET’S MOVE FORWARD</span>
            <h2 className="services-cta-title">Bring us your next big question.</h2>
            <p className="services-cta-subtitle">
              Tell us what you are trying to understand or change. We can start by defining a useful brief together.
            </p>
          </div>

          <div className="services-cta-right">
            <Link to="/contact" className="request-service-cta-btn">
              Request a service <span>↗</span>
            </Link>
            <p className="services-cta-note">A shared ambition. A practical first step.</p>
          </div>
        </div>
      </section>
    </div>
  );
}