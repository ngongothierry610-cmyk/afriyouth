import React from "react";
import { Link } from "react-router-dom";
import "./ServicesGrid.css";

const servicesData = [
  {
    id: 1,
    title: "Research & evidence",
    description: "Understand a complex challenge through research grounded in young people’s lived experience.",
    tags: "Evidence reviews · Field studies · Synthesis",
    dark: false,
  },
  {
    id: 2,
    title: "Policy & public dialogue",
    description: "Make evidence usable in policy conversations, strategy and public decision-making.",
    tags: "Policy briefs · Consultations · Dialogue design",
    dark: false,
  },
  {
    id: 3,
    title: "Innovation & design",
    description: "Co-create a response, build a prototype and test what people actually need.",
    tags: "Discovery · Design sprints · User testing",
    dark: false,
  },
  {
    id: 4,
    title: "Impact measurement",
    description: "Learn what changes, for whom and why. Build a practical framework for adaptation.",
    tags: "Theory of change · Indicators · Evaluation",
    dark: false,
  },
  {
    id: 5,
    title: "Capacity building",
    description: "Equip teams and young leaders with practical research, design and enterprise skills.",
    tags: "Workshops · Coaching · Learning journeys",
    dark: false,
  },
  {
    id: 6,
    title: "A challenge that crosses boundaries?",
    description: "Combine research, foresight, design and enterprise support in a brief built around your context.",
    tags: null,
    dark: true,
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-grid-section">
      <div className="services-grid-container">
        <div className="services-grid-header">
          <div className="services-grid-subtag">
            <span className="subtag-line"></span>
            <span>WHAT WE CAN HELP WITH</span>
          </div>
          <h2 className="services-grid-title">
            Choose a starting point. Connect the rest.
          </h2>
          <p className="services-grid-subtitle">
            Commission a focused piece of work or combine disciplines into a longer learning and innovation journey.
          </p>
        </div>

        <div className="services-cards-grid">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className={`service-card ${item.dark ? "service-card-dark" : ""}`}
            >
              <div className="service-card-icon-box">
                <span className="service-arrow">↳</span>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.description}</p>
                {item.tags && <span className="service-card-tags">{item.tags}</span>}
              </div>
              <div className="service-card-footer">
                {item.dark ? (
                  <Link to="/contact" className="service-link dark-link">
                    Discuss your brief <span>↗</span>
                  </Link>
                ) : (
                  <Link to="/contact" className="service-link">
                    Explore service <span>↗</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}