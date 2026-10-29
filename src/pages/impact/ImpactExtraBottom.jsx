import React from "react";
import { Link } from "react-router-dom";
import "./ImpactExtraBottom.css";

const collaborators = [
  {
    id: 1,
    tag: "CO-AUTHOR THE WORK",
    title: "Youth & communities",
    description: "Bring lived experience, local priorities and the questions that deserve attention.",
  },
  {
    id: 2,
    tag: "CONNECT INSIGHT TO DECISIONS",
    title: "Institutions & organizations",
    description: "Universities, civil society, public institutions and businesses can connect questions with opportunities to act.",
  },
  {
    id: 3,
    tag: "ENABLE THE NEXT STEP",
    title: "Enablers & practitioners",
    description: "Funders, mentors and technical experts can share resources, knowledge and space to experiment.",
  },
];

const caseStudies = [
  {
    id: 1,
    categoryTag: "ILLUSTRATIVE CASE / YOUTH LIVELIHOODS",
    title: "From everyday barriers to a better policy question.",
    description: "A sample youth-led study could explore how young people navigate informal work, skills and access to support.",
    approach: "Proposed approach: listening interviews → shared analysis → policy dialogue. Potential output: an evidence brief and a community-validated set of recommendations. No outcomes are claimed.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    buttonText: "Discuss a similar challenge ↗",
    linkTo: "/contact",
  },
  {
    id: 2,
    categoryTag: "ILLUSTRATIVE CASE / CIRCULAR ENTERPRISE",
    title: "Turning a waste challenge into a testable venture.",
    description: "A sample innovation sprint could bring young founders and community members together to explore repair and reuse services.",
    approach: "Proposed approach: needs discovery → service prototype → small-scale test. Potential output: a tested concept and early operating model. No venture success or environmental benefit is asserted.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    buttonText: "Explore a collaboration ↗",
    linkTo: "/contact",
  },
];

export default function ImpactExtraBottom() {
  return (
    <div className="impact-extra-bottom-wrapper">
      {/* SECTION 1: A WIDER CIRCLE */}
      <section className="impact-collaborators-section">
        <div className="impact-extra-container">
          <div className="impact-section-header">
            <div className="impact-subtag">
              <span className="subtag-line"></span>
              <span>A WIDER CIRCLE</span>
            </div>
            <h2 className="impact-section-title">
              A wider circle of collaborators.
            </h2>
            <p className="impact-section-subtitle">
              These are audiences we seek to engage, not a list of confirmed partners or endorsements.
            </p>
          </div>

          <div className="collaborators-grid">
            {collaborators.map((item) => (
              <div key={item.id} className="collaborator-card">
                <span className="collaborator-tag">{item.tag}</span>
                <h3 className="collaborator-title">{item.title}</h3>
                <p className="collaborator-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PAST WORK / SAMPLE CASE STUDIES */}
      <section className="impact-case-studies-section">
        <div className="impact-extra-container">
          <div className="impact-section-header">
            <div className="impact-subtag">
              <span className="subtag-line"></span>
              <span>PAST WORK / SAMPLE CASE STUDIES</span>
            </div>
            <h2 className="impact-section-title">
              What evidence-to-action could look like.
            </h2>
            <p className="impact-section-subtitle">
              Illustrative case studies show the kind of connected work we envision. They are not completed AfriYouth projects or evidence of an existing track record.
            </p>
          </div>

          <div className="case-studies-list">
            {caseStudies.map((caseItem) => (
              <div key={caseItem.id} className="case-study-card">
                <div className="case-study-image-box">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="case-study-img"
                  />
                </div>
                <div className="case-study-content">
                  <span className="case-study-tag">{caseItem.categoryTag}</span>
                  <h3 className="case-study-title">{caseItem.title}</h3>
                  <p className="case-study-desc">{caseItem.description}</p>
                  <p className="case-study-approach">{caseItem.approach}</p>
                  <div className="case-study-action">
                    <Link to={caseItem.linkTo} className="case-study-btn">
                      {caseItem.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}