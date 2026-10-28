import React from "react";
import { Link } from "react-router-dom";
import "./ProgramsFAQ.css";

const faqData = [
  {
    id: 1,
    question: "Do I need previous experience?",
    answer:
      "Not for every pathway. The Research & Policy Fellowship welcomes first-time researchers; the Innovation Lab welcomes all disciplines. The Venture Studio is for an early-stage idea or team.",
  },
  {
    id: 2,
    question: "What does participation involve?",
    answer:
      "The sample formats combine guided sessions, peer feedback and work on a community-centered question or idea. Time commitments, access arrangements and any costs will be confirmed with a future call.",
  },
  {
    id: 3,
    question: "Can I apply now?",
    answer:
      "No. These are provisional program concepts, not live application calls. Apply buttons illustrate the future pathway; confirmed opportunities and application instructions will be published before recruitment.",
  },
];

export default function ProgramsFAQ() {
  return (
    <div className="programs-faq-wrapper">
      {/* FAQ SECTION */}
      <section className="programs-faq-section">
        <div className="programs-faq-container">
          <div className="programs-faq-header">
            <div className="programs-subtag">
              <span className="subtag-line"></span>
              <span>BEFORE YOU BEGIN</span>
            </div>
            <h2 className="programs-faq-title">Good questions. Clear answers.</h2>
            <p className="programs-faq-subtitle">
              A few things to know while the program portfolio is being developed.
            </p>
          </div>

          <div className="programs-faq-list">
            {faqData.map((faq) => (
              <div key={faq.id} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LET'S MOVE FORWARD CTA SECTION */}
      <section className="programs-cta-section">
        <div className="programs-cta-container">
          <div className="programs-cta-left">
            <span className="programs-cta-subtag">LET’S MOVE FORWARD</span>
            <h2 className="programs-cta-title">Not sure where to start?</h2>
            <p className="programs-cta-subtitle">
              Tell us what you care about and what you hope to learn. Start with a conversation, not a perfect application.
            </p>
          </div>

          <div className="programs-cta-right">
            <Link to="/contact" className="programs-contact-btn">
              Contact us <span>↗</span>
            </Link>
            <p className="programs-cta-note">A shared ambition. A practical first step.</p>
          </div>
        </div>
      </section>
    </div>
  );
}