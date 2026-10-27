import React from "react";
import { Link } from "react-router-dom";
import "./YouthAuthors.css";

export default function YouthAuthors() {
  return (
    <section className="youth-authors-section">
      <div className="youth-authors-container">
        <div className="youth-authors-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
            alt="Youth working together in a studio layout"
            className="youth-authors-image"
          />
        </div>

        <div className="youth-authors-content">
          <span className="youth-authors-subtag">YOUTH AS AUTHORS</span>
          <h2 className="youth-authors-title">
            With communities. Never just for them.
          </h2>
          <p className="youth-authors-text">
            We start with lived experience, not assumptions. Young people and
            community members should help define the problem, interpret the
            evidence and decide what to test.
          </p>
          <p className="youth-authors-text">
            That means accessible participation, informed consent, fair recognition and
            honest communication about what a project can — and cannot — achieve.
          </p>
          <div className="youth-authors-action">
            <Link to="/service" className="explore-services-btn">
              Explore our services <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}