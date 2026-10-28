import React from "react";
import "./ServicesValue.css";

const valueItems = [
  {
    id: 1,
    title: "Context before assumptions",
    description: "Youth insight and community knowledge shape the work from the start.",
  },
  {
    id: 2,
    title: "Outputs people can use",
    description: "Clear briefs, tested concepts and learning tools designed for their audience.",
  },
  {
    id: 3,
    title: "Capability that stays",
    description: "Co-creation and knowledge transfer help teams continue after the engagement.",
  },
];

export default function ServicesValue() {
  return (
    <section className="services-value-section">
      <div className="services-value-container">
        <div className="services-value-left">
          <span className="services-value-subtag">THE VALUE WE PROVIDE</span>
          <h2 className="services-value-title">
            Clarity for decisions. Capacity for action.
          </h2>
          <p className="services-value-subtitle">
            We connect rigorous inquiry with practical making. The aim is not a report that sits on a shelf, but a shared understanding of what to do next.
          </p>
        </div>

        <div className="services-value-right">
          {valueItems.map((item) => (
            <div className="value-item" key={item.id}>
              <h3 className="value-item-title">{item.title}</h3>
              <p className="value-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}