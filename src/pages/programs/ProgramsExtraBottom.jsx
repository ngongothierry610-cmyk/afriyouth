import React from "react";
import { Link } from "react-router-dom";
import "./ProgramsExtraBottom.css";

const nextStepsData = [
  {
    number: "01",
    title: "Find your fit",
    description: "Read the pathway, eligibility and expected commitment. Think about a challenge you care about.",
  },
  {
    number: "02",
    title: "Prepare your story",
    description: "Outline your question or idea, why it matters and what you want to learn. No polished pitch is needed.",
  },
  {
    number: "03",
    title: "Apply when announced",
    description: "Wait for a verified call, then follow the published application and selection process.",
  },
];

const opportunitiesData = [
  {
    id: 1,
    tag: "PROVISIONAL / NOT OPEN",
    title: "Future cohort interest",
    description: "Explore the three sample pathways and prepare a short statement about the question or idea you would bring.",
    linkText: "Ask about future programs ↗",
    to: "/contact",
  },
  {
    id: 2,
    tag: "PROVISIONAL / NOT OPEN",
    title: "Mentors & facilitators",
    description: "A possible pathway for practitioners who can support research, design and venture learning.",
    linkText: "Discuss your expertise ↗",
    to: "/contact",
  },
  {
    id: 3,
    tag: "PROVISIONAL / NOT OPEN",
    title: "Community challenge hosts",
    description: "A possible collaboration for organizations with a grounded challenge and space for youth-led inquiry.",
    linkText: "Start a conversation ↗",
    to: "/contact",
  },
];

export default function ProgramsExtraBottom() {
  return (
    <div className="programs-extra-bottom-wrapper">
      {/* SECTION 1: YOUR NEXT STEPS */}
      <section className="programs-steps-section">
        <div className="programs-extra-container">
          <div className="programs-steps-header">
            <div className="programs-subtag">
              <span className="subtag-line"></span>
              <span>YOUR NEXT STEPS</span>
            </div>
            <h2 className="programs-section-title">
              From curiosity to participation.
            </h2>
            <p className="programs-section-subtitle">
              Use this proposed participation journey to plan ahead. A confirmed call will explain eligibility, selection and support in full.
            </p>
          </div>

          <div className="steps-grid">
            {nextStepsData.map((step) => (
              <div key={step.number} className="step-card">
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

      {/* SECTION 2: CURRENT OPPORTUNITIES */}
      <section className="programs-opportunities-section">
        <div className="programs-extra-container">
          <div className="programs-opportunities-header">
            <div className="programs-subtag">
              <span className="subtag-line"></span>
              <span>CURRENT OPPORTUNITIES</span>
            </div>
            <h2 className="programs-section-title">
              Preparing the ground for what’s next.
            </h2>
            <p className="programs-section-subtitle">
              There are no confirmed open calls shown here. The opportunities below are provisional examples of future ways to engage.
            </p>
          </div>

          <div className="opportunities-grid">
            {opportunitiesData.map((opp) => (
              <div key={opp.id} className="opportunity-card">
                <span className="opportunity-tag">{opp.tag}</span>
                <h3 className="opportunity-title">{opp.title}</h3>
                <p className="opportunity-desc">{opp.description}</p>
                <div className="opportunity-footer">
                  <Link to={opp.to} className="opportunity-link">
                    {opp.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}