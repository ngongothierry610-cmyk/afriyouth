import React from "react";
import { Link } from "react-router-dom";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <span className="about-hero-tagline">ABOUT AFRIYOUTH</span>
          <h1 className="about-hero-title">
            Africa’s future should have its youth’s fingerprints on it.
          </h1>
          <p className="about-hero-description">
            We exist to connect the people closest to a challenge with the tools to understand it — and the opportunity to change it.
          </p>
          <div className="about-hero-action">
            <Link to="/about#connected-approach" className="approach-btn">
              Our connected approach <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="about-hero-card">
          <div className="about-hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1000&q=80"
              alt="Youth interacting outdoors near community hub"
              className="about-hero-image"
            />
          </div>
          <div className="about-hero-card-banner">
            <div className="about-hero-card-text">
              <span className="about-hero-card-sub">EVIDENCE → ACTION → IMPACT</span>
              <h3 className="about-hero-card-title">Locally rooted. Future focused.</h3>
            </div>
            <div className="about-hero-card-icon" aria-hidden="true">
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