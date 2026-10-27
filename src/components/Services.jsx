import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    description: "Ask the questions that communities need answered.",
    tags: "Evidence reviews · Participatory studies",
    link: "/service",
  },
  {
    id: 2,
    description: "Translate youth insight into practical policy choices.",
    tags: "Policy briefs · Dialogue · Advocacy",
    link: "/service",
  },
  {
    id: 3,
    description: "Co-design and test solutions with the people who use them.",
    tags: "Design sprints · Prototypes · User testing",
    link: "/service",
  },
  {
    id: 4,
    description: "Build purposeful ventures grounded in real needs.",
    tags: "Venture design · Validation · Mentoring",
    link: "/service",
  },
  {
    id: 5,
    description: "Grow the skills and confidence to lead meaningful change.",
    tags: "Leadership · Career skills · Peer learning",
    link: "/service",
  },
  {
    id: 6,
    description: "Explore possible futures and learn what makes a difference.",
    tags: "Scenarios · Learning frameworks · Evaluation",
    link: "/service",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="services-subtag">
            <span className="subtag-line"></span>
            <span>ONE CONNECTED PRACTICE</span>
          </div>
          <h2 className="services-title">Six ways to move ideas forward.</h2>
          <p className="services-subtitle">
            From the first question to a tested solution, our practice connects the skills and perspectives that change requires.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((item) => (
            <div className="service-card" key={item.id}>
              <div className="card-top">
                <div className="arrow-box">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#123023"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>

              <div className="card-bottom">
                <p className="card-description">{item.description}</p>
                <p className="card-tags">{item.tags}</p>
                <Link to={item.link} className="card-link">
                  Explore service <span>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}