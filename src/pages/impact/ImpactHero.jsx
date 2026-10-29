import React from "react";
import { Link } from "react-router-dom";
import "./ImpactHero.css";

export default function ImpactHero() {
  return (
    <section className="impact-hero-section">
      <div className="impact-hero-container">
        <div className="impact-hero-content">
          <span className="impact-hero-subtag">
            IMPACT & PARTNERSHIPS / IMPACT & RESOURCES
          </span>
          <h1 className="impact-hero-title">
            Evidence becomes powerful when we act on it together.
          </h1>
          <p className="impact-hero-description">
            We connect young people, organizations and partners around shared questions — and a commitment to learn what creates meaningful change.
          </p>
          <div className="impact-hero-action">
            <Link to="/contact" className="start-conversation-btn">
              Start a conversation <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="impact-hero-card">
          <div className="impact-hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="People collaborating outdoors near a community hub"
              className="impact-hero-image"
            />
          </div>
          <div className="impact-hero-card-banner">
            <div className="impact-hero-card-text">
              <span className="impact-hero-card-sub">EVIDENCE → ACTION → IMPACT</span>
              <h3 className="impact-hero-card-title">Locally rooted. Future focused.</h3>
            </div>
            <div className="impact-hero-card-icon" aria-hidden="true">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}