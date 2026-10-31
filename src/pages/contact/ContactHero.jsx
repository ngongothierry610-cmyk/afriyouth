import React from "react";
import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-container">
        <div className="contact-hero-left">
          <span className="contact-hero-subtag">
            CONTACT / LET’S CONNECT
          </span>
          <h1 className="contact-hero-title">
            A good conversation can change what comes next.
          </h1>
        </div>

        <div className="contact-hero-right">
          <p className="contact-hero-desc">
            Have a question about a program, need support with a challenge or see a possibility for partnership? Tell us a little about yourself and what you have in mind.
          </p>

          <div className="contact-hero-notice">
            <span className="notice-bar"></span>
            <p className="notice-text">
              Website mockup · This form is a design example. It does not submit messages. Contact details below are provisional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}