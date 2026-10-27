import React from "react";
import { Link } from "react-router-dom";
import "./Programs.css";

const programsData = [
  {
    id: 1,
    tag: "Research & policy",
    title: "Ask better questions.",
    description: "Turn community questions into evidence and policy recommendations that matter.",
    duration: "12 weeks / Hybrid / Africa-wide",
    whoCanApply: "Ages 18–30, based in Africa. Emerging researchers and community advocates; no prior publication required.",
    applyLink: "/programs",
    detailsLink: "/programs",
  },
  {
    id: 2,
    tag: "Human-centered design",
    title: "Design with people.",
    description: "Listen deeply, co-design a response and test a practical solution with your community.",
    duration: "6 weeks / Guided design sprints",
    whoCanApply: "Ages 18–35, based in Africa. Curious problem-solvers and community teams; all disciplines welcome.",
    applyLink: "/programs",
    detailsLink: "/programs",
  },
  {
    id: 3,
    tag: "Entrepreneurship",
    title: "Build what’s next.",
    description: "Test a bold idea, build a prototype and develop a venture with purpose.",
    duration: "8 weeks / Virtual + studio sessions",
    whoCanApply: "Ages 18–35, based in Africa. Early-stage founders or teams with a community-centered idea.",
    applyLink: "/programs",
    detailsLink: "/programs",
  },
];

export default function Programs() {
  return (
    <section className="programs-section">
      <div className="programs-container">
        <div className="programs-header">
          <div className="programs-subtag">
            <span className="subtag-line"></span>
            <span>LEARN. TEST. BUILD.</span>
          </div>
          <h2 className="programs-title">Your ideas. Africa’s possibilities.</h2>
          <p className="programs-subtitle">
            Three pathways for young researchers, community innovators and purposeful founders. Find the starting point that fits your ambition.
          </p>
        </div>

        <div className="programs-notice">
          <span className="notice-bar"></span>
          <p>
            Sample program portfolio · Formats and eligibility are illustrative. Dates, fees and access support are to be confirmed. Applications are not open; Apply is a proposed future action.
          </p>
        </div>

        <div className="programs-grid">
          {programsData.map((prog) => (
            <div className="program-card" key={prog.id}>
              <div className="card-top-header">
                <h3 className="card-heading">{prog.title}</h3>
                <span className="card-arrow">↗</span>
              </div>

              <div className="card-body-content">
                <div className="card-pill-tag">{prog.tag}</div>
                <p className="card-desc">{prog.description}</p>
                
                <div className="card-divider"></div>
                <div className="card-meta">
                  <span className="meta-duration">{prog.duration}</span>
                </div>

                <div className="card-divider"></div>
                <div className="card-who">
                  <span className="who-title">WHO CAN APPLY</span>
                  <p className="who-text">{prog.whoCanApply}</p>
                </div>

                <div className="card-actions">
                  <Link to={prog.applyLink} className="apply-btn">
                    Apply <span>↗</span>
                  </Link>
                  <Link to={prog.detailsLink} className="details-link">
                    Sample details <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="programs-footer-action">
          <Link to="/programs" className="explore-all-btn">
            Explore all programs <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}