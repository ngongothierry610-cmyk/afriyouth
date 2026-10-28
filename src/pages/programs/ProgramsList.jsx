import React from "react";
import { Link } from "react-router-dom";
import "./ProgramsList.css";

const programsData = [
  {
    id: 1,
    headerTitle: "Ask better questions.",
    badge: "Research & policy",
    title: "Youth Research & Policy Fellowship",
    description: "Turn community questions into evidence and policy recommendations that matter.",
    duration: "12 weeks / Hybrid / Africa-wide",
    whoCanApply: "Ages 18–30, based in Africa. Emerging researchers and community advocates; no prior publication required.",
  },
  {
    id: 2,
    headerTitle: "Design with people.",
    badge: "Human-centered design",
    title: "Human-Centered Innovation Lab",
    description: "Listen deeply, co-design a response and test a practical solution with your community.",
    duration: "6 weeks / Guided design sprints",
    whoCanApply: "Ages 18–35, based in Africa. Curious problem-solvers and community teams; all disciplines welcome.",
  },
  {
    id: 3,
    headerTitle: "Build what’s next.",
    badge: "Entrepreneurship",
    title: "Youth Venture Studio",
    description: "Test a bold idea, build a prototype and develop a venture with purpose.",
    duration: "8 weeks / Virtual + studio sessions",
    whoCanApply: "Ages 18–35, based in Africa. Early-stage founders or teams with a community-centered idea.",
  },
];

export default function ProgramsList() {
  return (
    <section className="programs-list-section" id="pathways">
      <div className="programs-list-container">
        <div className="programs-list-header">
          <div className="programs-subtag">
            <span className="subtag-line"></span>
            <span>THREE PATHWAYS</span>
          </div>
          <h2 className="programs-section-title">
            One ambition. More than one way in.
          </h2>
          <p className="programs-section-subtitle">
            Choose the pathway closest to your question or idea. Each combines guided learning, peer exchange and practical application.
          </p>
        </div>

        <div className="programs-notice">
          <span className="notice-bar"></span>
          <p>
            Provisional program portfolio · Eligibility and formats are illustrative. Dates, fees, locations and access support are not confirmed. Applications are not open. Apply buttons show a future action only.
          </p>
        </div>

        <div className="programs-cards-grid">
          {programsData.map((prog) => (
            <div key={prog.id} className="program-card">
              <div className="program-card-top">
                <h3 className="program-top-title">{prog.headerTitle}</h3>
                <span className="program-arrow">↗</span>
              </div>

              <div className="program-card-body">
                <span className="program-badge">{prog.badge}</span>
                <h4 className="program-title">{prog.title}</h4>
                <p className="program-desc">{prog.description}</p>
                
                <div className="program-meta-box">
                  <span className="program-duration">{prog.duration}</span>
                </div>

                <div className="program-audience-box">
                  <span className="audience-label">WHO CAN APPLY</span>
                  <p className="audience-text">{prog.whoCanApply}</p>
                </div>
              </div>

              <div className="program-card-footer">
                <Link to="/contact" className="program-apply-btn">
                  Apply <span>↗</span>
                </Link>
                <Link to="/contact" className="program-details-link">
                  Sample details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}