import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container"> 
        <div className="hero-content">
          <span className="hero-tagline">AFRICA'S NEXT CHAPTER IS YOUTH-LED</span>
          <h1 className="hero-title">
            Evidence. Innovation. Enterprise. Youth in the lead.
          </h1>
          <p className="hero-description">
            We empower Africa’s youth to generate evidence, shape policy, drive enterprise, and build scalable solutions.
          </p>
        </div>
        <div className="hero-card">
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Youth collaborating around a table"
              className="hero-image"
            />
          </div>
          <div className="hero-card-banner">
            <div className="hero-card-text">
              <span className="hero-card-sub">EVIDENCE → ACTION → IMPACT</span>
              <h3 className="hero-card-title">Locally rooted. Future focused.</h3>
            </div>
            
            <div className="hero-card-icon" aria-hidden="true">
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