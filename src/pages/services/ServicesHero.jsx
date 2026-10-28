import React from "react";
import { Link } from "react-router-dom";
import "./ServicesHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero-section">
      <div className="services-hero-container">
        <div className="services-hero-content">
          <span className="services-hero-subtag">
            SERVICES / INSIGHT TO IMPLEMENTATION
          </span>
          <h1 className="services-hero-title">
            Better questions. Useful evidence. Real-world solutions.
          </h1>
          <p className="services-hero-description">
            Work with us to understand a challenge, design a response and learn what makes a difference. Our services bring youth perspectives into the heart of your work.
          </p>
          <div className="services-hero-action">
            <Link to="/contact" className="request-service-btn">
              Request a service <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="services-hero-card">
          <div className="services-hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Team collaborating on design and models"
              className="services-hero-image"
            />
          </div>
          <div className="services-hero-card-banner">
            <div className="services-hero-card-text">
              <span className="services-hero-card-sub">EVIDENCE → ACTION → IMPACT</span>
              <h3 className="services-hero-card-title">Locally rooted. Future focused.</h3>
            </div>
            <div className="services-hero-card-icon" aria-hidden="true">
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