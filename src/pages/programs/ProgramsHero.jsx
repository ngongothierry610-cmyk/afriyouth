import React from "react";
import { Link } from "react-router-dom";
import "./ProgramsHero.css";

export default function ProgramsHero() {
  return (
    <section className="programs-hero-section">
      <div className="programs-hero-container">
        <div className="programs-hero-content">
          <span className="programs-hero-subtag">
            PROGRAMS / FIND YOUR STARTING POINT
          </span>
          <h1 className="programs-hero-title">
            Ask boldly. Make thoughtfully. Build with purpose.
          </h1>
          <p className="programs-hero-description">
            Explore practical learning pathways that connect evidence, human-centered innovation and entrepreneurship — with Africa's youth leading the work.
          </p>
          <div className="programs-hero-action">
            <Link to="/programs#pathways" className="explore-pathways-btn">
              Explore the pathways <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="programs-hero-card">
          <div className="programs-hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Youth collaborating around a table"
              className="programs-hero-image"
            />
          </div>
          <div className="programs-hero-card-banner">
            <div className="programs-hero-card-text">
              <span className="programs-hero-card-sub">EVIDENCE → ACTION → IMPACT</span>
              <h3 className="programs-hero-card-title">Locally rooted. Future focused.</h3>
            </div>
            <div className="programs-hero-card-icon" aria-hidden="true">
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