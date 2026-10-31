import React from "react";
import "./ContactExtraBottom.css";

const journeySteps = [
  {
    number: "01",
    title: "Share the context",
    description: "Explain the question, who is involved and what a useful outcome might look like.",
  },
  {
    number: "02",
    title: "Find the right conversation",
    description: "An enquiry would be routed to the relevant program or practice area.",
  },
  {
    number: "03",
    title: "Agree a next step",
    description: "Explore fit, clarify expectations and decide together whether to take the idea further.",
  },
];

const faqItems = [
  {
    id: 1,
    question: "Can I contact you as an individual?",
    answer: "Yes. A personal question, early idea or learning interest is a valid place to start. Organization is optional.",
  },
  {
    id: 2,
    question: "Should I send sensitive documents?",
    answer: "No. Keep the first message high-level. Do not include identity documents or private research data.",
  },
];

export default function ContactExtraBottom() {
  return (
    <div className="contact-extra-bottom-wrapper">
      {/* SECTION 1: WHAT HAPPENS NEXT */}
      <section className="contact-journey-section">
        <div className="contact-extra-container">
          <div className="contact-section-header">
            <div className="contact-subtag">
              <span className="subtag-line"></span>
              <span>WHAT HAPPENS NEXT</span>
            </div>
            <h2 className="contact-section-title">
              First, let’s understand the possibility.
            </h2>
            <p className="contact-section-subtitle">
              A proposed enquiry journey that keeps expectations clear. Response arrangements will be confirmed before launch.
            </p>
          </div>

          <div className="journey-steps-grid">
            {journeySteps.map((step) => (
              <div key={step.number} className="journey-step-card">
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

      {/* SECTION 2: A FEW THINGS TO KNOW */}
      <section className="contact-faq-section">
        <div className="contact-extra-container contact-faq-container">
          <div className="contact-faq-left">
            <span className="faq-subtag">A FEW THINGS TO KNOW</span>
            <h2 className="contact-faq-title">
              You don’t need a polished proposal.
            </h2>
          </div>

          <div className="contact-faq-right">
            {faqItems.map((item) => (
              <div key={item.id} className="contact-faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}